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

    <i> Artículo publicado a principios del siglo XXI en el contexto de la guerra contra el narcotráfico en México y el inicio de la crisis climática en el mundo. </i>

titulo-en: Tlajomulco
subtitulo-en: The blues and greens turned orange and red 
content-en: |
    <i> Article published in the early 21st century in the context of the war against drug trafficking in Mexico and the start of the climate crisis in the world. </i>
---

<style>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin: 20px 0;
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
  max-height: 100vh;
  object-fit: contain;
}

@media (max-width: 600px) {
  .gallery {
    gap: 2px;
  }
}
</style>

{% include musica.html id="tlajomulco" src="/assets/tlajomulco/Golondrina%20de%20Ojos%20Negros%20(instrumental)%20-%20David%20Zaizar%20(comprimido).mp3" %}

<div class="gallery">
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/arcos-del-hospital-del-templo.JPEG" alt="Arcos del hospital del templo" loading="lazy"> <figcaption class="content-es">Arcos del hospital del templo</figcaption> <figcaption class="content-en">Archs of the hospital's church</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/bolillos-en-la-mañana.JPEG" alt="Bolillos y tortillas colgados en una tienda por la mañana" loading="lazy"> <figcaption class="content-es">Bolillos y tortillas colgados por la mañana antes de la apertura de la tienda </figcaption> <figcaption class="content-en">Bread and tortillas hanging in a store before opening</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/casa-de-la-cultura.JPEG" alt="Casa de la cultura" loading="lazy"> <figcaption class="content-es">Interior de la casa de la cultura del pueblo</figcaption> <figcaption class="content-en">Inside the town's house of culture</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/casa-rustica.JPEG" alt="Casa rústica" loading="lazy"> <figcaption class="content-es">Muchas casas todavía son de adobe</figcaption> <figcaption class="content-en">Many houses are still made of adobe</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/dos-barcos.JPEG" alt="Dos barcos" loading="lazy"> <figcaption class="content-es">Dos barcos, la abstracción y la realidad, repisa de mi cuarto</figcaption> <figcaption class="content-en">Two boats, abstraction and reality, my room's shelf</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/mi-ventana.JPEG" alt="Mi ventana" loading="lazy"> <figcaption class="content-es">Mi ventana</figcaption> <figcaption class="content-en">My window</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/plaza-central.JPEG" alt="Plaza central" loading="lazy"> <figcaption class="content-es">Plaza central del pueblo</figcaption> <figcaption class="content-en">Town's central square</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/torre-de-la-iglesia.JPEG" alt="Torre de la iglesia" loading="lazy"> <figcaption class="content-es">Torre de la iglesia, una de las pocas iglesias donde la torre está separada del edificio central</figcaption> <figcaption class="content-en">Church tower, one of the few churches where the tower is separated from the main building</figcaption></div>
  <div class="gallery-item"><img src="/assets/tlajomulco/galería/un-día-nublado.JPEG" alt="Un día nublado" loading="lazy"> <figcaption class="content-es">Un día lluvioso</figcaption> <figcaption class="content-en">A rainy day</figcaption></div>
</div>

 <h1>Tlajomulco</h1>

<p class="content-es">El pequeño pueblo donde crecí ha cambiado en los últimos años.</p>


<p class="content-en">The small town where I grew up has changed in the last years.</p>

<figure hidden>
  <img src="/assets/tlajomulco/Vista desde el cerro.JPEG" alt="Vista desde el cerro">
  <figcaption class="content-es">El pueblo visto desde el cerro</figcaption>
  <figcaption class="content-en">The town seen from the hill</figcaption>
</figure>

<div style="display: none; flex-direction: column; gap: 15px;">

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.mural.com.mx/proyectan-para-tlajomulco-un-peor-aumento-de-temperatura/ar2584256" data-iframely-url="https://iframely.net/LCfcGia?card=small&theme=dark"></a></div></div><script async src="https://iframely.net/embed.js"></script>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.jornada.com.mx/noticia/2023/05/08/estados/tlajomulco-epicentro-de-fosas-clandestinas-en-jalisco-9220" data-iframely-url="https://iframely.net/hi8hyUb9?card=small&theme=dark"></a></div></div><script async src="https://iframely.net/embed.js"></script>

</div>


<!-- <h2>Un día típico</h2>

<p class="content-es">Comer en el mercado</p>

<p class="content-en">Eating at the market</p> -->

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