// Almacena el código fuente original de cada diagrama Mermaid
const mermaidSources = new Map();

document.addEventListener('DOMContentLoaded', () => {
    // Guardar el código fuente original de cada diagrama antes de que Mermaid lo procese
    document.querySelectorAll('.mermaid').forEach(el => {
        // Un clon para evitar manipular el DOM directamente antes de Mermaid
        let cloned = el.cloneNode(true);
        // Las etiquetas <br> se convierten en saltos de línea literales '\n' antes de extraer el texto
        cloned.querySelectorAll('br').forEach(br => br.replaceWith('\n'));
        mermaidSources.set(el, cloned.textContent.trim());
    });

    // Verificar si hay un idioma guardado en localStorage
    let idioma = localStorage.getItem('idioma-preferido');

    if (!idioma || (idioma !== 'es' && idioma !== 'en')) {
        // Si no hay idioma guardado, detectar el idioma del navegador
        idioma = navigator.language || navigator.userLanguage; // "en-US", "es-MX" etc.
        idioma = idioma.split('-')[0]; // Tomar solo la parte principal "en", "es", "fr"

        // Seleccionar idioma disponible, por defecto a inglés si no hay coincidencia
        if (idioma !== 'es' && idioma !== 'en') {
            idioma = 'en';
        }
    }

    // Inicializar en el idioma detectado o guardado
    setLanguage(idioma);
});

let currentLanguage = 'es'; // Idioma inicial

function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    // Guardar la preferencia de idioma para futuras visitas
    localStorage.setItem('idioma-preferido', lang);
    const esElements = document.querySelectorAll('.content-es');
    const enElements = document.querySelectorAll('.content-en');
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    if (lang === 'es') {
        esElements.forEach(el => el.style.display = '');
        enElements.forEach(el => el.style.display = 'none');
        btnEs.classList.add('activo');
        btnEs.classList.remove('inactivo');
        btnEn.classList.remove('activo');
        btnEn.classList.add('inactivo');
        currentLanguage = 'es';
    } else {
        esElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = '');
        btnEs.classList.remove('activo');
        btnEs.classList.add('inactivo');
        btnEn.classList.add('activo');
        btnEn.classList.remove('inactivo');
        currentLanguage = 'en';
    }

    // Re-renderizar los diagramas Mermaid que ahora son visibles
    // y luego procesar MathJax en toda la página
    rerenderMermaidDiagrams(lang);
}

// Esperar a que MathJax esté listo
async function waitForMathJax() {
    let attempts = 0;
    while ((typeof MathJax === 'undefined' || !MathJax.typesetPromise) && attempts < 50) {
        await new Promise(r => setTimeout(r, 100));
        attempts++;
    }
    return typeof MathJax !== 'undefined' && MathJax.typesetPromise;
}

async function rerenderMermaidDiagrams(lang) {
    const visibleSelector = lang === 'es' ? '.content-es .mermaid' : '.content-en .mermaid';
    const visibleDiagrams = document.querySelectorAll(visibleSelector);

    // 1. Re-renderizar diagramas Mermaid (si existen)
    if (visibleDiagrams.length > 0) {
        visibleDiagrams.forEach(el => {
            if (el.getAttribute('data-processed') === 'true') {
                const originalSource = mermaidSources.get(el);
                if (originalSource) {
                    el.removeAttribute('data-processed');
                    el.innerHTML = originalSource;
                }
            }
        });

        await new Promise(resolve => requestAnimationFrame(resolve));

        try {
            await mermaid.run({ nodes: Array.from(visibleDiagrams) });
        } catch (e) {
            console.warn('Mermaid rerender skipped:', e);
        }
    }

    // 2. Esperar a MathJax
    const mathJaxReady = await waitForMathJax();
    if (!mathJaxReady) return;

    // 3. Procesar MathJax en labels de Mermaid (usando contenedor temporal
    //    porque MathJax no puede manipular nodos dentro de SVG foreignObject)
    if (visibleDiagrams.length > 0) {
        for (const diagram of visibleDiagrams) {
            const labels = diagram.querySelectorAll('.nodeLabel, .edgeLabel, .label');
            for (const label of labels) {
                if (!label.textContent.includes('$')) continue;

                const tempDiv = document.createElement('div');
                tempDiv.style.cssText = 'position:absolute;left:-9999px;visibility:hidden';
                tempDiv.innerHTML = label.innerHTML;
                document.body.appendChild(tempDiv);

                try {
                    await MathJax.typesetPromise([tempDiv]);
                    label.innerHTML = tempDiv.innerHTML;
                } catch (e) {
                    console.warn('MathJax label error:', e);
                } finally {
                    document.body.removeChild(tempDiv);
                }
            }
        }
    }

    // 4. Procesar MathJax en el resto del contenido visible de la página
    //    (ya que auto-typeset está desactivado)
    const visibleContent = lang === 'es'
        ? document.querySelectorAll('.content-es')
        : document.querySelectorAll('.content-en');

    const nonMermaidElements = [];
    visibleContent.forEach(el => {
        // Excluir los diagramas Mermaid (ya procesados arriba)
        if (!el.querySelector('.mermaid')) {
            nonMermaidElements.push(el);
        } else {
            // Si contiene un .mermaid, procesar solo los elementos no-mermaid dentro
            el.querySelectorAll(':scope > *:not(.mermaid):not(figure.mermaid)').forEach(child => {
                nonMermaidElements.push(child);
            });
        }
    });

    // También procesar contenido fuera de content-es/content-en (artículos, secciones generales)
    document.querySelectorAll('article, section').forEach(el => {
        if (!el.closest('.content-es') && !el.closest('.content-en') && !el.closest('.mermaid')) {
            nonMermaidElements.push(el);
        }
    });

    if (nonMermaidElements.length > 0) {
        try {
            MathJax.typesetClear(nonMermaidElements);
            await MathJax.typesetPromise(nonMermaidElements);
        } catch (e) {
            console.warn('MathJax page typeset error:', e);
        }
    }
}
