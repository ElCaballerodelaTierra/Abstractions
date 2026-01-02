class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
                <a href="index.html">Inicio</a>
                <a href="blog.html">Blog</a>
            </nav>
        </header>`;
    }
}
customElements.define('main-header', MyHeader);