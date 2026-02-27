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

    // Detectar el idioma del navegador
    let idioma = navigator.language || navigator.userLanguage; // "en-US", "es-MX" etc.
    idioma = idioma.split('-')[0]; // Tomar solo la parte principal "en", "es", "fr"

    // Seleccionar idioma disponible, por defecto a inglés si no hay coincidencia
    if (idioma !== 'es' && idioma !== 'en') {
        idioma = 'en';
    }

    // Inicializar en el idioma detectado
    setLanguage(idioma);
});

let currentLanguage = 'es'; // Idioma inicial

function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    const esElements = document.querySelectorAll('.content-es');
    const enElements = document.querySelectorAll('.content-en');
    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    if (lang === 'es') {
        esElements.forEach(el => el.style.display = '');
        enElements.forEach(el => el.style.display = 'none');
        btnEs.style.backgroundColor = 'var(--naranja)';
        btnEn.style.backgroundColor = 'var(--gris)';
        currentLanguage = 'es';
    } else {
        esElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = '');
        btnEs.style.backgroundColor = 'var(--gris)';
        btnEn.style.backgroundColor = 'var(--naranja)';
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

        // Agregar clase para que MathJax procese el interior (evitando el bloqueo de ignoreHtmlClass general)
        visibleDiagrams.forEach(el => el.classList.add('mathjax-process'));

        // Re-procesar las fórmulas matemáticas con MathJax
        if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
            await MathJax.typesetPromise(Array.from(visibleDiagrams));
        }
    } catch (e) {
        // Silenciar errores si mermaid aún no está disponible
        console.warn('Mermaid rerender skipped:', e);
    }
}
