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
    rerenderMermaidDiagrams(lang);
}

async function rerenderMermaidDiagrams(lang) {
    const visibleSelector = lang === 'es' ? '.content-es .mermaid' : '.content-en .mermaid';
    const visibleDiagrams = document.querySelectorAll(visibleSelector);

    if (visibleDiagrams.length === 0) return;

    visibleDiagrams.forEach(el => {
        // Solo re-renderizar si ya fue procesado por Mermaid
        if (el.getAttribute('data-processed') === 'true') {
            const originalSource = mermaidSources.get(el);
            if (originalSource) {
                // Restaurar el código fuente original y limpiar el SVG renderizado
                el.removeAttribute('data-processed');
                el.innerHTML = originalSource;
            }
        }
    });

    // Esperar un frame para asegurar que el contenedor es visible antes de renderizar
    await new Promise(resolve => requestAnimationFrame(resolve));

    try {
        await mermaid.run({ nodes: Array.from(visibleDiagrams) });

        // Re-procesar las fórmulas matemáticas con MathJax
        const processMath = async () => {
            let attempts = 0;
            while ((typeof MathJax === 'undefined' || !MathJax.typesetPromise) && attempts < 50) {
                await new Promise(r => setTimeout(r, 100));
                attempts++;
            }
            if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
                const labelsToProcess = [];
                visibleDiagrams.forEach(diagram => {
                    diagram.querySelectorAll('.nodeLabel, .edgeLabel, .label').forEach(label => {
                        label.classList.add('mathjax-process');
                        labelsToProcess.push(label);
                    });
                });
                if (labelsToProcess.length > 0) {
                    await MathJax.typesetPromise(labelsToProcess);
                } else {
                    visibleDiagrams.forEach(el => el.classList.add('mathjax-process'));
                    await MathJax.typesetPromise(Array.from(visibleDiagrams));
                }
            }
        };
        await processMath();
    } catch (e) {
        // Silenciar errores si mermaid aún no está disponible
        console.warn('Mermaid rerender skipped:', e);
    }
}
