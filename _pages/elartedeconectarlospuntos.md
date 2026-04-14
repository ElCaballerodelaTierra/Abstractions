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
    <br>

    # Abstract

    This work proposes an innovative mathematical model to understand the spread and eradication of corruption in societies. By integrating network theory and game theory, it simulates the social dynamics of countries such as Denmark, Singapore, and Mexico to identify patterns of behavior and governance. The study reveals that corruption is a structural phenomenon where the rule of law, punishments, and monitoring costs determine the stability of the system. Among the main findings, it highlights that random interventions are more effective in dismantling corrupt networks than attacks directed at their central cores. Finally, the work offers a theoretical justification for designing smarter public policies that can transform corrupt societies into cooperative and transparent systems.
---
<body>

<div class="content-es">
<br>
<hr>

<br>
<h2>Índice</h2>    

<ul style="padding-left: 20px;">
      <li><a href="#podemos-predecir">¿Podemos predecir y detener la corrupción?</a></li>
      <li><a href="#que-es-corrupcion">¿Que es la corrupción?</a>
        <ul style="padding-left: 20px; list-style-type: square;">
          <li><a href="#modelando-corrupcion">Modelando la corrupción</a>
            <ul style="padding-left: 20px; list-style-type: circle;">
              <li><a href="#enfoque-redes">Enfoque mediante teoría de redes</a></li>
              <li><a href="#enfoque-juegos">Enfoque mediante teoría de juegos</a></li>
              <li><a href="#enfoque-mixto">Enfoque mixto: teoría de redes y juegos</a></li>
            </ul>
          </li>
        </ul>
      </li>
  <li><a href="#nuevo-modelo">Desarrollo de un nuevo modelo</a></li>
  <li><a href="#como-atacamos-la-red">¿Cómo atacar una red corrupta?</a>
    <ul style="padding-left: 20px; list-style-type: circle;">
      <li><a href="#todos-los-escenarios">Todos los escenarios posibles</a></li>
    </ul>
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

<h2 id="que-es-corrupcion">¿Que es la corrupción?</h2>

<p>La corrupción es un fenómeno complejo que puede manifestarse desde un soborno hasta el desvío de recursos públicos, pero en esencia, se puede definir como:</p>

<p style="text-align: right; width: 95%;"><cite><strong>“El abuso del poder confiado a una persona para obtener una ganancia privada”</strong></cite>
<br><br> (<a href="#transparencia_2023" target="_blank">Transparencia Internacional, 2024</a>)</p>

<p>Una definición matemática de la corrupción debe considerar dos ideas centrales: el <b>poder</b> como una red de relaciones, y la <b>ganancia</b> como resultado de decisiones estratégicas basadas en riesgos y beneficios. <br><br>

Para modelarlo, se han seguido dos enfoques principales: la teoría de redes, que analiza la estructura y los actores dentro de sistemas corruptos, y la teoría de juegos, que estudia las decisiones estratégicas de los individuos. Aunque cada enfoque tiene sus limitaciones, al combinarlos se obtiene una representación más completa del fenómeno.</p>

<h3 id="modelando-corrupcion">Modelando la corrupción</h3>

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
<figcaption>Figura 1: Matriz de pagos del juego de la corrupción.</figcaption>
</figure>

<p>(<a href="#ubeda_et_al">Ubeda & Dueñez-Guzman, 2010</a>) formularon el <i>juego de la corrupción</i> (<a href="#juego-de-la-corrupcion">Figura 1</a>), una extensión del dilema del prisionero. La idea central fue permitir las asimetrías de poder entre personas.</p>

<h4 id="avispa">El avispero <br> <i>Inspiración original del juego de la corrupción</i></h4>

<figure>
<img src="/assets/elartedeconectarlospuntos/Avispa.svg" alt="Avispa" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Avispa.svg" style="width: 20%; height: auto; display: block; margin: 0 auto;  opacity: 0.8;" aria-label="Avispa"></object>
</figure>

<p>En una colmena de avispas el contrato social se conforma entre la avispa reina, la única delegada para poner huevos y las obreras <b>(C)</b>, que trabajan para criar a sus hermanas. Sin embargo, existe una tentación biológica: una obrera puede romper el contrato <b>(D)</b> y poner sus propios huevos no fertilizados para pasar sus genes, obteniendo un beneficio genético <b>(t)</b> a costa de las leyes de la colonia. Para evitar este caos, existen obreras con el rol de policía. Si una policía es honesta <b>(H)</b>, gastará energía y tiempo <b>(-c)</b> en inspeccionar las celdas y comerse los huevos ilegales de sus compañeras egoístas, aplicando un castigo <b>(-p)</b> al destruir su descendencia.</p>

<p>El problema surge cuando la avispa policía es corrupta <b>(K)</b>, esto significa que tiene el poder de vigilar, pero decide no hacerlo para ahorrarse el costo energético <b>(c)</b> o, peor aún, usa su posición de poder para poner sus propios huevos impunemente <b>(t)</b>. Si las obreras comunes notan que las policías no están vigilando (es decir, que el poder no cooperativo es la estrategia dominante), se desata el caos: todas empiezan a poner huevos de manera egoísta en lugar de trabajar, y la productividad de la colmena colapsa. </p>

<p>El juego demuestra que, al igual que en las sociedades humanas, si el costo de vigilar es muy alto o el castigo es ineficaz, la colmena evoluciona hacia un estado de anarquía.</p>

<h4 id="enfoque-mixto">Enfoque mixto: teoría de redes y juegos</h4>

<figure>
<img src="/assets/elartedeconectarlospuntos/Algoritmo de Scata et al.svg" alt="Algoritmo de Scàta et al" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Algoritmo de Scata et al.svg" style="width: 90%; height: auto; display: block; margin: 0 auto;  opacity: 0.8;" aria-label="Algoritmo de Scàta et al"></object>
<figcaption>Figura 1: Algoritmo de Scàta et al</figcaption>
</figure>

<p>(<a href="#scata_et_al">Scatà et al., 2016</a>) exploraron la evolución de la cooperación humana por medio de un modelo que combinó la teoría de juegos (<i>el dilema del prisionero</i>) y las redes libres de escala.</p>


<figure id="masa-critica">
<img src="/assets/elartedeconectarlospuntos/Masa crítica en diferentes configuraciones iniciales.png" alt="Masa crítica en diferentes configuraciones iniciales">
<figcaption>Figura 1: Masa crítica en distintas configuraciones iniciales: en la periferia, aleatoriamente y en el centro (<a href="#scata_et_al">Scatà et al., 2016</a>).</figcaption>
</figure>

<p>En su artículo buscaron comprender cómo la inserción de una masa mínima de personas cooperadoras (<a href="#masa-critica">Figura 1</a>) influye en una red de personas no cooperadoras.</p>

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

<figure>
<img src="/assets/elartedeconectarlospuntos/Hipótesis del trabajo.svg" alt="Hipótesis del trabajo" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Hipótesis del trabajo.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Hipótesis del trabajo"></object>
<figcaption>Figura 1: Hipótesis del trabajo, si reemplazamos el dilema del prisionero por el juego de la corrupción, ¿será posible crear redes corruptas al variarar los parámetros de la matriz de pagos del juego?</figcaption>
</figure>

<p>La hipótesis del trabajo se basó en la pregunta: ¿es posible obtener redes corruptas similares a las de (<a href="#martins_et_al">Martins et al., 2022</a>) si se usa el juego de de la corrupción (<a href="#ubeda_et_al">Ubeda & Dueñez-Guzman, 2010</a>) en el modelo mixto de (<a href="#scata_et_al">Scatá et al., 2016</a>)?</p>

<p>Para ello, se propuso simular el comportamiento de tres sociedades distintas por medio del juego de la corrupción, cada una con una matriz de pagos acorde a su contexto social.</p>

<div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 15px; margin-bottom: 20px;">
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>Dinamarca</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Dinamarca.svg" alt="Dinamarca" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<figure>
<img src="/assets/elartedeconectarlospuntos/Matriz de pagos de Dinamarca.svg" alt="Matriz de pagos de Dinamarca" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Matriz de pagos de Dinamarca.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Matriz de pagos de Dinamarca"></object>
<figcaption>Figura 1: Matriz de Dinamarca.<br>Se caracteriza por una alta confianza social y transparencia<br>(<a href="#chene_2011">Chêne, 2011</a>).</figcaption>
</figure>
</div>
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>Singapur</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Singapur.svg" alt="Singapur" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<figure>
<img src="/assets/elartedeconectarlospuntos/Matriz de pagos de Singapur.svg" alt="Matriz de pagos de Singapur" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Matriz de pagos de Singapur.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Matriz de pagos de Singapur"></object>
<figcaption>Figura 1: Matriz de Singapur.<br>Se caracteriza por leyes estrictas y castigos severos<br>(<a href="#gossain_2019">Gossaín, 2019</a>).</figcaption>
</figure>
</div>
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>México</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20M%C3%A9xico.svg" alt="México" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<figure>
<img src="/assets/elartedeconectarlospuntos/Matriz de pagos de México.svg" alt="Matriz de pagos de México" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Matriz de pagos de México.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Matriz de pagos de México"></object>
<figcaption>Figura 1: Matriz de México.<br>Se caracteriza por un equilibrio inestable, donde puede emerger la corrupción <br>(<a href="#casar_2023">Casar & Cejudo, 2023</a>).</figcaption>
</figure>
</div>
</div>

<p>La matriz de pagos de cada país se propuso basándose en el índice de prosperidad de Legatum (<a href="#legatum_2023">Legatum Institute Foundation, 2023</a>), el cual es una herramienta que mide el nivel de bienestar y desarrollo de los países mediante diferentes parámetros. <br> Así como en la literatura respecto al compartamiento social en los diferentes países, Dinamarca (<a href="#chene_2011">Chêne, 2011</a>), Singapur (<a href="#gossain_2019">Gossaín, 2019</a>) y México (<a href="#casar_2023">Casar & Cejudo, 2023</a>).</p>

<br>

<figure>
<img src="/assets/elartedeconectarlospuntos/Índice de prosperidad de Legatum.svg" alt="Índice de prosperidad de Legatum" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Índice de prosperidad de Legatum.svg" style="width: 100%; height: auto; display: block; margin: 0 auto;" aria-label="Índice de prosperidad de Legatum"></object>
<figcaption>Figura 1: Índice de prosperidad de Legatum del 2023</figcaption>
</figure>

<br>
<p>Como base para modelar las sociedades se utilizó una red de tipo Barabasí-Albert, acorde a (<a href="#scata_2016">Scatà et al. 2016</a>) este tipo de red es la más cercana a una red social real.</p>
<br>

<figure>
<img src="/assets/elartedeconectarlospuntos/Red modelo para la tesis.svg" alt="Red modelo para la tesis" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Red modelo para la tesis.svg" style="width: 50%; height: auto; display: block; margin: 0 auto;opacity: 0.8;" aria-label="Red modelo para la tesis"></object>
<figcaption>Figura 1: Red modelo para la tesis</figcaption>
</figure>

<h3>Poniendo a prueba el modelo</h3>

<p>Primero se verificó que cada una de las sociedades se comportara acorde a la realidad, es decir, que Dinamarca y Singapur alcanzaran un equilibrio cooperativo, mientras que México tendiera a un estado de corrupción.
<br>


<div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 15px; margin-bottom: 20px;">
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>Dinamarca</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Dinamarca.svg" alt="Dinamarca" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<br>
<figure>
<img src="/assets/elartedeconectarlospuntos/Juego de la corrupción - Dinamarca.svg" alt="Juego de la corrupción - Dinamarca" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Juego de la corrupción - Dinamarca.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Juego de la corrupción - Dinamarca"></object>
<figcaption>Figura 1: En pocas iteraciones la sociedad danesa llega a un equilibrio estable donde la mitad de la población corresponde a civiles cooperadores (C) y la otra mitad al poder honrado (H).</figcaption>
</figure>
</div>
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>Singapur</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Singapur.svg" alt="Singapur" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<br>
<figure>
<img src="/assets/elartedeconectarlospuntos/Juego de la corrupción - Singapur.svg" alt="Juego de la corrupción - Singapur" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Juego de la corrupción - Singapur.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Juego de la corrupción - Singapur"></object>
<figcaption>Figura 1: Las leyes estrictas y su fácil aplicación generan el equilibrio estable cooperativo de civiles cooperadores (C) y poder honrado (H) en la sociedad de Singapur.</figcaption>
</figure>
</div>
<div style="flex: 1 1 30%; min-width: 200px; text-align: center;">
<h4>México</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20M%C3%A9xico.svg" alt="México" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<br>
<figure>
<img src="/assets/elartedeconectarlospuntos/Juego de la corrupción - México.svg" alt="Juego de la corrupción - México" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Juego de la corrupción - México.svg" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Juego de la corrupción - México"></object>
<figcaption>Figura 1: Se puede notar el equilibrio inestable de la población, a partir de la novena iteración la población cambia a una población mixta de civiles cooperadores (C), poder honrado (H) y corrupto (K), el sistema converge al equilibrio estable (x) analizado en el artículo 
de ( <a href="#ubeda_2010">Ubeda & Dueñez-Guzman, 2010</a>)
</figcaption>
</figure>
</div>
</div>

<br>

<h4>La robustez de las sociedades</h4>
<p>Porteriormente se experimentó con la inclusión de una masa crítica de personas corruptas en tres diferentes configuraciones iniciales de la red (<a href="#masa-critica">Figura 1</a>), retomando las ideas centrales de (<a href="#scata_2016">Scatà et al. 2016</a>).</p>

<br>
<figure>
<img src="/assets/elartedeconectarlospuntos/Cuatro roles en la sociedad.svg" alt="Cuatro roles en la sociedad" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Cuatro roles en la sociedad.svg" viewBox="0 0 800 600" style="width: 80%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Cuatro roles en la sociedad"></object>
<figcaption>Figura 1: Los cuatro roles en la sociedad</figcaption>
</figure>


<p>Se midió en cada sociedad la capacidad de mantener estrategias cooperativas ante la inclusión de nodos no cooperativos (D) y (K).</p>

<h4>Dinamarca</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Dinamarca.svg" alt="Dinamarca" style="width: 10%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">
<!-- <figure>
<img src="/assets/elartedeconectarlospuntos/Evolución de la red de Dinamarca.gif" alt="Evolución de la red de Dinamarca" style="display: none;">
<object type="image/gif" data="/assets/elartedeconectarlospuntos/Evolución de la red de Dinamarca.gif" viewBox="0 0 800 600" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Evolución de la red de Dinamarca"></object>
<figcaption>Figura 1: Evolución de la red de Dinamarca al introducir una masa crítica del 20% de nodos corruptos (color oscuro) en la periferia de la red.</figcaption>
</figure> -->


<figure>
<img src="/assets/elartedeconectarlospuntos/Evolución de Dinamarca con 20,25,30 M.C. - (K).gif" alt="Evolución de Dinamarca con 20,25,30 M.C. - (K)" style="display: none;">
<object type="image/gif" data="/assets/elartedeconectarlospuntos/Evolución de Dinamarca con 20,25,30 M.C. - (K).gif" viewBox="0 0 800 600" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Evolución de Dinamarca con 20,25,30 M.C. - (K)"></object>
<figcaption>Figura 1: Evolución de Dinamarca con 20%, 25% y 30% de masa crítica de nodos corruptos (K) en la configuracion inicial de nodos centrales.</figcaption>
</figure>

<p>En Dinamarca se observa que la población mantiene sus estrategias cooperativas a pesar de la inclusión de nodos corruptos. Pero existe un punto de inflexión aproximadamente cuando se tiene el 20% - 25% de nodos corruptos en la parte central de la red, a partir del cual no es posible eliminarlos.</p>

<figure>
<img src="/assets/elartedeconectarlospuntos/Dinamarca 95MC(K)3CI.gif" alt="Dinamarca 95MC(K)3CI" style="display: none;">
<object type="image/gif" data="/assets/elartedeconectarlospuntos/Dinamarca 95MC(K)3CI.gif" viewBox="0 0 800 600" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Dinamarca 95MC(K)3CI"></object>
<figcaption>Figura 1: Evolución de Dinamarca con 95% de masa crítica de nodos corruptos (K) con diferentes configuraciones iniciales, nodos aleatorios, centrales y periféricos.</figcaption>
</figure>

<p> En el caso límite donde el 95% de la red inicia con una estrategia corrupta, la población evoluciona a una población cooperadora excepto en cuando la masa crítica inicia en la parte central de la red. 

<h4>Singapur</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Singapur.svg" alt="Singapur" style="width: 10%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">

<figure>
<img src="/assets/elartedeconectarlospuntos/Evolución de la red de Singapur MC(H) 95(K).gif" alt="Evolución de la red de Singapur MC(H) 95(K)" style="display: none;">
<object type="image/gif" data="/assets/elartedeconectarlospuntos/Evolución de la red de Singapur MC(H) 95(K).gif" viewBox="0 0 800 600" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Evolución de la red de Singapur MC(H) 95(K)"></object>
<figcaption>Figura 1: Evolución de Singapur con 95% de masa crítica de nodos corruptos (K) con diferentes configuraciones iniciales, nodos aleatorios, centrales y periféricos.</figcaption>
</figure>

<p>En Singapur se observó un resultado similar al de Dinamarca, la población mantiene sus estrategias cooperativas a pesar de la inclusión de nodos corruptos. Excepto en los nodos centrales de la red, donde se muestra una mayor resistencia a la cooperación.</p>

<p>Este fue uno de los primeros resultados interesantes de la simulación, muestra que inclusive en sociedades altamente cooperadoras si se introduce una masa crítica de nodos corruptos, la población tiende a evolucionar a una población cooperadora excepto en la parte central de la red.</p>

<h4>México</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20M%C3%A9xico.svg" alt="México" style="width: 10%; height: auto; display: block; margin: 0 auto; opacity: 0.8;">

<figure>
<img src="/assets/elartedeconectarlospuntos/Evolución de la red de México MC(K).gif" alt="Evolución de la red de México MC(K)" style="display: none;">
<object type="image/gif" data="/assets/elartedeconectarlospuntos/Evolución de la red de México MC(K).gif" viewBox="0 0 800 600" style="width: 100%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Evolución de la red de México MC(K)"></object>
<figcaption>Figura 1: Evolución de la red de México con diferentes porcentajes de masa crítica en los nodos centrales con 20%, 60% y 90% de nodos corruptos (K).</figcaption>
</figure>

<p>En México se observó un resultado diferente al de Dinamarca y Singapur, la sociedad no es resiliente ante la inclusión de nodos corruptos. El porcentaje inicial de masa crítica se mantiene constante. </p>

<h3 id="como-atacamos-la-red">¿Cómo atacar una red corrupta?</h3>

<p>Al comprobar que el modelo recreaba la dinámica de la corrupción en diferentes países, dio pie a la parte más interesante del trabajo. En el caso mexicano al no contar con resiliencia ante la corrupción, si se inicia con una red donde todos los nodos son corruptos, ¿es posible lograr que evolucione a una sociedad cooperadora? </p>

<h4 id="todos-los-escenarios">Todos los escenarios posibles</h4>

<p>Para encontrar respuesta este planteamiento, se modelaron todos los escenarios posibles. Buscando encontrar algún escenario en donde la población evolucionara a una población cooperadora o encontrar algún patrón que permitiera obtener alguna pista de cómo lograrlo. Los parámetros del modelo que se variaron fueron: </p> 
<br>

<li><b>Tipo de masa crítica:</b> Cooperadora (C,H), Poder honrado (H) <br>
<li><b>Porcentaje de masa crítica:</b> 5%, 10%, ..., 95% <br>
<li><b>Configuración espacial inicial:</b> Central, Aleatoria, Periférica <br>
<li><b>Cantidad de iteraciones:</b> 100, 200, ..., 1000 <br>
<li><b>Porcentaje de homofilia:</b> 5%, 10%, ..., 95% <br>

<br>
<p>
De esos 24,000 escenarios posibles algunos mostraron un resultado interesante.




uno de los hallazgos más reveladores de la simulación tiene que ver con cómo desmantelar estas redes. La lógica tradicional sugiere que debemos buscar y arrestar a las cabezas de la red (los nodos centrales). Sin embargo, el modelo demostró que <b>un ataque centralizado tiende a fallar</b>. Al poder cambiar de estrategia un nodo central, los nodos corruptos vecinos tienden a revertir la estrategia de cooperación y la red corrupta sobrevive.</p>

<p>¿La solución matemática? <b>Una disrupción aleatoria</b>. </p>

<p>La eliminación aleatoria de nodos degrada rápidamente la conectividad global de la red, fracturándola en pequeñas comunidades aisladas. En la vida real, esto se traduce en políticas como la rotación obligatoria y aleatoria de personal en puestos de alto riesgo (aduanas, compras públicas, licencias). Al rotar al personal, se impide la formación de lazos de confianza criminal a largo plazo.</p>

<h2 id="conclusion">Conclusión</h2>



<h3 id="limitaciones">Limitaciones del trabajo</h3>

<p>El modelo actual tiene varias limitaciones que deben ser consideradas:</p>

<ul>
    <li><b>Muestra poco representativa</b> <br> <p>Las conclusiones se basan únicamente en una red Barabasí-Albert, es necesario realizar un análisis más amplio con otras redes con las mismas propiedades.</p></li>
    <li><b>Parámetros  arbitrarios en las matrices de pagos</b> <br> <p>Los parámetros en la matriz de pagos de cada país se ajustaron para que la sociedad se comportara de manera similar a la literatura, pero nada asegura que puedan ser los mejores valores para el modelado.</p></li>
    <li><b>El modelo no considera la creación y disolución de enlaces en la red.</b> <br> <p>En el modelo actual, los enlaces entre los nodos son estáticos, lo cual contrasta con las conexiones dinámicas en la realidad.</p></li>
</ul>

<h3 id="trabajo-futuro">Trabajo futuro</h3>

<p>La mejor manera de comprobar si el modelo actual necesita ajustes es compararlo con casos reales de corrupción, así identificar patrones que puedan ser utilizados para diseñar políticas públicas más efectivas.</p>

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
<p id="martins_et_al">
Martins, A., da Cunha, B., Hanley, Q., Gonçalves, S., Perc, M., & Ribeiro, H. (2022). Universality of political corruption networks. <i>Nature Scientific Reports</i>. <br>
DOI: <a href="https://doi.org/10.1038/s41598-022-10909-2" target="_blank">https://doi.org/10.1038/s41598-022-10909-2</a>
</p> 
<br>

<figure>
<img src="/assets/elartedeconectarlospuntos/Artículo Scatà et al - detallado.svg" alt="Artículo Scatà et al" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Artículo Scatà et al - detallado.svg" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.7" aria-label="Artículo Scatà et al"></object>
</figure>
<br>
<button><a href="assets/elartedeconectarlospuntos/Combining evolutionary game theory and network theory - Scata et al.pdf" target="_blank">📄 Scatà et al., 2016 </a></button> 
<br>
<p id="scata_et_al">
Scatà, M., Di Stefano, A., La Corte, A., Liò, P., Catania, E., Guardo, E., & Pagano, S. (2016). Combining evolutionary game theory and network theory to analyze human cooperation patterns. <i>Chaos, Solitons and Fractals</i>, 17–24. <br>
DOI: <a href="https://doi.org/10.1016/j.chaos.2016.04.018" target="_blank">https://doi.org/10.1016/j.chaos.2016.04.018</a>
</p>
<br>

<figure>
<img src="/assets/elartedeconectarlospuntos/Artículo Ubeda et al - detallado.svg" alt="Artículo Ubeda et al" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Artículo Ubeda et al - detallado.svg" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.7" aria-label="Artículo Ubeda et al"></object>
</figure>
<br>
<button><a href="assets/elartedeconectarlospuntos/Power and Corruption Úbeda & Duéñez.pdf" target="_blank">📄 Úbeda & Duéñez-Guzman, 2010 </a></button> 
<br>
<p id="ubeda_et_al">
Ubeda, F., & Dueñez-Guzman, E. (2010). Power and Corruption. <i>Evolution</i>, 1127-1139. <br>
DOI: <a href="https://doi.org/10.1111/j.1558-5646.2010.01194.x" target="_blank">https://doi.org/10.1111/j.1558-5646.2010.01194.x</a>
</p>
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
<br>
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


<div class="content-en">
<p>To understand how these dynamics evolve over time, we analyzed and replicated the behavior of the most influential models in the field. Below is the logic of strategy updating within a social network:</p>

<!-- Mermaid diagram -->
<figure class="mermaid diagramaDeFlujo">
    flowchart TD
    A(["Start of the algorithm"]) --> B[/$M, c, J, H, K, N$/]
    B --> C["A Barabási-Albert network is created"]
    C --> D["The initial strategies ($M$) are assigned according to the initial position ($c$)"]
    D --> E{"$i > N$"}
    E -- No --> F{"$j > R$"}
    F -- No --> G["The node plays ($J$) with all its neighbors"]
    G --> H["Calculates its total gain ($g$)"]
    H --> I{"$p < H + g$"}
    I -- Si --> J["Maintain strategy"]
    I -- No --> K["Change strategy"]
    J --> L["Counter for each node of the network <br> $j = j + 1$"]
    K --> L
    L --> F
    %% Ramas "Si" que bajan hasta el final del diagrama
    F -- Si ---> Y["The iteration counter is increased <br> $i = i + 1$"]
    Y --> E
    E -- Si ----> Z(["End of the algorithm"])
    %% Enlaces invisibles para ordenar Y y Z obligatoriamente hasta abajo
    L ~~~ Y
    Y ~~~ Z

</figure>
<figcaption>Flowchart that represents the most important parts of the algorithm proposed by Scatà, M. et al. </figcaption>

<h3 id="how-to-attack">The Counterintuitive Discovery: How Do We Attack the Network?</h3>

<p>One of the most revealing findings of the simulation involves how to dismantle these networks. Traditional logic suggests that we should seek out and arrest the heads of the network (the central nodes). However, our model showed that <b>a centralized attack tends to fail</b>. When a central node is removed, mid-hierarchy nodes quickly reorganize their connections, and the network survives.</p>

<p>The mathematical solution? <b>Random disruption</b>.</p>

<p>The random removal of nodes rapidly degrades the overall connectivity of the network, fracturing it into small, isolated communities. In real life, this translates into policies such as mandatory and random rotation of personnel in high-risk positions (customs, public procurement, licensing). By rotating staff, the formation of long-term criminal trust bonds is prevented.</p>


 <div class="content-es">

    <h3 id="conclusion">Conclusión</h3>
    <p>La corrupción es un sistema adaptativo, por lo que una solución única siempre será insuficiente. Los hallazgos de nuestra investigación sugieren que las políticas públicas deben enfocarse en dos frentes simultáneos:</p>
    <ol>
        <li><b>Cambiar la matriz de pagos:</b> Incrementar los costos de ser corrupto eliminando la impunidad y reduciendo los costos de monitoreo mediante la digitalización y transparencia total de datos (al estilo Dinamarca).</li>
        <li><b>Atacar la estructura de la red:</b> Intervenciones aleatorias (rotación de personal) que rompan los enlaces de confianza y eviten que el sistema se reorganice.</li>
    </ol>
    <p>Las matemáticas nos brindan una nueva lente: la corrupción no es una falla moral inevitable, es una estructura que, si entendemos cómo se conecta, podemos calcular cómo desmantelarla.</p>
 </div>
 
 <div class="content-en">
 <p>We also studied how these networks form and grow from scratch, using predictive models based on the recidivism of the actors involved:</p>
     <!-- Mermaid diagram -->
    <figure class="mermaid diagramaDeFlujo">
        flowchart TD
        A(["Start of the algorithm"]) --> B[/"$N, \lambda, \alpha, \beta, p$"/]
        B --> C["A network is created"]
        C --> D{"$i > N$"}
        D -- Yes --> E(["End of the algorithm"])
        D -- No --> F["A complete network of random size is created <br> $P(x) \sim e^{-x/\lambda}$"]
        F --> G["The recurrent nodes are calculated <br> $r = \alpha n - \beta$"]
        G --> H["The recurrent nodes are assigned by probabilities, <br> $p$ for recurrent nodes and $1-p$ for normal nodes"]
        H --> I["The iteration counter is increased <br> $i = i + 1$"]
        I --> D
        I ~~~ E
    </figure>
    <figcaption>Flowchart that represents the most important parts of the algorithm proposed by Martins et al. </figcaption>

    <h3 id="conclusion-en">Conclusion: A Hybrid Strategy</h3>
    <p>Corruption is an adaptive system, so a single solution will always fall short. The findings of our research suggest that public policies must focus on two simultaneous fronts:</p>
    <ol>
        <li><b>Change the payoff matrix:</b> Increase the costs of being corrupt by eliminating impunity and reducing monitoring costs through digitalization and total data transparency (like Denmark).</li>
        <li><b>Attack the network structure:</b> Implement random interventions (such as staff rotation) that break trust links and prevent the system from reorganizing.</li>
    </ol>
    <p>Mathematics offers us a new lens: corruption is not an inevitable moral failure, it is a structure that, if we understand how it connects, we can calculate how to dismantle.</p>
 </div>

</body>