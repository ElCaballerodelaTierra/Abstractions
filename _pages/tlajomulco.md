---
published: true
canvas: true

layout: default

imagenPortada: /assets/tlajomulco/tlajomulco.jpg
descripcionImagenPortada-es: "Arco del templo, arquitectura tradicional del pueblo"
descripcionImagenPortada-en: "Arch of the temple, traditional architecture of the town"

titulo-es: Tlajomulco
subtitulo-es: Los azules y verdes se tornaron naranjas y rojos
content-es: |

    <i> Artículo publicado a principios del siglo XXI en el contexto de la guerra contra el narcotráfico en México y el cambio climático. </i>

titulo-en: Tlajomulco
subtitulo-en: The blues and greens turned orange and red 
content-en: |
    <i> Article published in the early 21st century in the context of the war against drug trafficking in Mexico and climate change. </i>
---

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin: 1.5rem 0;
}
.gallery .gallery-item {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: opacity 0.3s ease;
}
.gallery .gallery-item:hover {
  opacity: 0.9;
}
.gallery .gallery-item.expanded {
  grid-column: 1 / -1;
  aspect-ratio: auto;
}
.gallery .gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  margin: 0;
  border-radius: 0;
}
.gallery .gallery-item.expanded img {
  height: auto;
  max-height: 90vh;
  object-fit: contain;
}
@media (max-width: 600px) {
  .gallery {
    gap: 2px;
  }
}
</style>

<div class="gallery">
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/arcos-del-hospital-del-templo.jpeg" alt="Arcos del hospital del templo" loading="lazy"> <figcaption class="content-es">Arcos del hospital del templo</figcaption> <figcaption class="content-en">Arch of the temple</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/bolillos-en-la-mañana.jpeg" alt="Bolillos y tortillas colgados en una tienda por la mañana" loading="lazy"> <figcaption class="content-es">Bolillos y tortillas colgados en una tienda por la mañana</figcaption> <figcaption class="content-en">Bread and tortillas hanging in a store in the morning</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/casa-de-la-cultura.jpeg" alt="Casa de la cultura" loading="lazy"> <figcaption class="content-es">Casa de la cultura</figcaption> <figcaption class="content-en">House of culture</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/casa-rustica.jpeg" alt="Casa rústica" loading="lazy"> <figcaption class="content-es">Casa rústica</figcaption> <figcaption class="content-en">Rustic house</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/dos-barcos.jpeg" alt="Dos barcos" loading="lazy"> <figcaption class="content-es">Dos barcos</figcaption> <figcaption class="content-en">Two boats</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/mi-ventana.jpeg" alt="Mi ventana" loading="lazy"> <figcaption class="content-es">Mi ventana</figcaption> <figcaption class="content-en">My window</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/plaza-central.jpeg" alt="Plaza central" loading="lazy"> <figcaption class="content-es">Plaza central</figcaption> <figcaption class="content-en">Central square</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/torre-de-la-iglesia.jpeg" alt="Torre de la iglesia" loading="lazy"> <figcaption class="content-es">Torre de la iglesia</figcaption> <figcaption class="content-en">Church tower</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/un-día-nublado.jpeg" alt="Un día nublado" loading="lazy"> <figcaption class="content-es">Un día nublado</figcaption> <figcaption class="content-en">A cloudy day</figcaption></div>
</div>

<script>
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const wasExpanded = this.classList.contains('expanded');
      
      galleryItems.forEach(i => i.classList.remove('expanded'));
      
      if (!wasExpanded) {
        this.classList.add('expanded');
        setTimeout(() => {
          this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
      }
    });
  });
</script>