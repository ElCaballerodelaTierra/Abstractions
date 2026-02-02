// Detectar el idioma del navegador
let idioma = navigator.language || navigator.userLanguage; // "en-US", "es-MX" etc.
idioma = idioma.split('-')[0]; // Tomar solo la parte principal "en", "es", "fr"

// Seleccionar idioma disponible, por defecto a inglés si no hay coincidencia
if (idioma !== 'es' && idioma !== 'en') {
    idioma = 'en';
}

// Inicializar en el idioma detectado
setLanguage(idioma);

let currentLanguage = 'es'; // Idioma inicial

function setLanguage(lang) {
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
}
