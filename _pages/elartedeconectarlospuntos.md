---
published: true

layout: default
mediaPortada: true
titulo-en-portada: false

imagenPortada: /assets/redes/Red.jpg
# imagenPortada: /assets/plantilla/Dos-barcos.jpg
descripcionImagenPortada-es: "Ilustración de una red de conexiones entre personas"
descripcionImagenPortada-en: "Illustration of a network of connections between people"

titulo-es: El arte de conectar los puntos
subtitulo-es: 
frase-es: |
    "Bienvenidos al arte de conectar los puntos"
# frase-autor-es: "Steve Jobs"
# frase-contexto-es: "Discurso de graduación de la Universidad de Stanford"
content-es: |

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.

    Se presenta la tesis de redes

titulo-en: The art of connecting the dots
subtitulo-en: |
frase-en: |
   "Welcome to the art of connecting the dots"
# frase-autor-en: "Steve Jobs"
# frase-contexto-en: "Stanford University graduation speech"
content-en: |
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
---
<body>

 {% include diagramaDeFlujo.html %}

 <div class="content-es">
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
    </figure>
    <figcaption>Diagrama de flujo que representa las partes más importantes del algoritmo propuesto por Martins et al. </figcaption>
 </div>
 <div class="content-en">
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
    </figure>
    <figcaption>Flowchart that represents the most important parts of the algorithm proposed by Martins et al. </figcaption>
 </div>
</body>