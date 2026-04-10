---
published: true
canvas: true

layout: default
mediaPortada: true
titulo-en-portada: false

imagenPortada: /assets/redes/Red.jpg
descripcionImagenPortada-es: "Ilustración de una red de conexiones entre personas"
descripcionImagenPortada-en: "Illustration of a network of connections between people"

titulo-es: El arte de conectar los puntos
subtitulo-es: 
frase-es: |
    "Bienvenidos al arte de conectar los puntos"
frase-autor-es:
frase-contexto-es:

content-es: |

    <i> Resumen de la tesis: "Comprendiendo y atacando la corrupción, un análisis mediante teoría de redes y teoría de juegos a los sistemas sociales y su evolución". </i>
    <br>

    # Resumen

    Un nuevo modelo matemático simula la propagación y erradicación de la corrupción en distintas sociedades, como Dinamarca, Singapur y México para identificar patrones de comportamiento y gobernanza. <br><br>
    El trabajo revela que la corrupción es un fenómeno estructural donde el estado de derecho, los castigos y los costos de vigilancia determinan la estabilidad del sistema. Entre los hallazgos principales, destaca que las intervenciones aleatorias resultan más efectivas para desmantelar redes corruptas que los ataques dirigidos a sus núcleos centrales. <br><br>
    Se ofrece una justificación teórica para diseñar políticas públicas más inteligentes que logren transformar sociedades corruptas en sistemas cooperativos y transparentes.


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
              <li><a href="#enfoque-mixto">Enfoque mixto, mediante teoría de redes y teoría de juegos</a></li>
            </ul>
          </li>
        </ul>
      </li>
  <li><a href="#nuevo-modelo">Desarrollo de un nuevo modelo</a></li>
  <li><a href="#como-atacamos-la-red">El descubrimiento contraintuitivo: ¿Cómo atacamos la red?</a></li>
  <li><a href="#conclusion">Conclusión</a></li>
</ul>
<br>
<hr>
<br>
<h2 id="podemos-predecir">¿Podemos predecir y detener la corrupción?</h2>

<p>Tradicionalmente las políticas anticorrupción se han centrado en castigar individuos. Sin embargo, esta estrategia ha sido insuficiente. Para entender por qué persiste, fue necesario comprender cómo interactuaban las personas y qué incentivos tenían para corromperse o mantenerse honestas.</p>

<p>La humanidad encontró un nuevo aliado en la lucha contra la corrupción: <b>la matemática</b>. Especialmente a través de la <b>teoría de redes</b> (que analiza cómo se estructuran y conectan los grupos) y la <b>teoría de juegos</b> (que estudia cómo los individuos toman decisiones basadas en costos y beneficios) se pueden modelar los sistemas sociales.</p>

<h2 id="que-es-corrupcion">¿Que es la corrupción?</h2>

<p>La corrupción es un fenómeno complejo que puede manifestarse de muchas formas, pero en esencia, se puede definir como:</p>

<p style="text-align: right; width: 90%;"><cite><strong>“El abuso del poder confiado a una persona para obtener una ganancia privada”</strong></cite>
<br><br> <a href="https://www.transparency.org/en/what-is-corruption" target="_blank"> (Transparencia Internacional, 2024)</a></p>

<p>Una definición matemática de la debe considerar dos ideas centrales: el <b>poder</b> como una red de relaciones y acceso a recursos, y la <b>ganancia</b> como resultado de decisiones estratégicas basadas en riesgos y beneficios. <br><br>

Para modelarlo, se han seguido dos enfoques principales: la teoría de redes, que analiza la estructura y los actores dentro de sistemas corruptos, y la teoría de juegos, que estudia las decisiones estratégicas de los individuos. Aunque cada enfoque tiene limitaciones, su combinación permite una representación más completa del fenómeno.</p>

<h3 id="modelando-corrupcion">Modelando la corrupción</h3>

Existieron trabajos previos que buscaron modelar la corrupción, sin embargo, estos trabajos tenían limitaciones. Por ejemplo, los modelos basados en teoría de redes no consideraban las decisiones individuales de los actores, mientras que los modelos basados en teoría de juegos no consideraban la estructura de la red. 

<h4 id="enfoque-redes">Enfoque mediante teoría de redes</h4>

<p>Las personas no interactúan en el vacío. Estamos conectados en redes (familias, oficinas gubernamentales, empresas). Integrando dinámicas de redes, el modelo estudia cómo una actitud corrupta se "contagia" de un nodo (persona) a otro, de manera muy similar a cómo se propaga un virus en una pandemia.</p>

<figure>
<img src="/assets/elartedeconectarlospuntos/Red española.png" alt="Red española">
<figcaption>Figura 1: Red corrupta española (Martins et al., 2022).</figcaption>
</figure>

<p>Las redes corruptas (como las observadas en escándalos reales en Brasil, España y México) comparten características matemáticas precisas: tienen comunidades muy unidas y pocos nodos que concentran mucho poder.</p>


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

<figure>
<img src="/assets/elartedeconectarlospuntos/Artículo Martins et al - detallado.svg" alt="Artículo Martins et al" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Artículo Martins et al - detallado.svg" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.7;" aria-label="Artículo Martins et al"></object>
</figure>

<cite> Martins, A., da Cunha, B., Hanley, Q., Gonçalves, S., Perc, M., & Ribeiro, H. (2022). Universality of political corruption networks. Nature Scientific Reports. <br>
DOI: <a href="https://doi.org/10.1038/s41598-022-10909-2" target="_blank">https://doi.org/10.1038/s41598-022-10909-2</a>
</cite> 
<br><br>
<button><a href="assets/elartedeconectarlospuntos/Universality of corruption - Martins et al.pdf" target="_blank">📄 Martins et al., 2022 </a></button> 
<br>
<h4 id="enfoque-juegos">Enfoque mediante teoría de juegos</h4>

<p>Imagina la sociedad como un gran juego donde las estrategias de los jugadores (ser honesto o ser corrupto) evolucionan con el tiempo. Utilizando modelos previos, como el de (Ubeda & Dueñez-Guzman, 2010), podemos analizar matemáticamente los "pagos" o recompensas que obtienen las personas al tomar una decisión. Si el sistema recompensa la corrupción y penaliza la honestidad, la estrategia corrupta "sobrevive" y prospera.</p>

<figure>
<img src="/assets/elartedeconectarlospuntos/Juego de la corrupción.svg" alt="Juego de la corrupción" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Juego de la corrupción.svg" style="width: 70%; height: auto; display: block; margin: 0 auto;" aria-label="Juego de la corrupción"></object>
<figcaption>Figura 1: Juego de la corrupción</figcaption>
</figure>


<figure>
<img src="/assets/elartedeconectarlospuntos/Artículo Ubeda et al - detallado.svg" alt="Artículo Ubeda et al" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Artículo Ubeda et al - detallado.svg" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.7" aria-label="Artículo Ubeda et al"></object>
</figure>
<cite>
Ubeda, F., & Dueñez-Guzman, E. (2010). Power and Corruption. Evolution, 1127-1139. <br>
DOI: <a href="https://doi.org/10.1111/j.1558-5646.2010.01194.x" target="_blank">https://doi.org/10.1111/j.1558-5646.2010.01194.x</a>
</cite>
<br><br>
<button><a href="assets/elartedeconectarlospuntos/Power and Corruption Úbeda & Duéñez.pdf" target="_blank">📄 Úbeda & Duéñez-Guzman, 2010 </a></button> 
<br>


<h4 id="enfoque-mixto">Enfoque mixto: teoría de redes y juegos</h4>

<p>Se uso una dinámica de actualización de estrategias en una red social. En cada paso, un individuo elige a uno de sus vecinos al azar y copia su estrategia si esta le ofrece un mayor beneficio. Este proceso se repite varias veces, permitiendo que las estrategias se propaguen por la red y observando cómo evoluciona el sistema a lo largo del tiempo.</p>

<figure>
<img src="/assets/elartedeconectarlospuntos/Algoritmo de Scata et al.svg" alt="Algoritmo de Scàta et al" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Algoritmo de Scata et al.svg" style="width: 90%; height: auto; display: block; margin: 0 auto;" aria-label="Algoritmo de Scàta et al"></object>
<figcaption>Figura 1: Algoritmo de Scàta et al</figcaption>
</figure>

 <p>El algoritmo que diseñaran los investigadores fue el siguiente:</p>
 
 {% include diagramaDeFlujo.html %}
 <div class="content-es">
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

<figure>
<img src="/assets/elartedeconectarlospuntos/Artículo Scatà et al - detallado.svg" alt="Artículo Scatà et al" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Artículo Scatà et al - detallado.svg" style="width: 30%; height: auto; display: block; margin: 0 auto; opacity: 0.7" aria-label="Artículo Scatà et al"></object>
</figure>

<cite>
Scatà, M., Di Stefano, A., La Corte, A., Liò, P., Catania, E., Guardo, E., & Pagano, S. (2016). Combining evolutionary game theory and network theory to analyze human cooperation patterns. Chaos, Solitons and Fractals, 17–24. <br>
DOI: <a href="https://doi.org/10.1016/j.chaos.2016.04.018" target="_blank">https://doi.org/10.1016/j.chaos.2016.04.018</a>
</cite>
<br><br>
<button><a href="assets/elartedeconectarlospuntos/Combining evolutionary game theory and network theory - Scata et al.pdf" target="_blank">📄 Scatà et al., 2016 </a></button> 
<br>

<h4 id="nuevo-modelo">Desarrollo de un nuevo modelo</h4>


<p>Al fusionar ambos mundos (Scatá et al., 2016), se desarrolló un modelo computacional para simular el comportamiento de tres sociedades distintas:</p>

<br>
<figure>
<img src="/assets/elartedeconectarlospuntos/Índice de prosperidad de Legatum.svg" alt="Índice de prosperidad de Legatum" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Índice de prosperidad de Legatum.svg" style="width: 100%; height: auto; display: block; margin: 0 auto;" aria-label="Índice de prosperidad de Legatum"></object>
<figcaption>Figura 1: Índice de prosperidad de Legatum</figcaption>
</figure>
<br>

<h4>Dinamarca</h4>
<p><img src="/assets/elartedeconectarlospuntos/Bandera%20Dinamarca.svg" alt="Dinamarca" style="width: 10%; height: auto; display: block; margin: 0 auto; opacity: 0.8;"> <br>
Alta confianza social y transparencia. <br>

<figure>
<img src="/assets/elartedeconectarlospuntos/Matriz de pagos de Dinamarca.svg" alt="Matriz de pagos de Dinamarca" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Matriz de pagos de Dinamarca.svg" style="width: 50%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Matriz de pagos de Dinamarca"></object>
<figcaption>Figura 1: Matriz de pagos de Dinamarca</figcaption>
</figure>

<h4>Singapur</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20Singapur.svg" alt="Singapur" style="width: 10%; height: auto; display: block; margin: 0 auto; opacity: 0.8;"> <br>
Leyes estrictas y castigos severos. <br>
<figure>
<img src="/assets/elartedeconectarlospuntos/Matriz de pagos de Singapur.svg" alt="Matriz de pagos de Singapur" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Matriz de pagos de Singapur.svg" style="width: 50%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Matriz de pagos de Singapur"></object>
<figcaption>Figura 1: Matriz de pagos de Singapur</figcaption>
</figure>

<h4>México</h4>
<img src="/assets/elartedeconectarlospuntos/Bandera%20M%C3%A9xico.svg" alt="México" style="width: 10%; height: auto; display: block; margin: 0 auto; opacity: 0.8;"> <br>
Equilibrio inestable, impunidad y vulnerabilidad sistémica. <br>
<figure>
<img src="/assets/elartedeconectarlospuntos/Matriz de pagos de México.svg" alt="Matriz de pagos de México" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Matriz de pagos de México.svg" style="width: 50%; height: auto; display: block; margin: 0 auto; opacity: 0.8;" aria-label="Matriz de pagos de México"></object>
<figcaption>Figura 1: Matriz de pagos de México</figcaption>
</figure>


<figure>
<img src="/assets/elartedeconectarlospuntos/Red modelo para la tesis.svg" alt="Red modelo para la tesis" style="display: none;">
<object type="image/svg+xml" data="/assets/elartedeconectarlospuntos/Red modelo para la tesis.svg" style="width: 50%; height: auto; display: block; margin: 0 auto;opacity: 0.8;" aria-label="Red modelo para la tesis"></object>
<figcaption>Figura 1: Red modelo para la tesis</figcaption>
</figure>

<h3 id="como-atacamos-la-red">El descubrimiento contraintuitivo: ¿Cómo atacamos la red?</h3>

<p>Uno de los hallazgos más reveladores de la simulación tiene que ver con cómo desmantelar estas redes. La lógica tradicional sugiere que debemos buscar y arrestar a las cabezas de la red (los nodos centrales). Sin embargo, nuestro modelo demostró que <b>un ataque centralizado tiende a fallar</b>. Al eliminar un nodo central, los nodos de jerarquía media reorganizan rápidamente sus conexiones y la red sobrevive.</p>

<p>¿La solución matemática? <b>Una disrupción aleatoria</b>. </p>

<p>La eliminación aleatoria de nodos degrada rápidamente la conectividad global de la red, fracturándola en pequeñas comunidades aisladas. En la vida real, esto se traduce en políticas como la rotación obligatoria y aleatoria de personal en puestos de alto riesgo (aduanas, compras públicas, licencias). Al rotar al personal, se impide la formación de lazos de confianza criminal a largo plazo.</p>


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