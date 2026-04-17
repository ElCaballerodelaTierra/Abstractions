---
published: true
canvas: true

layout: default
mediaPortada: true
titulo-en-portada: false

# imagenPortada: /assets/elartedeconectarlospuntos/red-dinamica.svg
imagenPortada: /assets/redes/Red.jpg
#descripcionImagenPortada-es: "Ilustración de una red de conexiones entre personas"
#descripcionImagenPortada-en: "Illustration of a network of connections between people"

titulo-es: El arte de conectar los puntos
subtitulo-es: 
frase-es: |
    "Bienvenidos al arte de conectar los puntos"
frase-autor-es:
frase-contexto-es:

content-es: |
    
    <i> Resumen de la tesis: "Comprendiendo y atacando la corrupción, un análisis mediante teoría de redes y teoría de juegos a los sistemas sociales y su evolución". </i>
    
    <figure>
    <img src="/assets/elartedeconectarlospuntos/Tesis - Carlos Villarreal.svg" alt="Tesis - Carlos Villarreal" style="display: none;">
    <object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Tesis - Carlos Villarreal.svg" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.7" aria-label="Tesis - Carlos Villarreal"></object>
    </figure>
    <button><a href="assets/elartedeconectarlospuntos/Tesis - Comprendiendo y atacando la corrupción.pdf" target="_blank">📄 Descargar</a></button> 

    <hr style="margin-top: 20px; margin-bottom: 10px;">
    
    # Resumen

    Se propone un nuevo modelo matemático que simula la propagación y erradicación de la corrupción en distintas sociedades. Por medio de simulaciones, se revela que la corrupción es un fenómeno estructural donde el estado de derecho, los castigos y los costos de vigilancia determinan la estabilidad del sistema. <br><br>
    Entre los hallazgos principales, destaca que las intervenciones aleatorias resultan más efectivas para desmantelar redes corruptas que los ataques dirigidos a sus núcleos centrales. Los resultados ofrecen una justificación teórica para diseñar políticas públicas más inteligentes que logren transformar sociedades corruptas en sistemas cooperativos y transparentes.


titulo-en: The art of connecting the dots
subtitulo-en:
frase-en: |
   "Welcome to the art of connecting the dots"
frase-autor-en:
frase-contexto-en:

content-en: |

    <i> Summary of the thesis: "Understanding and attacking corruption, an analysis through network theory and game theory of social systems and their evolution". </i>
    
    <figure>
    <img src="/assets/elartedeconectarlospuntos/Tesis - Carlos Villarreal.svg" alt="Thesis - Carlos Villarreal" style="display: none;">
    <object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Tesis - Carlos Villarreal.svg" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.7" aria-label="Thesis - Carlos Villarreal"></object>
    </figure>
    <button><a href="assets/elartedeconectarlospuntos/Tesis - Comprendiendo y atacando la corrupción.pdf" target="_blank">📄 Download [ES]</a></button> 

    <hr style="margin-top: 20px; margin-bottom: 10px;">

    # Abstract

    A new mathematical model is proposed that simulates the spread and eradication of corruption in different societies. Through simulations, it is revealed that corruption is a structural phenomenon where the rule of law, punishments, and monitoring costs determine the stability of the system. <br><br>
    Among the main findings, it highlights that random interventions are more effective in dismantling corrupt networks than attacks directed at their central cores. The results offer a theoretical justification for designing smarter public policies that can transform corrupt societies into cooperative and transparent systems.
---

<div class="content-es">
<br>
<hr>

<br>
<h2>Índice</h2>    

<ul style="padding-left: 20px;">
  <li><a href="#podemos-predecir">¿Podemos predecir y detener la corrupción?</a></li>
  <li><a href="#que-es-corrupcion">¿Que es la corrupción?</a>
    <ul style="padding-left: 20px; list-style-type: square;">
      <li><a href="#modelando-corrupcion">Modelar la corrupción</a>
        <ul style="padding-left: 20px; list-style-type: circle;">
          <li><a href="#enfoque-redes">Enfoque mediante teoría de redes</a></li>
          <li><a href="#enfoque-juegos">Enfoque mediante teoría de juegos</a>
            <ul style="padding-left: 20px; list-style-type: square;">
              <li><a href="#avispa">El avispero</a></li>
            </ul>
          </li>
          <li><a href="#enfoque-mixto">Enfoque mixto: teoría de redes y juegos</a></li>
        </ul>
      </li>
    </ul>
    <li><a href="#nuevo-modelo">Desarrollo de un nuevo modelo</a></li>
    <li><a href="#poniendo-a-prueba">Poniendo a prueba el modelo</a>
        <ul style="padding-left: 20px; list-style-type: circle;">
          <li><a href="#la-robustez-de-las-sociedades">La robustez de las sociedades</a></li>
          <li><a href="#subred-corrupta">Las subredes corruptas</a></li>
          <li><a href="#como-atacamos-la-red">¿Cómo atacar una red corrupta?</a>
            <ul style="padding-left: 20px; list-style-type: square;">
              <li><a href="#todos-los-escenarios">Todos los escenarios posibles</a></li>
            </ul>
          </li>
        </ul>
      </li>
  </li>
  <li><a href="#conclusion">Conclusión</a>
    <ul style="padding-left: 20px; list-style-type: square;">
      <li><a href="#limitaciones">Limitaciones del trabajo</a></li>
      <li><a href="#trabajo-futuro">Trabajo futuro</a></li>
    </ul>
  </li>
  <li><a href="#bibliografia">Bibliografía</a></li>
</ul>
<br>

<!-- <img src="/assets/elartedeconectarlospuntos/red-dinamica.svg" alt="Red dinámica" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/red-dinamica.svg" style="width: 100%; height: auto; display: block; margin: 0 auto;" aria-label="Red dinámica"></object> -->

<hr>
<br>
<h2 id="podemos-predecir">¿Podemos predecir y detener la corrupción?</h2>

<p>Se han propuesto diferentes políticas anticorrupción a lo largo del mundo. Los países escandinavos, encabezados por Dinamarca, han optado por la transparencia financiera y la rendición de cuentas (<a href="#chene_2011">Chêne, 2011</a>), otros como en el caso de Singapur han optado por estrategias basadas en castigos severos a los individuos (<a href="#gossain_2019">Gossaín, 2019</a>). Sin embargo, estas estrategias no siempre son replicables en paises con diferentes contextos sociales, culturales y políticos. Para entender por qué persiste la corrupción, es necesario comprender cómo interactúan las personas y qué incentivos tienen para corromperse o mantenerse honestas.</p>

<p>Recientemente, la humanidad encontró un nuevo aliado en la lucha contra la corrupción: <b>las matemáticas</b>. En los últimos años gracias a la popularización de los ordenadores personales los modelos matemáticos emergieron como herramientas en la lucha contra la corrupción. En especial la modelación mediante teoría de redes y teoría de juegos.</p>

<p> Tal es el caso que nuevos estudios han documentado y analizado casos de corrupción con estos enfoques (<a href="#luna-pla&nicolas-carlock_2020">Luna-Pla y Nicolás-Carlock, 2020</a>).
</p>

<h2 id="que-es-corrupcion">¿Qué es la corrupción?</h2>

<p>La corrupción es un fenómeno complejo que puede manifestarse desde un soborno hasta el desvío de recursos públicos, pero en esencia, se puede definir como:</p>

<p style="text-align: right; width: 95%;"><cite><strong>“El abuso del poder confiado a una persona para obtener una ganancia privada”</strong></cite>
<br><br> (<a href="#transparencia_2023" target="_blank">Transparencia Internacional, 2024</a>)</p>

<p>Una definición matemática de la corrupción debe considerar dos ideas centrales: el <b>poder</b> como una red de relaciones, y la <b>ganancia</b> como resultado de decisiones estratégicas basadas en riesgos y beneficios. <br><br>

Para modelarlo, se han seguido dos enfoques principales: la teoría de redes, que analiza la estructura y los actores dentro de sistemas corruptos, y la teoría de juegos, que estudia las decisiones estratégicas de los individuos. Aunque cada enfoque tiene sus limitaciones, al combinarlos se obtiene una representación más completa del fenómeno.</p>

<h3 id="modelando-corrupcion">Modelar la corrupción</h3>

<p>El trabajo se basó principalmente en tres artículos, cada uno de ellos aportó un enfoque distinto.</p>

<h4 id="enfoque-redes">Enfoque mediante teoría de redes</h4>

<figure id="red-espanola">
<img src="/assets/elartedeconectarlospuntos/Red española.png" alt="Red española" style="width: 70%; height: auto; display: block; margin: 0 auto;">
<figcaption>Figura 1: Red corrupta española (<a href="#martins_et_al">Martins et al., 2022</a>).</figcaption>
</figure>

<p>(<a href="#martins_et_al">Martins et al., 2022</a>) documentaron y recrearon las redes asociadas a escándalos de corrupción en España y Brasil (<a href="#red-espanola">Figura 1</a>). Identificaron las propiedades comunes entre ellas y posteriormente desarrollaron un algoritmo que replicaba las propiedades de las redes corruptas.</p>

 <div hidden class="content-es">
     <!-- Mermaid diagram -->
    <figure class="mermaid diagramaDeFlujo">
        flowchart TD
        A(["Inicio del algoritmo"]) --> B[/"$N, \lambda, \alpha, \beta, p$"/]
        B --> C["Se crea una red vacía"]
        C --> D{"$i > N$"}
        D -- Sí --> E(["Fin del algoritmo"])
        D -- No --> F["Se crea una red completa de tamaño aleatorio <br> $P(x) \sim e^{-x/\lambda}$"]
        F --> G["Se calculan los nodos reincidentes <br> $r = \alpha n - \beta$"]
        G --> H["Se asignan los nodos reincidentes mediante probabilidades, <br> $p$ para reincidentes y $1-p$ para nodos normales"]
        H --> I["Se aumenta el contador de las iteraciones <br> $i = i + 1$"]
        I --> D
        I ~~~ E
    </figure>
    <figcaption>Diagrama de flujo que representa las partes más importantes del algoritmo propuesto por Martins et al. </figcaption>
 </div>

<h4 id="enfoque-juegos">Enfoque mediante teoría de juegos</h4>

<figure>
<img src="/assets/elartedeconectarlospuntos/Juego de la corrupción.svg" alt="Juego de la corrupción" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Juego de la corrupción.svg" style="width: 70%; height: auto; display: block; margin: 0 auto;" aria-label="Juego de la corrupción"></object>
<figcaption>Tabla 1: Matriz de pagos del juego de la corrupción.</figcaption>
</figure>

<p>(<a href="#ubeda_et_al">Ubeda & Dueñez-Guzman, 2010</a>) formularon el <i>juego de la corrupción</i> (<a href="#juego-de-la-corrupcion">Tabla 1</a>), una extensión del dilema del prisionero. La idea central fue permitir las asimetrías de poder entre personas.</p>

<h4 id="avispa">El avispero <br> <i>Inspiración original del juego de la corrupción</i></h4>

<figure>
<img src="/assets/elartedeconectarlospuntos/Avispa.svg" alt="Avispa" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Avispa.svg" style="width: 20%; height: auto; display: block; margin: 0 auto;  opacity: 0.8;" aria-label="Avispa"></object>
</figure>

<p>En una colmena de avispas el contrato social se conforma entre la avispa reina, la única delegada para poner huevos y las obreras <b>(C)</b>, que trabajan para criar a sus hermanas. Sin embargo, existe una tentación biológica: una obrera puede romper el contrato <b>(D)</b> y poner sus propios huevos no fertilizados para pasar sus genes, obteniendo un beneficio genético <b>(t)</b> a costa de las leyes de la colonia. Para evitar este caos, existen obreras con el rol de policía. Si una policía es honesta <b>(H)</b>, gastará energía y tiempo <b>(-c)</b> en inspeccionar las celdas y comerse los huevos ilegales de sus compañeras egoístas, aplicando un castigo <b>(-p)</b> al destruir su descendencia.</p>

<p>El problema surge cuando la avispa policía es corrupta <b>(K)</b>, esto significa que tiene el poder de vigilar, pero decide no hacerlo para ahorrarse el costo energético <b>(c)</b> o, peor aún, usa su posición de poder para poner sus propios huevos impunemente <b>(t)</b>. Si las obreras comunes notan que las policías no están vigilando (es decir, que el poder no cooperativo es la estrategia dominante), se desata el caos: todas empiezan a poner huevos de manera egoísta en lugar de trabajar, y la productividad de la colmena colapsa. </p>

<p>El juego demuestra que, al igual que en las sociedades humanas, si el costo de vigilar es muy alto o el castigo es ineficaz, la colmena evoluciona hacia un estado de anarquía.</p>

<h4 id="enfoque-mixto">Enfoque mixto: teoría de redes y juegos</h4>

<figure id="algoritmo-scata">
<img src="/assets/elartedeconectarlospuntos/Algoritmo de Scata et al.svg" alt="Algoritmo de Scàta et al" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Algoritmo de Scata et al.svg" style="width: 90%; height: auto; display: block; margin: 0 auto;  opacity: 0.8;" aria-label="Algoritmo de Scàta et al"></object>
<figcaption>Figura 2: Algoritmo de Scàta et al</figcaption>
</figure>

<p>(<a href="#scata_et_al">Scatà et al., 2016</a>) exploraron la evolución de la cooperación humana por medio de un modelo (<a href="#algoritmo-scata">Figura 2</a>) que combinó la teoría de juegos (<i>el dilema del prisionero</i>) y las redes libres de escala.</p>


<figure id="masa-critica">
<img src="/assets/elartedeconectarlospuntos/Masa crítica en diferentes configuraciones iniciales.png" alt="Masa crítica en diferentes configuraciones iniciales">
<figcaption>Figura 3: Masa crítica en distintas configuraciones iniciales: en la periferia, aleatoriamente y en el centro (<a href="#scata_et_al">Scatà et al., 2016</a>).</figcaption>
</figure>

<p>En su artículo buscaron comprender cómo la inserción de una masa mínima de personas cooperadoras (<a href="#masa-critica">Figura 3</a>) influye en una red de personas no cooperadoras.</p>

 <div hidden class="content-es">
 {% include diagramaDeFlujo.html %}
 <p>El algoritmo que diseñaran los investigadores fue el siguiente:</p>
<!-- Mermaid diagram -->
<figure class="mermaid diagramaDeFlujo">
    flowchart TD
    A(["Inicio del algoritmo"]) --> B[/"$M, c, J, H, K, N$"/]
    B --> C["Se crea la red tipo Barabási-Albert de $R$ nodos"]
    C --> D["Se asignan las estrategias iniciales ($M$) acorde a la posición inicial ($c$)"]
    D --> E{"$i > N$"}
        
    E -- No --> F{"$j > R$"}
        
    F -- No --> G["El nodo juega ($J$) con todos sus nodos vecinos"]
    G --> H["Calcula su ganancia total ($g$)"]
    H --> I{"$p < H + g$"}
    
    I -- Si --> J["Mantener estrategia"]
    I -- No --> K["Cambiar estrategia"]
    
    J --> L["Contador para cada nodo de la red <br> $j = j + 1$"]
    K --> L
    
    L --> F
    
    %% Ramas "Si" que bajan hasta el final del diagrama
    F -- Si ---> Y["Se aumenta el contador de las iteraciones \n $i = i + 1$"]
    Y --> E
    
    E -- Si ----> Z(["Fin del algoritmo"])
    
    %% Enlaces invisibles para ordenar Y y Z obligatoriamente hasta abajo
    L ~~~ Y
    Y ~~~ Z
</figure>
<figcaption>Diagrama de flujo que representa las partes más importantes del algoritmo propuesto por Scatà, M. et al. </figcaption>
</div>

<br>
<hr>
<br>

<h3 id="nuevo-modelo">Desarrollo de un nuevo modelo</h3>

<figure id="hipotesis-trabajo">
<img src="/assets/elartedeconectarlospuntos/Hipótesis del trabajo.svg" alt="Hipótesis del trabajo" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Hipótesis del trabajo.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Hipótesis del trabajo"></object>
<figcaption>Figura 4: Hipótesis del trabajo, si reemplazamos el dilema del prisionero por el juego de la corrupción, ¿será posible crear redes corruptas al variar los parámetros de la matriz de pagos del juego?</figcaption>
</figure>


<p>La hipótesis del trabajo (<a href="#hipotesis-trabajo">Figura 4</a>) se basó en la pregunta: ¿es posible obtener redes corruptas similares a las de (<a href="#martins_et_al">Martins et al., 2022</a>) si se usa el juego de la corrupción (<a href="#ubeda_et_al">Ubeda & Dueñez-Guzman, 2010</a>) en el modelo mixto de (<a href="#scata_et_al">Scatá et al., 2016</a>)?</p>
<p>Para ello, se propuso simular el comportamiento de tres sociedades  (<a href="#matriz-dinamarca">Tabla 2</a>, <a href="#matriz-singapur">Tabla 3</a> y <a href="#matriz-mexico">Tabla 4</a>) por medio del juego de la corrupción, cada una con una matriz de pagos acorde a su contexto social.</p>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 15px; margin-bottom: 20px;">
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>Dinamarca</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Dinamarca.svg" alt="Dinamarca" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<figure id="matriz-dinamarca">
<img src="/assets/elartedeconectarlospuntos/Matriz de pagos de Dinamarca.svg" alt="Matriz de pagos de Dinamarca" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Matriz de pagos de Dinamarca.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Matriz de pagos de Dinamarca"></object>
<figcaption>Tabla 2: Matriz de Dinamarca.<br>Se caracteriza por una alta confianza social y transparencia<br>(<a href="#chene_2011">Chêne, 2011</a>).</figcaption>
</figure>
</div>
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>Singapur</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Singapur.svg" alt="Singapur" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<figure id="matriz-singapur">
<img src="/assets/elartedeconectarlospuntos/Matriz de pagos de Singapur.svg" alt="Matriz de pagos de Singapur" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Matriz de pagos de Singapur.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Matriz de pagos de Singapur"></object>
<figcaption>Tabla 3: Matriz de Singapur.<br>Se caracteriza por leyes estrictas y castigos severos<br>(<a href="#gossain_2019">Gossaín, 2019</a>).</figcaption>
</figure>
</div>
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>México</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20M%C3%A9xico.svg" alt="México" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<figure id="matriz-mexico">
<img src="/assets/elartedeconectarlospuntos/Matriz de pagos de México.svg" alt="Matriz de pagos de México" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Matriz de pagos de México.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Matriz de pagos de México"></object>
<figcaption>Tabla 4: Matriz de México.<br>Se caracteriza por un equilibrio inestable, donde puede emerger la corrupción <br>(<a href="#casar_2023">Casar & Cejudo, 2023</a>).</figcaption>
</figure>
</div>
</div>

<p>Los pagos se propusieron con base en el índice de prosperidad de Legatum (<a href="#tabla-legatum">Tabla 5</a>), mide el nivel de bienestar y desarrollo de los países mediante diferentes parámetros.</p>
<br>

<figure id="tabla-legatum">
<img src="/assets/elartedeconectarlospuntos/Índice de prosperidad de Legatum.svg" alt="Índice de prosperidad de Legatum" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Índice de prosperidad de Legatum.svg" style="width: 100%; height: auto; display: block; margin: 0 auto;" aria-label="Índice de prosperidad de Legatum"></object>
<figcaption>Tabla 5: Índice de prosperidad de Legatum del 2023 (<a href="#legatum_2023">Legatum Institute Foundation, 2023</a>).</figcaption>
</figure>
<br>
<p>También se tomó en cuenta la literatura respecto al comportamiento social de Dinamarca (<a href="#chene_2011">Chêne, 2011</a>), Singapur (<a href="#gossain_2019">Gossaín, 2019</a>) y México (<a href="#casar_2023">Casar & Cejudo, 2023</a>).</p>
<br>

<figure id="red-modelo">
<img src="/assets/elartedeconectarlospuntos/Red modelo para la tesis.svg" alt="Red modelo para la tesis" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Red modelo para la tesis.svg" style="width: 50%; height: auto; display: block; margin: 0 auto;opacity: 0.8;" aria-label="Red modelo para la tesis"></object>
<figcaption>Figura 5: Red modelo para la tesis</figcaption>
</figure>

<p>Como base para modelar las sociedades se utilizó una red de tipo Barabási-Albert (<a href="#red-modelo">Figura 5</a>), acorde a (<a href="#scata_2016">Scatà et al. 2016</a>) este tipo de red es la más cercana a una red social real.</p>


<h3 id="poniendo-a-prueba">Poniendo a prueba el modelo</h3>

<p>Se verificó que cada una de las sociedades se comportara acorde a lo documentado en la literatura, es decir, que Dinamarca (<a href="#juego-corrupcion-dinamarca">Tabla 6</a>) y Singapur (<a href="#juego-corrupcion-singapur">Tabla 7</a>) alcanzaran un equilibrio cooperativo, mientras que México (<a href="#juego-corrupcion-mexico">Tabla 8</a>) tendiera a un estado de corrupción.</p>


<div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 15px; margin-bottom: 20px;">
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>Dinamarca</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Dinamarca.svg" alt="Dinamarca" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<br>
<figure id="juego-corrupcion-dinamarca">
<img src="/assets/elartedeconectarlospuntos/Juego de la corrupción - Dinamarca.svg" alt="Juego de la corrupción - Dinamarca" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Juego de la corrupción - Dinamarca.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Juego de la corrupción - Dinamarca"></object>
<figcaption>Tabla 6: En pocas iteraciones la sociedad danesa llega a un equilibrio estable donde la mitad de la población corresponde a civiles cooperadores (C) y la otra mitad al poder honrado (H).</figcaption>
</figure>
</div>
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>Singapur</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Singapur.svg" alt="Singapur" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<br>
<figure id="juego-corrupcion-singapur">
<img src="/assets/elartedeconectarlospuntos/Juego de la corrupción - Singapur.svg" alt="Juego de la corrupción - Singapur" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Juego de la corrupción - Singapur.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Juego de la corrupción - Singapur"></object>
<figcaption>Tabla 7: Las leyes estrictas y su fácil aplicación generan el equilibrio estable cooperativo de civiles cooperadores (C) y poder honrado (H) en la sociedad de Singapur.</figcaption>
</figure>
</div>
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>México</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20M%C3%A9xico.svg" alt="México" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<br>
<figure id="juego-corrupcion-mexico">
<img src="/assets/elartedeconectarlospuntos/Juego de la corrupción - México.svg" alt="Juego de la corrupción - México" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Juego de la corrupción - México.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Juego de la corrupción - México"></object>
<figcaption>Tabla 8: Se puede notar el equilibrio inestable de la población, a partir de la novena iteración la población cambia a una población mixta de civiles cooperadores (C), poder honrado (H) y corrupto (K), el sistema converge al equilibrio estable (x) analizado en el artículo 
de ( <a href="#ubeda_2010">Ubeda & Dueñez-Guzman, 2010</a>)
</figcaption>
</figure>
</div>
</div>


<h4 id="la-robustez-de-las-sociedades">La robustez de las sociedades</h4>
<p>Posteriormente se experimentó con la inclusión de una masa crítica de personas corruptas en tres diferentes configuraciones iniciales de la red (<a href="#masa-critica">Figura 5</a>), retomando las ideas centrales de (<a href="#scata_2016">Scatà et al. 2016</a>).</p>

<br>
<figure id="roles-sociedad">
<img src="/assets/elartedeconectarlospuntos/Cuatro roles en la sociedad.svg" alt="Cuatro roles en la sociedad" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Cuatro roles en la sociedad.svg" viewBox="0 0 800 600" style="width: 80%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Cuatro roles en la sociedad"></object>
<figcaption>Figura 6: Los cuatro roles en la sociedad</figcaption>
</figure>


<p>Se midió en cada sociedad la capacidad de mantener estrategias cooperativas ante la inclusión de estrategias no cooperativas (D) y (K) (<a href="#roles-sociedad">Figura 6</a>).</p>

<h4>Dinamarca</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Dinamarca.svg" alt="Dinamarca" style="width: 10%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<!-- <figure>
<img src="/assets/elartedeconectarlospuntos/Evolución de la red de Dinamarca.gif" alt="Evolución de la red de Dinamarca" style="display: none;">
<object type="image/gif" data="/assets/elartedeconectarlospuntos/Evolución de la red de Dinamarca.gif" viewBox="0 0 800 600" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Evolución de la red de Dinamarca"></object>
<figcaption>Figura 1: Evolución de la red de Dinamarca al introducir una masa crítica del 20% de nodos corruptos (color oscuro) en la periferia de la red.</figcaption>
</figure> -->


<figure id="evolucion-dinamarca">
<img src="/assets/elartedeconectarlospuntos/Evolución de Dinamarca con 20,25,30 M.C. - (K).gif" alt="Evolución de Dinamarca con 20,25,30 M.C. - (K)" style="display: none;">
<object type="image/gif" data="/assets/elartedeconectarlospuntos/Evolución de Dinamarca con 20,25,30 M.C. - (K).gif" viewBox="0 0 800 600" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Evolución de Dinamarca con 20,25,30 M.C. - (K)"></object>
<figcaption>Figura 7: Evolución de Dinamarca con 20%, 25% y 30% de masa crítica de nodos corruptos (K) en la configuracion inicial de nodos centrales.</figcaption>
</figure>

<p>En Dinamarca (<a href="#evolucion-dinamarca">Figura 7</a>) se observa que la población mantiene sus estrategias cooperativas a pesar de la inclusión de nodos corruptos. Pero existe un punto de inflexión aproximadamente cuando se tiene el 20% - 25% de nodos corruptos en la parte central de la red, a partir del cual no es posible eliminarlos.</p>

<figure id="evolucion-dinamarca-limite">
<img src="/assets/elartedeconectarlospuntos/Dinamarca 95MC(K)3CI.gif" alt="Dinamarca 95MC(K)3CI" style="display: none;">
<object type="image/gif" data="/assets/elartedeconectarlospuntos/Dinamarca 95MC(K)3CI.gif" viewBox="0 0 800 600" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Dinamarca 95MC(K)3CI"></object>
<figcaption>Figura 8: Evolución de Dinamarca con 95% de masa crítica de nodos corruptos (K) con diferentes configuraciones iniciales, nodos aleatorios, centrales y periféricos.</figcaption>
</figure>

<p> En el caso límite (<a href="#evolucion-dinamarca-limite">Figura 8</a>), donde el 95% de la red inicia con una estrategia corrupta, la población evoluciona a una población cooperadora excepto en cuando la masa crítica inicia en la parte central de la red. </p>

<h4>Singapur</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Singapur.svg" alt="Singapur" style="width: 10%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">

<figure id="evolucion-singapur">
<img src="/assets/elartedeconectarlospuntos/Evolución de la red de Singapur MC(H) 95(K).gif" alt="Evolución de la red de Singapur MC(H) 95(K)" style="display: none;">
<object type="image/gif" data="/assets/elartedeconectarlospuntos/Evolución de la red de Singapur MC(H) 95(K).gif" viewBox="0 0 800 600" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Evolución de la red de Singapur MC(H) 95(K)"></object>
<figcaption>Figura 9: Evolución de Singapur con 95% de masa crítica de nodos corruptos (K) con diferentes configuraciones iniciales, nodos aleatorios, centrales y periféricos.</figcaption>
</figure>

<p>En Singapur (<a href="#evolucion-singapur">Figura 9</a>) se observó un resultado similar al de Dinamarca, la población mantiene sus estrategias cooperativas a pesar de la inclusión de nodos corruptos. Excepto en los nodos centrales de la red, donde se muestra una mayor resistencia a la cooperación.</p>

<p>Este fue uno de los primeros resultados interesantes de la simulación, muestra que inclusive en sociedades altamente cooperadoras si se introduce una masa crítica de nodos corruptos, la población tiende a evolucionar a una población cooperadora excepto en la parte central de la red.</p>

<h4>México</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20M%C3%A9xico.svg" alt="México" style="width: 10%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">

<figure id="evolucion-mexico">
<img src="/assets/elartedeconectarlospuntos/Evolución de la red de México MC(K).gif" alt="Evolución de la red de México MC(K)" style="display: none;">
<object type="image/gif" data="/assets/elartedeconectarlospuntos/Evolución de la red de México MC(K).gif" viewBox="0 0 800 600" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Evolución de la red de México MC(K)"></object>
<figcaption>Figura 10: Evolución de la red de México con diferentes porcentajes de masa crítica en los nodos centrales con 20%, 60% y 90% de nodos corruptos (K).</figcaption>
</figure>

<p>En México (<a href="#evolucion-mexico">Figura 10</a>) se observó un resultado diferente al de Dinamarca y Singapur, la sociedad no es resiliente ante la inclusión de nodos corruptos. El porcentaje inicial de masa crítica se mantiene constante. </p>

<h3 id="subred-corrupta">Las subredes corruptas</h3>

<p>Para comprobar la hipótesis inicial del trabajo se realizó un análisis de las subredes corruptas en el caso donde el 95% de la población inicia con una estrategia corrupta. </p>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; align-items: stretch; gap: 15px; margin-bottom: 20px;">
<div style="flex: 1 1 45%; min-width: 300px; text-align: center; display: flex; flex-direction: column;">

<figure id="subred-corrupta-dinamarca" style="margin: 0; display: flex; flex-direction: column; flex-grow: 1;">
<img src="/assets/elartedeconectarlospuntos/Subred corrupta de Dinamarca.svg" alt="Subred corrupta" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Subred corrupta de Dinamarca.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Subred corrupta"></object>
<figcaption style="margin-top: auto; padding-top: 15px;">Figura 11: Subred corrupta de Dinamarca.</figcaption>
</figure>
</div>
<div style="flex: 1 1 45%; min-width: 300px; text-align: center; display: flex; flex-direction: column;">
<table style="margin: 0 auto; width: 90%; font-size: 0.7em; min-width: 300px; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="padding: 4px; border-bottom: 2px solid #ccc; text-align: center;">Propiedad</th>
      <th style="padding: 4px; border-bottom: 2px solid #ccc; text-align: center;">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Distribución de grado exponencial</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Si</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Exponente de la ley de potencias (γ)</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">-1.84</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Número de comunidades</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">106</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Comunidad más grande</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">35 nodos</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Tamaño promedio de las comunidades</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">3.3</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Coeficiente de agrupamiento global</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">0.0</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Coeficiente de agrupamiento local</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">0.0</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Camino medio</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">2.5</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Propiedad de mundo pequeño</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">No</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Coeficiente de asortatividad global</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">-0.206</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Coeficiente de asortatividad local</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">-0.594</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Densidad global</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">0.004</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Densidad local</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">0.057</td>
    </tr>
  </tbody>
</table>
<figcaption style="margin-top: auto; padding-top: 15px;">Tabla 5: Propiedades de la subred corrupta de Dinamarca.</figcaption>
</div>
</div>

<p>Tanto Dinamarca cono Singapur presentaron métricas similares en su subred corrupta, algunos parámetros como la densidad global, o el camino medio fueron muy cercanos a lo documentado por ( <a href="#martins_et_al"> Martins et al., 2022</a>).</p>
<br>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; align-items: stretch; gap: 15px; margin-bottom: 20px;">
<div style="flex: 1 1 45%; min-width: 300px; text-align: center; display: flex; flex-direction: column;">

<figure id="subred-corrupta-singapur" style="margin: 0; display: flex; flex-direction: column; flex-grow: 1;">
<img src="/assets/elartedeconectarlospuntos/Subred corrupta de Singapur.svg" alt="Subred corrupta" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Subred corrupta de Singapur.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Subred corrupta"></object>
<figcaption style="margin-top: auto; padding-top: 15px;">Figura 12: Subred corrupta de Singapur.</figcaption>
</figure>
</div>
<div style="flex: 1 1 45%; min-width: 300px; text-align: center; display: flex; flex-direction: column;">
<table style="margin: 0 auto; width: 90%; font-size: 0.7em; min-width: 300px; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="padding: 4px; border-bottom: 2px solid #ccc; text-align: center;">Propiedad</th>
      <th style="padding: 4px; border-bottom: 2px solid #ccc; text-align: center;">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Distribución de grado exponencial</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Si</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Exponente de la ley de potencias (γ)</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">-2.14</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Número de comunidades</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">101</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Comunidad más grande</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">20 nodos</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Tamaño promedio de las comunidades</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">2.8</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Coeficiente de agrupamiento global</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">0.0</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Coeficiente de agrupamiento local</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">0.0</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Camino medio</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">2.7</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Propiedad de mundo pequeño</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">No</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Coeficiente de asortatividad global</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">-0.229</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Coeficiente de asortatividad local</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">-0.576</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Densidad global</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">0.004</td>
    </tr>
    <tr>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">Densidad local</td>
      <td style="padding: 4px; border-bottom: 1px solid #ccc;">0.101</td>
    </tr>
  </tbody>
</table>
<figcaption style="margin-top: auto; padding-top: 15px;">Tabla 6: Propiedades de la subred corrupta de Singapur.</figcaption>
</div>
</div>



<h4 id="como-atacamos-la-red">¿Cómo atacar una red corrupta?</h4>

<p>Al comprobar que el modelo recreaba la dinámica de la corrupción en diferentes países, dio pie a la parte más interesante del trabajo. En el caso mexicano al <b>no contar con resiliencia</b> ante la corrupción, surgió el siguiente planteamiento: 
<br> 
<br> 
Si se iniciara con una red donde la sociedad no es resiliente y todos los nodos son corruptos, ¿existe alguna forma de lograr que la red evolucione a una sociedad cooperadora? </p>

<h4 id="todos-los-escenarios">Todos los escenarios posibles</h4>

<p>Para encontrar respuesta este planteamiento, se modelaron todas las configuraciones posibles del modelo, en búsqueda de encontrar algún escenario en donde la población evolucionara a una población cooperadora o encontrar alguna pista de cómo lograrlo. Los parámetros del modelo que se variaron fueron: </p> <br>
<ul>
  <li><b>Tipo de masa crítica:</b> <span style="display: inline-block;">Cooperadora (C,H), Poder honrado (H)</span></li>
  <li><b>Porcentaje de masa crítica:</b> <span style="display: inline-block;">5%, 10%, ..., 95%</span></li>
  <li><b>Configuración espacial inicial:</b> <span style="display: inline-block;">Central, Aleatoria, Periférica</span></li>
  <li><b>Cantidad de iteraciones:</b> <span style="display: inline-block;">100, 200, ..., 1000</span></li>
  <li><b>Porcentaje de homofilia:</b> <span style="display: inline-block;">5%, 10%, ..., 95%</span></li>
</ul>

<br>
<p>
De esos 24,000 escenarios posibles se encontró una tendencia interesante.
</p>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 0px; margin-bottom: 0px;">
<div style="flex: 1 1 100%; min-width: 200px; text-align: center;">

<figure id="intervencion-aleatoria">
<img src="/assets/elartedeconectarlospuntos/Red de México MC25NA(H,C).svg" alt="Red de México MC25NA(H,C)" style="display: none;">
<div style="display: flex; flex-direction: row; justify-content: center; gap: 0px; align-items: flex-start;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Evolución de México MC25NA(H,C).svg" style="flex: 197; min-width: 0; width: 100%; height: auto; display: block; opacity: 0.8;" aria-label="Evolución de la red de México MC(K)"></object>
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Red de México MC25NA(H,C).svg" style="flex: 209; min-width: 0; width: 100%; height: auto; display: block; opacity: 0.8;" aria-label="Red de México MC25NA(H,C)"></object>
</div>
<figcaption>Figura 11: Una masa crítica cooperadora en una configuración aleatoria logró reducir del 75% al 52% la estrategia corrupta mayoritaria en la red mexicana.</figcaption>
</figure>

</div>
</div>

<p>La lógica tradicional sugiere que debemos buscar y arrestar a las cabezas de la red (los nodos centrales). Sin embargo, el modelo mostró que un ataque centralizado no es la mejor estrategia. La solución matemática es una disrupción aleatoria (<a href="#intervencion-aleatoria">Figura 11</a>). </p>

<figure id="intervencion-aleatoria-15">
<img src="/assets/elartedeconectarlospuntos/Red de México MC15NA(H,C).svg" alt="Red de México MC15NA(H,C)" style="display: none;">
<div style="display: flex; flex-direction: row; justify-content: center; gap: 0px; align-items: flex-start;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Evolución de México MC15NA(H,C).svg" style="flex: 197; min-width: 0; width: 100%; height: auto; display: block; opacity: 0.8;" aria-label="Evolución de la red de México MC(K)"></object>
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Red de México MC15NA(H,C).svg" style="flex: 209; min-width: 0; width: 100%; height: auto; display: block; opacity: 0.8;" aria-label="Red de México MC15NA(H,C)"></object>
</div>
<figcaption>Figura 12: Una masa crítica cooperadora del 15% en una configuración aleatoria logró reducir del 85% al 60% la estrategia corrupta mayoritaria en la red mexicana.</figcaption>
</figure>

<p>No existe un umbral mínimo donde toda la red evolucione a una población cooperativa, pero existen porcentajes mínimos donde se genera una mayor propagación. Por ejemplo, con un 15% de masa crítica cooperadora (<a href="#intervencion-aleatoria-15">Figura 12</a>) la estrategia se logra propagar al 40% de la red. A partir del 30% de masa crítica la red evoluciona a una mayoría cooperativa del 60% (<a href="#intervencion-aleatoria-30">Figura 13</a>).</p>

<figure id="intervencion-aleatoria-30">
<img src="/assets/elartedeconectarlospuntos/Red de México MC30NA(H,C).svg" alt="Red de México MC30NA(H,C)" style="display: none;">
<div style="display: flex; flex-direction: row; justify-content: center; gap: 0px; align-items: flex-start;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Evolución de México MC30NA(H,C).svg" style="flex: 197; min-width: 0; width: 100%; height: auto; display: block; opacity: 0.8;" aria-label="Evolución de la red de México MC(K)"></object>
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Red de México MC30NA(H,C).svg" style="flex: 209; min-width: 0; width: 100%; height: auto; display: block; opacity: 0.8;" aria-label="Red de México MC30NA(H,C)"></object>
</div>
<figcaption>Figura 13: Una masa crítica cooperadora del 30% en una configuración aleatoria logró reducir del 70% al 40% la estrategia corrupta mayoritaria en la red mexicana.</figcaption>
</figure>

<p>La intervención aleatoria fragmenta la comunidad central. El cambio de estrategia de los nodos modifica la conectividad de la red corrupta. Al atacar al azar, se rompen enlaces vitales que unen diferentes comunidades, fragmentando la red en múltiples comunidades aisladas y posibilitando que la estrategia cooperativa surja y se expanda hasta llegar a un equilibrio.</p>

<br>
<hr>
<br>

<h2 id="conclusion">Conclusión</h2>

<p>El análisis revela una dualidad fundamental en la dinámica de la corrupción. Por un lado, su persistencia depende del control central (<a href="#evolucion-dinamarca">Figura 7</a>, <a href="#evolucion-dinamarca-limite">Figura 8</a> y <a href="#evolucion-singapur">Figura 9</a>), las redes corruptas requieren nodos clave que sostengan su cohesión. Por otro lado, para su erradicación se necesita una disrupción aleatoria (<a href="#intervencion-aleatoria">Figura 11</a>, <a href="#intervencion-aleatoria-15">Figura 12</a> y <a href="#intervencion-aleatoria-30">Figura 13</a>).</p>

<p>La estrategia para combatir la corrupción es híbrida. Por un lado, requiere modificar la matriz de pagos de la sociedad, fortaleciendo el estado de derecho <b>(c)</b> y el castigo a las personas con poder <b>(<i>p < q</i>)</b> para que la corrupción sea una estrategia perdedora, como en Singapur. Por otro, exige debilitar la estructura de la red corrupta mediante intervenciones aleatorias, como la rotación de personal y la promoción de transparencia, siguiendo ejemplos como Dinamarca.</p>

<h3 id="limitaciones">Limitaciones del trabajo</h3>

<p>El modelo actual tiene varias limitaciones que deben ser consideradas:</p>

<ul>
    <li><b>Muestra poco representativa</b> <br> <p>Las conclusiones se basan únicamente en una red Barabasí-Albert, es necesario realizar un análisis más amplio con otras redes.</p></li>
    <li><b>Parámetros  arbitrarios en las matrices de pagos</b> <br> <p>Los parámetros en la matriz de pagos de cada país se ajustaron para que la sociedad se comportara de manera similar a la literatura, pero nada asegura que puedan ser los mejores valores para el modelado.</p></li>
    <li><b>El modelo no considera la creación y disolución de enlaces en la red.</b> <br> <p>En el modelo actual, los enlaces entre los nodos son estáticos, lo cual contrasta con las conexiones dinámicas en la realidad.</p></li>
</ul>

<h3 id="trabajo-futuro">Trabajo futuro</h3>

<p>El trabajo abre nuevas líneas de investigación, destacando la validación empírica del modelo mediante datos de casos reales de corrupción. Esto permitiría completar su desarrollo como herramienta de diagnóstico y pronóstico, con potencial para diseñar políticas públicas más efectivas y contribuir a la recuperación del estado de derecho en México y en otros contextos con problemas estructurales similares.</p>

<br>
<hr>
<br>

<h2 id="bibliografia">Bibliografía</h2>

<h3 id="articulos">Artículos principales</h3>


<figure>
<img src="/assets/elartedeconectarlospuntos/Artículo Martins et al - detallado.svg" alt="Artículo Martins et al" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Artículo Martins et al - detallado.svg" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.7;" aria-label="Artículo Martins et al"></object>
</figure>
<br>
<button><a href="assets/elartedeconectarlospuntos/Universality of corruption - Martins et al.pdf" target="_blank">📄 Martins et al., 2022 </a>
</button> 
<br>
<li id="martins_et_al">
Martins, A., da Cunha, B., Hanley, Q., Gonçalves, S., Perc, M., & Ribeiro, H. (2022). Universality of political corruption networks. <i>Nature Scientific Reports</i>. <br>
DOI: <a href="https://doi.org/10.1038/s41598-022-10909-2" target="_blank">https://doi.org/10.1038/s41598-022-10909-2</a>
</li> 
<br>

<figure>
<img src="/assets/elartedeconectarlospuntos/Artículo Scatà et al - detallado.svg" alt="Artículo Scatà et al" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Artículo Scatà et al - detallado.svg" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.7" aria-label="Artículo Scatà et al"></object>
</figure>
<br>
<button><a href="assets/elartedeconectarlospuntos/Combining evolutionary game theory and network theory - Scata et al.pdf" target="_blank">📄 Scatà et al., 2016 </a></button> 
<br>
<li id="scata_et_al">
Scatà, M., Di Stefano, A., La Corte, A., Liò, P., Catania, E., Guardo, E., & Pagano, S. (2016). Combining evolutionary game theory and network theory to analyze human cooperation patterns. <i>Chaos, Solitons and Fractals</i>, 17–24. <br>
DOI: <a href="https://doi.org/10.1016/j.chaos.2016.04.018" target="_blank">https://doi.org/10.1016/j.chaos.2016.04.018</a>
</li> 
<br>

<figure>
<img src="/assets/elartedeconectarlospuntos/Artículo Ubeda et al - detallado.svg" alt="Artículo Ubeda et al" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Artículo Ubeda et al - detallado.svg" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.7" aria-label="Artículo Ubeda et al"></object>
</figure>
<br>
<button><a href="assets/elartedeconectarlospuntos/Power and Corruption Úbeda & Duéñez.pdf" target="_blank">📄 Úbeda & Duéñez-Guzman, 2010 </a></button> 
<br>
<li id="ubeda_et_al">
Ubeda, F., & Dueñez-Guzman, E. (2010). Power and Corruption. <i>Evolution</i>, 1127-1139. <br>
DOI: <a href="https://doi.org/10.1111/j.1558-5646.2010.01194.x" target="_blank">https://doi.org/10.1111/j.1558-5646.2010.01194.x</a>
</li> 
<br>


<h3>Artículos adicionales</h3>
<br>
<ul>
    <li id="luna-pla&nicolas-carlock_2020">Luna-Pla, I., & Nicolás-Carlock, J. (2020). Corruption and complexity: a scientific framework for the analysis of corruption networks.  <i>Applied Network Science</i>. <br> doi: <a href="https://doi.org/10.1007/s41109-020-00258-2" target="_blank">https://doi.org/10.1007/s41109-020-00258-2</a></li>

</ul>

<br>
<h3>Informes</h3>
<br>

<ul>
    <li id="legatum_2023">Legatum Institute Foundation. (2023). <i>The 2023 Legatum Prosperity Index</i>.
    <br>Obtenido de <a href="https://index.prosperity.com/about/resources" target="_blank">https://index.prosperity.com/about/resources</a></li>
    <br>
    <li id="transparencia_2023">Transparencia Internacional. (2024). <i>Índice de Percepción de la Corrupción 2023</i>.
    <br>Obtenido de <a href="https://www.transparency.org/en/cpi/2023" target="_blank">https://www.transparency.org/en/cpi/2023</a></li>
</ul>

<br>
<h3>Articulos periodisticos</h3>
<br>
<ul>
    <li id="casar_2023">Casar, M. A., & Cejudo, Q. (2023). México: Anatomía de la Corrupcion.  <i>Mexicanos Contra la Corrupción y la Impunidad</i>. 
    <br>
    Obtenido de <a href="https://contralacorrupcion.mx/anatomia-de-la-corrupcion-cuarta-edicion/" target="_blank"> https://contralacorrupcion.mx/anatomia-de-la-corrupcion-cuarta-edicion/</a></li>
<br>
    <li id="chene_2011">Chêne, M. (2011). What makes New Zealand, Denmark, Finland, Sweden and others 'cleaner' than most countries? <i>Transparency International</i> 
    <br>
    Obtenido de <a href="https://www.transparency.org/en/blog/what-makes-new-zealand-denmark-finland-sweden-and-others-cleaner-than-most-countries" target="_blank">https://www.transparency.org/en/blog/what-makes-new-zealand-denmark-finland-sweden-and-others-cleaner-than-most-countries</a></li>
<br>
    <li id="gossain_2019">Gossaín, J. (2019). ¿Quiere saber cómo fue que acabaron con la corrupción en Singapur? <i>El Tiempo</i>. 
    <br>
    Obtenido de <a href="https://www.eltiempo.com/colombia/otras-ciudades/como-se-acabo-la-corrupcion-en-singapur-386920" target="_blank">https://www.eltiempo.com/colombia/otras-ciudades/como-se-acabo-la-corrupcion-en-singapur-386920</a>
    </li>

</ul>

<br>
<br>

<hr>

<br>

<figure>
<img src="/assets/elartedeconectarlospuntos/MCM.svg" alt="Maria del Carmen Morales" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/MCM.svg" style="width: 80%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Maria del Carmen Morales"></object>
</figure>
<br>

<h4 id="en-memoria-de">En memoria de <b>Maria del Carmen Morales</b> <br> y de todas las madres buscadoras</h4>

<p style="width: 90%; margin: 0 auto;">Asesinada junto a uno de sus hijos la noche del 23 de abril en el municipio de Tlajomulco de Zúñiga, Jalisco. Integrante del colectivo Guerreros Buscadores quienes revelaron lo ocurrido en el rancho Izaguirre en Teuchitlán, Jalisco. Donde integrantes del Cártel Jalisco Nueva Generación (CJNG), entrenaban, asesinaban y desaparecían personas.
</p>

</div> <!-- end content-es -->


<div class="content-en">
<br>
<hr>

<br>
<h2>Table of Contents</h2>    

<ul style="padding-left: 20px;">
  <li><a href="#can-we-predict">Can we predict and stop corruption?</a></li>
  <li><a href="#what-is-corruption">What is corruption?</a>
    <ul style="padding-left: 20px; list-style-type: square;">
      <li><a href="#modeling-corruption">Modeling corruption</a>
        <ul style="padding-left: 20px; list-style-type: circle;">
          <li><a href="#network-approach">Network theory approach</a></li>
          <li><a href="#game-theory-approach">Game theory approach</a>
            <ul style="padding-left: 20px; list-style-type: square;">
              <li><a href="#wasp-nest">The wasp nest</a></li>
            </ul>
          </li>
          <li><a href="#mixed-approach">Mixed approach: network and game theory</a></li>
        </ul>
      </li>
      <li><a href="#new-model">Development of a new model</a></li>
      <li><a href="#testing-the-model">Testing the model</a>
        <ul style="padding-left: 20px; list-style-type: circle;">
          <li><a href="#robustness-of-societies">The robustness of societies</a></li>
          <li><a href="#how-to-attack-network">How to attack a corrupt network?</a>
            <ul style="padding-left: 20px; list-style-type: square;">
              <li><a href="#all-scenarios">All possible scenarios</a></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li><a href="#conclusion-en">Conclusion</a>
    <ul style="padding-left: 20px; list-style-type: square;">
      <li><a href="#limitations-en">Limitations of the work</a></li>
      <li><a href="#future-work-en">Future work</a></li>
    </ul>
  </li>
  <li><a href="#bibliography-en">Bibliography</a></li>
</ul>
<br>

<hr>
<br>
<h2 id="can-we-predict">Can we predict and stop corruption?</h2>

<p>Different anti-corruption policies have been proposed around the world. The Scandinavian countries, led by Denmark, have opted for financial transparency and accountability (<a href="#chene_2011">Chêne, 2011</a>), while others like Singapore have opted for strategies based on severe punishments for individuals (<a href="#gossain_2019">Gossaín, 2019</a>). However, these strategies are not always replicable in countries with different social, cultural, and political contexts. To understand why corruption persists, it is necessary to understand how people interact and what incentives they have to become corrupt or stay honest.</p>

<p>Recently, humanity found a new ally in the fight against corruption: <b>mathematics</b>. In recent years, thanks to the popularization of personal computers, mathematical models emerged as tools in the fight against corruption. Especially modeling through network theory and game theory.</p>

<p>Such is the case that new studies have documented and analyzed cases of corruption with these approaches (<a href="#luna-pla&nicolas-carlock_2020">Luna-Pla & Nicolás-Carlock, 2020</a>).
</p>

<h2 id="what-is-corruption">What is corruption?</h2>

<p>Corruption is a complex phenomenon that can manifest itself from a bribe to the diversion of public resources, but in essence, it can be defined as:</p>

<p style="text-align: right; width: 95%;"><cite><strong>"The abuse of entrusted power for private gain"</strong></cite>
<br><br> (<a href="#transparencia_2023" target="_blank">Transparency International, 2024</a>)</p>

<p>A mathematical definition of corruption must consider two central ideas: <b>power</b> as a network of relationships, and <b>gain</b> as the result of strategic decisions based on risks and benefits. <br><br>

To model it, two main approaches have been followed: network theory, which analyzes the structure and actors within corrupt systems, and game theory, which studies the strategic decisions of individuals. Although each approach has its limitations, combining them provides a more complete representation of the phenomenon.</p>

<h3 id="modeling-corruption">Modeling corruption</h3>

<p>The work was primarily based on three articles, each contributing a different approach.</p>

<h4 id="network-approach">Network theory approach</h4>

<figure id="red-espanola-en">
<img src="/assets/elartedeconectarlospuntos/Red española.png" alt="Spanish corruption network" style="width: 70%; height: auto; display: block; margin: 0 auto;">
<figcaption>Figure 1: Spanish corruption network (<a href="#martins_et_al">Martins et al., 2022</a>).</figcaption>
</figure>

<p>(<a href="#martins_et_al">Martins et al., 2022</a>) documented and recreated the networks associated with corruption scandals in Spain and Brazil (<a href="#red-espanola-en">Figure 1</a>). They identified the common properties among them and subsequently developed an algorithm that replicated the properties of corrupt networks.</p>

 <div hidden class="content-en">
     <!-- Mermaid diagram -->
    <figure class="mermaid diagramaDeFlujo">
        flowchart TD
        A(["Start of the algorithm"]) --> B[/"$N, \lambda, \alpha, \beta, p$"/]
        B --> C["An empty network is created"]
        C --> D{"$i > N$"}
        D -- Yes --> E(["End of the algorithm"])
        D -- No --> F["A complete network of random size is created <br> $P(x) \sim e^{-x/\lambda}$"]
        F --> G["The recurrent nodes are calculated <br> $r = \alpha n - \beta$"]
        G --> H["The recurrent nodes are assigned by probabilities, <br> $p$ for recurrent nodes and $1-p$ for normal nodes"]
        H --> I["The iteration counter is increased <br> $i = i + 1$"]
        I --> D
        I ~~~ E
    </figure>
    <figcaption>Flowchart representing the most important parts of the algorithm proposed by Martins et al. </figcaption>
 </div>

<h4 id="game-theory-approach">Game theory approach</h4>

<figure>
<img src="/assets/elartedeconectarlospuntos/Juego de la corrupción.svg" alt="Corruption game" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Juego de la corrupción.svg" style="width: 70%; height: auto; display: block; margin: 0 auto;" aria-label="Corruption game"></object>
<figcaption>Table 1: Payoff matrix of the corruption game.</figcaption>
</figure>

<p>(<a href="#ubeda_et_al">Ubeda & Dueñez-Guzman, 2010</a>) formulated the <i>corruption game</i> (<a href="#juego-de-la-corrupcion">Table 1</a>), an extension of the prisoner's dilemma. The central idea was to allow power asymmetries between individuals.</p>

<h4 id="wasp-nest">The wasp nest <br> <i>Original inspiration for the corruption game</i></h4>

<figure>
<img src="/assets/elartedeconectarlospuntos/Avispa.svg" alt="Wasp" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Avispa.svg" style="width: 20%; height: auto; display: block; margin: 0 auto;  opacity: 0.8;" aria-label="Wasp"></object>
</figure>

<p>In a wasp colony, the social contract is formed between the queen wasp, the only one delegated to lay eggs, and the workers <b>(C)</b>, who work to raise their sisters. However, there is a biological temptation: a worker can break the contract <b>(D)</b> and lay her own unfertilized eggs to pass on her genes, obtaining a genetic benefit <b>(t)</b> at the expense of the colony's laws. To prevent this chaos, there are workers with the role of police. If a police wasp is honest <b>(H)</b>, she will spend energy and time <b>(-c)</b> inspecting cells and eating the illegal eggs of her selfish companions, applying a punishment <b>(-p)</b> by destroying their offspring.</p>

<p>The problem arises when the police wasp is corrupt <b>(K)</b>, which means she has the power to monitor but decides not to in order to save the energy cost <b>(c)</b>, or even worse, uses her position of power to lay her own eggs with impunity <b>(t)</b>. If the common workers notice that the police are not monitoring (i.e., that the non-cooperative power is the dominant strategy), chaos ensues: they all start laying eggs selfishly instead of working, and the hive's productivity collapses.</p>

<p>The game demonstrates that, just as in human societies, if the cost of monitoring is very high or the punishment is ineffective, the colony evolves towards a state of anarchy.</p>

<h4 id="mixed-approach">Mixed approach: network and game theory</h4>

<figure id="algoritmo-scata-en">
<img src="/assets/elartedeconectarlospuntos/Algoritmo de Scata et al.svg" alt="Scàta et al. algorithm" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Algoritmo de Scata et al.svg" style="width: 90%; height: auto; display: block; margin: 0 auto;  opacity: 0.8;" aria-label="Scàta et al. algorithm"></object>
<figcaption>Figure 2: Scàta et al. algorithm</figcaption>
</figure>

<p>(<a href="#scata_et_al">Scatà et al., 2016</a>) explored the evolution of human cooperation through a model (<a href="#algoritmo-scata-en">Figure 2</a>) that combined game theory (<i>the prisoner's dilemma</i>) and scale-free networks.</p>


<figure id="masa-critica-en">
<img src="/assets/elartedeconectarlospuntos/Masa crítica en diferentes configuraciones iniciales.png" alt="Critical mass in different initial configurations">
<figcaption>Figure 3: Critical mass in different initial configurations: at the periphery, randomly, and at the center (<a href="#scata_et_al">Scatà et al., 2016</a>).</figcaption>
</figure>

<p>In their article, they sought to understand how the insertion of a minimum mass of cooperative individuals (<a href="#masa-critica-en">Figure 3</a>) influences a network of non-cooperative individuals.</p>

 <div hidden class="content-en">
 {% include diagramaDeFlujo.html %}
 <p>The algorithm designed by the researchers was as follows:</p>
<!-- Mermaid diagram -->
<figure class="mermaid diagramaDeFlujo">
    flowchart TD
    A(["Start of the algorithm"]) --> B[/"$M, c, J, H, K, N$"/]
    B --> C["A Barabási-Albert network of $R$ nodes is created"]
    C --> D["The initial strategies ($M$) are assigned according to the initial position ($c$)"]
    D --> E{"$i > N$"}
        
    E -- No --> F{"$j > R$"}
        
    F -- No --> G["The node plays ($J$) with all its neighboring nodes"]
    G --> H["Calculates its total gain ($g$)"]
    H --> I{"$p < H + g$"}
    
    I -- Yes --> J["Maintain strategy"]
    I -- No --> K["Change strategy"]
    
    J --> L["Counter for each node of the network <br> $j = j + 1$"]
    K --> L
    
    L --> F
    
    %% "Yes" branches that go down to the end of the diagram
    F -- Yes ---> Y["The iteration counter is increased \n $i = i + 1$"]
    Y --> E
    
    E -- Yes ----> Z(["End of the algorithm"])
    
    %% Invisible links to force Y and Z to the bottom
    L ~~~ Y
    Y ~~~ Z
</figure>
<figcaption>Flowchart representing the most important parts of the algorithm proposed by Scatà, M. et al. </figcaption>
</div>

<br>
<hr>
<br>

<h3 id="new-model">Development of a new model</h3>

<figure id="hipotesis-trabajo-en">
<img src="/assets/elartedeconectarlospuntos/Hipótesis del trabajo.svg" alt="Work hypothesis" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Hipótesis del trabajo.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Work hypothesis"></object>
<figcaption>Figure 4: Work hypothesis: if we replace the prisoner's dilemma with the corruption game, will it be possible to create corrupt networks by varying the parameters of the game's payoff matrix?</figcaption>
</figure>

<p>The work hypothesis (<a href="#hipotesis-trabajo-en">Figure 4</a>) was based on the question: is it possible to obtain corrupt networks similar to those of (<a href="#martins_et_al">Martins et al., 2022</a>) if the corruption game (<a href="#ubeda_et_al">Ubeda & Dueñez-Guzman, 2010</a>) is used in the mixed model of (<a href="#scata_et_al">Scatá et al., 2016</a>)?</p>
<br>
<div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 15px; margin-bottom: 20px;">
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>Denmark</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Dinamarca.svg" alt="Denmark" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<figure id="matriz-dinamarca-en">
<img src="/assets/elartedeconectarlospuntos/Matriz de pagos de Dinamarca.svg" alt="Denmark payoff matrix" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Matriz de pagos de Dinamarca.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Denmark payoff matrix"></object>
<figcaption>Table 2: Denmark matrix.<br>Characterized by high social trust and transparency<br>(<a href="#chene_2011">Chêne, 2011</a>).</figcaption>
</figure>
</div>
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>Singapore</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Singapur.svg" alt="Singapore" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<figure id="matriz-singapur-en">
<img src="/assets/elartedeconectarlospuntos/Matriz de pagos de Singapur.svg" alt="Singapore payoff matrix" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Matriz de pagos de Singapur.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Singapore payoff matrix"></object>
<figcaption>Table 3: Singapore matrix.<br>Characterized by strict laws and severe punishments<br>(<a href="#gossain_2019">Gossaín, 2019</a>).</figcaption>
</figure>
</div>
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>Mexico</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20M%C3%A9xico.svg" alt="Mexico" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<figure id="matriz-mexico-en">
<img src="/assets/elartedeconectarlospuntos/Matriz de pagos de México.svg" alt="Mexico payoff matrix" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Matriz de pagos de México.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Mexico payoff matrix"></object>
<figcaption>Table 4: Mexico matrix.<br>Characterized by an unstable equilibrium, where corruption can emerge<br>(<a href="#casar_2023">Casar & Cejudo, 2023</a>).</figcaption>
</figure>
</div>
</div>


<p>To this end, it was proposed to simulate the behavior of three different societies (<a href="#matriz-dinamarca-en">Table 2</a>, <a href="#matriz-singapur-en">Table 3</a>, and <a href="#matriz-mexico-en">Table 4</a>) through the corruption game, each with a payoff matrix adapted to its social context.</p>


<br>

<figure id="tabla-legatum-en">
<img src="/assets/elartedeconectarlospuntos/Índice de prosperidad de Legatum.svg" alt="Legatum Prosperity Index" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Índice de prosperidad de Legatum.svg" style="width: 100%; height: auto; display: block; margin: 0 auto;" aria-label="Legatum Prosperity Index"></object>
<figcaption>Table 5: 2023 Legatum Prosperity Index (<a href="#legatum_2023">Legatum Institute Foundation, 2023</a>).</figcaption>
</figure>
<br>
<p>The payoffs were proposed based on the Legatum Prosperity Index (<a href="#tabla-legatum-en">Table 5</a>), which is a tool that measures the level of well-being and development of countries through different parameters. As well as the literature regarding the social behavior of Denmark (<a href="#chene_2011">Chêne, 2011</a>), Singapore (<a href="#gossain_2019">Gossaín, 2019</a>), and Mexico (<a href="#casar_2023">Casar & Cejudo, 2023</a>).</p>
<br>

<figure id="red-modelo-en">
<img src="/assets/elartedeconectarlospuntos/Red modelo para la tesis.svg" alt="Model network for the thesis" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Red modelo para la tesis.svg" style="width: 50%; height: auto; display: block; margin: 0 auto;opacity: 0.8;" aria-label="Model network for the thesis"></object>
<figcaption>Figure 5: Model network for the thesis</figcaption>
</figure>

<p>A Barabási-Albert network (<a href="#red-modelo-en">Figure 5</a>) was used as the basis for modeling the societies, according to (<a href="#scata_2016">Scatà et al. 2016</a>) this type of network is the closest to a real social network.</p>


<h3 id="testing-the-model">Testing the model</h3>

<br>


<div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 15px; margin-bottom: 20px;">
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>Denmark</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Dinamarca.svg" alt="Denmark" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<br>
<figure id="juego-corrupcion-dinamarca-en">
<img src="/assets/elartedeconectarlospuntos/Juego de la corrupción - Dinamarca.svg" alt="Corruption game - Denmark" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Juego de la corrupción - Dinamarca.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Corruption game - Denmark"></object>
<figcaption>Table 6: In a few iterations, Danish society reaches a stable equilibrium where half the population corresponds to cooperative civilians (C) and the other half to honest power (H).</figcaption>
</figure>
</div>
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>Singapore</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Singapur.svg" alt="Singapore" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<br>
<figure id="juego-corrupcion-singapur-en">
<img src="/assets/elartedeconectarlospuntos/Juego de la corrupción - Singapur.svg" alt="Corruption game - Singapore" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Juego de la corrupción - Singapur.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Corruption game - Singapore"></object>
<figcaption>Table 7: Strict laws and their easy enforcement generate the stable cooperative equilibrium of cooperative civilians (C) and honest power (H) in Singapore's society.</figcaption>
</figure>
</div>
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>Mexico</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20M%C3%A9xico.svg" alt="Mexico" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<br>
<figure id="juego-corrupcion-mexico-en">
<img src="/assets/elartedeconectarlospuntos/Juego de la corrupción - México.svg" alt="Corruption game - Mexico" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Juego de la corrupción - México.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Corruption game - Mexico"></object>
<figcaption>Table 8: The unstable equilibrium of the population can be noticed; from the ninth iteration, the population shifts to a mixed population of cooperative civilians (C), honest power (H), and corrupt power (K). The system converges to the stable equilibrium (x) analyzed in the article 
by (<a href="#ubeda_2010">Ubeda & Dueñez-Guzman, 2010</a>)
</figcaption>
</figure>
</div>
</div>

<p>First, it was verified that each of the societies behaved according to reality, meaning that Denmark (<a href="#juego-corrupcion-dinamarca-en">Table 6</a>) and Singapore (<a href="#juego-corrupcion-singapur-en">Table 7</a>) would reach a cooperative equilibrium, while Mexico (<a href="#juego-corrupcion-mexico-en">Table 8</a>) would tend towards a state of corruption.</p>

<h4 id="robustness-of-societies">The robustness of societies</h4>
<p>Subsequently, experiments were conducted with the inclusion of a critical mass of corrupt individuals in three different initial configurations of the network (<a href="#masa-critica-en">Figure 5</a>), building on the central ideas of (<a href="#scata_2016">Scatà et al. 2016</a>).</p>

<br>
<figure id="roles-sociedad-en">
<img src="/assets/elartedeconectarlospuntos/Cuatro roles en la sociedad.svg" alt="Four roles in society" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Cuatro roles en la sociedad.svg" viewBox="0 0 800 600" style="width: 80%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Four roles in society"></object>
<figcaption>Figure 6: The four roles in society</figcaption>
</figure>


<p>In each society, the ability to maintain cooperative strategies in the face of the inclusion of non-cooperative strategies (D) and (K) (<a href="#roles-sociedad-en">Figure 6</a>) was measured.</p>

<h4>Denmark</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Dinamarca.svg" alt="Denmark" style="width: 10%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">

<figure id="evolucion-dinamarca-en">
<img src="/assets/elartedeconectarlospuntos/Evolución de Dinamarca con 20,25,30 M.C. - (K).gif" alt="Evolution of Denmark with 20,25,30 C.M. - (K)" style="display: none;">
<object type="image/gif" data="/assets/elartedeconectarlospuntos/Evolución de Dinamarca con 20,25,30 M.C. - (K).gif" viewBox="0 0 800 600" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Evolution of Denmark with 20,25,30 C.M. - (K)"></object>
<figcaption>Figure 7: Evolution of Denmark with 20%, 25%, and 30% critical mass of corrupt nodes (K) in the initial configuration of central nodes.</figcaption>
</figure>

<p>In Denmark (<a href="#evolucion-dinamarca-en">Figure 7</a>), it is observed that the population maintains its cooperative strategies despite the inclusion of corrupt nodes. But there is a tipping point approximately when there is 20% - 25% of corrupt nodes in the central part of the network, beyond which it is not possible to eliminate them.</p>

<figure id="evolucion-dinamarca-limite-en">
<img src="/assets/elartedeconectarlospuntos/Dinamarca 95MC(K)3CI.gif" alt="Denmark 95MC(K)3CI" style="display: none;">
<object type="image/gif" data="/assets/elartedeconectarlospuntos/Dinamarca 95MC(K)3CI.gif" viewBox="0 0 800 600" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Denmark 95MC(K)3CI"></object>
<figcaption>Figure 8: Evolution of Denmark with 95% critical mass of corrupt nodes (K) with different initial configurations: random, central, and peripheral nodes.</figcaption>
</figure>

<p>In the limit case (<a href="#evolucion-dinamarca-limite-en">Figure 8</a>), where 95% of the network starts with a corrupt strategy, the population evolves to a cooperative population except when the critical mass starts in the central part of the network.</p>

<h4>Singapore</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Singapur.svg" alt="Singapore" style="width: 10%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">

<figure id="evolucion-singapur-en">
<img src="/assets/elartedeconectarlospuntos/Evolución de la red de Singapur MC(H) 95(K).gif" alt="Evolution of Singapore network MC(H) 95(K)" style="display: none;">
<object type="image/gif" data="/assets/elartedeconectarlospuntos/Evolución de la red de Singapur MC(H) 95(K).gif" viewBox="0 0 800 600" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Evolution of Singapore network MC(H) 95(K)"></object>
<figcaption>Figure 9: Evolution of Singapore with 95% critical mass of corrupt nodes (K) with different initial configurations: random, central, and peripheral nodes.</figcaption>
</figure>

<p>In Singapore (<a href="#evolucion-singapur-en">Figure 9</a>), a similar result to Denmark was observed: the population maintains its cooperative strategies despite the inclusion of corrupt nodes. Except in the central nodes of the network, where greater resistance to cooperation is shown.</p>

<p>This was one of the first interesting results of the simulation, showing that even in highly cooperative societies, if a critical mass of corrupt nodes is introduced, the population tends to evolve towards a cooperative population except in the central part of the network.</p>

<h4>Mexico</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20M%C3%A9xico.svg" alt="Mexico" style="width: 10%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">

<figure id="evolucion-mexico-en">
<img src="/assets/elartedeconectarlospuntos/Evolución de la red de México MC(K).gif" alt="Evolution of Mexico network MC(K)" style="display: none;">
<object type="image/gif" data="/assets/elartedeconectarlospuntos/Evolución de la red de México MC(K).gif" viewBox="0 0 800 600" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Evolution of Mexico network MC(K)"></object>
<figcaption>Figure 10: Evolution of the Mexico network with different percentages of critical mass in central nodes with 20%, 60%, and 90% of corrupt nodes (K).</figcaption>
</figure>

<p>In Mexico (<a href="#evolucion-mexico-en">Figure 10</a>), a different result from Denmark and Singapore was observed: the society is not resilient against the inclusion of corrupt nodes. The initial percentage of critical mass remains constant.</p>

<h4 id="how-to-attack-network">How to attack a corrupt network?</h4>

<p>After confirming that the model recreated the dynamics of corruption in different countries, it led to the most interesting part of the work. In the Mexican case, lacking resilience against corruption, if you start with a network where all nodes are corrupt, is it possible to make it evolve into a cooperative society?</p>

<h4 id="all-scenarios">All possible scenarios</h4>

<p>To find an answer to this question, all possible scenarios were modeled. The goal was to find a scenario where the population would evolve into a cooperative population, or to find a pattern that would provide a clue on how to achieve it. The model parameters that were varied were:</p> <br>
<ul>
  <li><b>Type of critical mass:</b> <span style="display: inline-block;">Cooperative (C,H), Honest power (H)</span></li>
  <li><b>Percentage of critical mass:</b> <span style="display: inline-block;">5%, 10%, ..., 95%</span></li>
  <li><b>Initial spatial configuration:</b> <span style="display: inline-block;">Central, Random, Peripheral</span></li>
  <li><b>Number of iterations:</b> <span style="display: inline-block;">100, 200, ..., 1000</span></li>
  <li><b>Homophily percentage:</b> <span style="display: inline-block;">5%, 10%, ..., 95%</span></li>
</ul>

<br>
<p>
From those 24,000 possible scenarios, an interesting trend was found.
</p>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 0px; margin-bottom: 0px;">
<div style="flex: 1 1 100%; min-width: 200px; text-align: center;">

<figure id="intervencion-aleatoria-en">
<img src="/assets/elartedeconectarlospuntos/Red de México MC25NA(H,C).svg" alt="Mexico network MC25NA(H,C)" style="display: none;">
<div style="display: flex; flex-direction: row; justify-content: center; gap: 0px; align-items: flex-start;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Evolución de México MC25NA(H,C).svg" style="flex: 197; min-width: 0; width: 100%; height: auto; display: block; opacity: 0.8;" aria-label="Evolution of Mexico network MC(K)"></object>
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Red de México MC25NA(H,C).svg" style="flex: 209; min-width: 0; width: 100%; height: auto; display: block; opacity: 0.8;" aria-label="Mexico network MC25NA(H,C)"></object>
</div>
<figcaption>Figure 11: A cooperative critical mass in a random configuration managed to reduce the majority corrupt strategy in the Mexican network from 75% to 52%.</figcaption>
</figure>

</div>
</div>

<p>Traditional logic suggests that we should seek out and arrest the heads of the network (the central nodes). However, the model showed that a centralized attack is not the best strategy. The mathematical solution is a random disruption (<a href="#intervencion-aleatoria-en">Figure 11</a>).</p>

<figure id="intervencion-aleatoria-15-en">
<img src="/assets/elartedeconectarlospuntos/Red de México MC15NA(H,C).svg" alt="Mexico network MC15NA(H,C)" style="display: none;">
<div style="display: flex; flex-direction: row; justify-content: center; gap: 0px; align-items: flex-start;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Evolución de México MC15NA(H,C).svg" style="flex: 197; min-width: 0; width: 100%; height: auto; display: block; opacity: 0.8;" aria-label="Evolution of Mexico network MC(K)"></object>
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Red de México MC15NA(H,C).svg" style="flex: 209; min-width: 0; width: 100%; height: auto; display: block; opacity: 0.8;" aria-label="Mexico network MC15NA(H,C)"></object>
</div>
<figcaption>Figure 12: A 15% cooperative critical mass in a random configuration managed to reduce the majority corrupt strategy in the Mexican network from 85% to 60%.</figcaption>
</figure>

<p>There is no minimum threshold where the entire network evolves into a cooperative population, but there are minimum percentages where greater propagation occurs. For example, with a 15% cooperative critical mass (<a href="#intervencion-aleatoria-15-en">Figure 12</a>), the strategy manages to spread to 40% of the network. Starting from 30% of critical mass, the network evolves to a cooperative majority of 60% (<a href="#intervencion-aleatoria-30-en">Figure 13</a>).</p>

<figure id="intervencion-aleatoria-30-en">
<img src="/assets/elartedeconectarlospuntos/Red de México MC30NA(H,C).svg" alt="Mexico network MC30NA(H,C)" style="display: none;">
<div style="display: flex; flex-direction: row; justify-content: center; gap: 0px; align-items: flex-start;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Evolución de México MC30NA(H,C).svg" style="flex: 197; min-width: 0; width: 100%; height: auto; display: block; opacity: 0.8;" aria-label="Evolution of Mexico network MC(K)"></object>
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Red de México MC30NA(H,C).svg" style="flex: 209; min-width: 0; width: 100%; height: auto; display: block; opacity: 0.8;" aria-label="Mexico network MC30NA(H,C)"></object>
</div>
<figcaption>Figure 13: A 30% cooperative critical mass in a random configuration managed to reduce the majority corrupt strategy in the Mexican network from 70% to 40%.</figcaption>
</figure>

<p>Random intervention fragments the central community. The strategy change of the nodes modifies the connectivity of the corrupt network. By attacking randomly, vital links connecting different communities are broken, fragmenting the network into multiple isolated communities and enabling the cooperative strategy to emerge and expand until reaching an equilibrium.</p>

<br>
<hr>
<br>

<h2 id="conclusion-en">Conclusion</h2>

<p>The analysis reveals a fundamental duality in the dynamics of corruption. On one hand, its persistence depends on central control (<a href="#evolucion-dinamarca-en">Figure 7</a>, <a href="#evolucion-dinamarca-limite-en">Figure 8</a>, and <a href="#evolucion-singapur-en">Figure 9</a>): corrupt networks require key nodes that sustain their cohesion. On the other hand, its eradication requires random disruption (<a href="#intervencion-aleatoria-en">Figure 11</a>, <a href="#intervencion-aleatoria-15-en">Figure 12</a>, and <a href="#intervencion-aleatoria-30-en">Figure 13</a>).</p>

<p>The strategy to combat corruption is hybrid. On one hand, it requires modifying the payoff matrix of society, strengthening the rule of law <b>(c)</b> and the punishment of people in power <b>(<i>p < q</i>)</b> so that corruption becomes a losing strategy, as in Singapore. On the other hand, it demands weakening the structure of the corrupt network through random interventions, such as staff rotation and the promotion of transparency, following examples like Denmark.</p>

<h3 id="limitations-en">Limitations of the work</h3>

<p>The current model has several limitations that must be considered:</p>

<ul>
    <li><b>Unrepresentative sample</b> <br> <p>The conclusions are based solely on a Barabási-Albert network; a broader analysis with other networks sharing the same properties is needed.</p></li>
    <li><b>Arbitrary parameters in payoff matrices</b> <br> <p>The parameters in each country's payoff matrix were adjusted so that the society would behave similarly to the literature, but nothing guarantees they are the best values for the modeling.</p></li>
    <li><b>The model does not consider the creation and dissolution of links in the network.</b> <br> <p>In the current model, the links between nodes are static, which contrasts with dynamic connections in reality.</p></li>
</ul>

<h3 id="future-work-en">Future work</h3>

<p>The work opens new lines of research, notably the empirical validation of the model using data from real corruption cases. This would allow completing its development as a diagnostic and prognostic tool, with potential for designing more effective public policies and contributing to the restoration of the rule of law in Mexico and in other contexts with similar structural problems.</p>

<br>
<hr>
<br>

<h2 id="bibliography-en">Bibliography</h2>

<h3>Main articles</h3>


<figure>
<img src="/assets/elartedeconectarlospuntos/Artículo Martins et al - detallado.svg" alt="Martins et al. article" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Artículo Martins et al - detallado.svg" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.7;" aria-label="Martins et al. article"></object>
</figure>
<br>
<button><a href="assets/elartedeconectarlospuntos/Universality of corruption - Martins et al.pdf" target="_blank">📄 Martins et al., 2022 </a>
</button> 
<br>
<li id="martins_et_al_en">
Martins, A., da Cunha, B., Hanley, Q., Gonçalves, S., Perc, M., & Ribeiro, H. (2022). Universality of political corruption networks. <i>Nature Scientific Reports</i>. <br>
DOI: <a href="https://doi.org/10.1038/s41598-022-10909-2" target="_blank">https://doi.org/10.1038/s41598-022-10909-2</a>
</li> 
<br>

<figure>
<img src="/assets/elartedeconectarlospuntos/Artículo Scatà et al - detallado.svg" alt="Scatà et al. article" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Artículo Scatà et al - detallado.svg" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.7" aria-label="Scatà et al. article"></object>
</figure>
<br>
<button><a href="assets/elartedeconectarlospuntos/Combining evolutionary game theory and network theory - Scata et al.pdf" target="_blank">📄 Scatà et al., 2016 </a></button> 
<br>
<li id="scata_et_al_en">
Scatà, M., Di Stefano, A., La Corte, A., Liò, P., Catania, E., Guardo, E., & Pagano, S. (2016). Combining evolutionary game theory and network theory to analyze human cooperation patterns. <i>Chaos, Solitons and Fractals</i>, 17–24. <br>
DOI: <a href="https://doi.org/10.1016/j.chaos.2016.04.018" target="_blank">https://doi.org/10.1016/j.chaos.2016.04.018</a>
</li> 
<br>

<figure>
<img src="/assets/elartedeconectarlospuntos/Artículo Ubeda et al - detallado.svg" alt="Ubeda et al. article" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Artículo Ubeda et al - detallado.svg" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.7" aria-label="Ubeda et al. article"></object>
</figure>
<br>
<button><a href="assets/elartedeconectarlospuntos/Power and Corruption Úbeda & Duéñez.pdf" target="_blank">📄 Úbeda & Duéñez-Guzman, 2010 </a></button> 
<br>
<li id="ubeda_et_al_en">
Ubeda, F., & Dueñez-Guzman, E. (2010). Power and Corruption. <i>Evolution</i>, 1127-1139. <br>
DOI: <a href="https://doi.org/10.1111/j.1558-5646.2010.01194.x" target="_blank">https://doi.org/10.1111/j.1558-5646.2010.01194.x</a>
</li> 
<br>


<h3>Additional articles</h3>
<br>
<ul>
    <li id="luna-pla&nicolas-carlock_2020_en">Luna-Pla, I., & Nicolás-Carlock, J. (2020). Corruption and complexity: a scientific framework for the analysis of corruption networks.  <i>Applied Network Science</i>. <br> doi: <a href="https://doi.org/10.1007/s41109-020-00258-2" target="_blank">https://doi.org/10.1007/s41109-020-00258-2</a></li>

</ul>

<br>
<h3>Reports</h3>
<br>

<ul>
    <li id="legatum_2023_en">Legatum Institute Foundation. (2023). <i>The 2023 Legatum Prosperity Index</i>.
    <br>Retrieved from <a href="https://index.prosperity.com/about/resources" target="_blank">https://index.prosperity.com/about/resources</a></li>
    <br>
    <li id="transparencia_2023_en">Transparency International. (2024). <i>Corruption Perceptions Index 2023</i>.
    <br>Retrieved from <a href="https://www.transparency.org/en/cpi/2023" target="_blank">https://www.transparency.org/en/cpi/2023</a></li>
</ul>

<br>
<h3>Journalistic articles</h3>
<br>
<ul>
    <li id="casar_2023_en">Casar, M. A., & Cejudo, Q. (2023). México: Anatomía de la Corrupcion.  <i>Mexicanos Contra la Corrupción y la Impunidad</i>. 
    <br>
    Retrieved from <a href="https://contralacorrupcion.mx/anatomia-de-la-corrupcion-cuarta-edicion/" target="_blank"> https://contralacorrupcion.mx/anatomia-de-la-corrupcion-cuarta-edicion/</a></li>
<br>
    <li id="chene_2011_en">Chêne, M. (2011). What makes New Zealand, Denmark, Finland, Sweden and others 'cleaner' than most countries? <i>Transparency International</i> 
    <br>
    Retrieved from <a href="https://www.transparency.org/en/blog/what-makes-new-zealand-denmark-finland-sweden-and-others-cleaner-than-most-countries" target="_blank">https://www.transparency.org/en/blog/what-makes-new-zealand-denmark-finland-sweden-and-others-cleaner-than-most-countries</a></li>
<br>
    <li id="gossain_2019_en">Gossaín, J. (2019). ¿Quiere saber cómo fue que acabaron con la corrupción en Singapur? <i>El Tiempo</i>. 
    <br>
    Retrieved from <a href="https://www.eltiempo.com/colombia/otras-ciudades/como-se-acabo-la-corrupcion-en-singapur-386920" target="_blank">https://www.eltiempo.com/colombia/otras-ciudades/como-se-acabo-la-corrupcion-en-singapur-386920</a>
    </li>

</ul>

<br>
<br>

<hr>

<br>

<figure>
<img src="/assets/elartedeconectarlospuntos/MCM.svg" alt="Maria del Carmen Morales" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/MCM.svg" style="width: 80%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Maria del Carmen Morales"></object>
</figure>
<br>

<h4 id="in-memory-of">In memory of <b>Maria del Carmen Morales</b> <br> and all the searching mothers</h4>

<p style="width: 90%; margin: 0 auto;">Murdered along with one of her sons on the night of April 23 in the municipality of Tlajomulco de Zúñiga, Jalisco. Member of the Guerreros Buscadores collective, who revealed what occurred at the Izaguirre ranch in Teuchitlán, Jalisco, where members of the Jalisco New Generation Cartel (CJNG) trained, murdered, and disappeared people.
</p>

</div> <!-- end content-en -->