---
layout: default
titulo-es: Todas las páginas
titulo-en: All Pages
permalink: /canvas
---

<style>
    /* Se ocultan todos los elementos de la plantilla por defecto */
    h1,
    .autor,
    footer,
    .boton-descargar-pdf {
        display: none !important;
    }

</style>

<section style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; padding: 20px;">

    {% assign all_pages = site.documents | where: "collection", "pages" | where: "published", true  | where: "canvas", true %}
    
    <!-- Agrupar páginas por categoría -->
    {% assign grouped_pages = all_pages | group_by: "categories" %}

    <!-- Mostrar grupos con categoría -->
    {% for group in grouped_pages %}

        {% if group.name != "" %}
                <h3 style="display: none;">{{ group.name }}</h3>

                {% for p in group.items %}
                        <div style="flex: 1 1 120px; max-width: 300px; display: flex; flex-direction: column; align-items: center; justify-content: start; text-align: center;">
                        <a href="{{ p.url }}" style="text-decoration: none; color: inherit;">
                            {% if p.imagenPortada %}
                                <img src="{{ p.imagenPortada | relative_url }}" alt="{{ p.titulo-es | default: p.title }}" style="width: 100%; aspect-ratio: 1 / 1; object-fit: cover; border-radius: 500px; margin-bottom: 10px;">
                            {% endif %}
                            <span class="content-es" style="display: block;">
                                {{ p.titulo-es | default: p.title }}
                            </span>
                            <span class="content-en" style="display: none;">
                                {{ p.titulo-en | default: p.title }}
                            </span>
                        </a>
                        </div>
                {% endfor %}

        {% endif %}

    {% endfor %}

</section>
