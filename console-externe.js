class ConsoleWc extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 1rem;
          border: 2px solid #4caf50;
          border-radius: 8px;
          font-family: sans-serif;
          background-color: #f9f9f9;
        }
        h2 {
          color: #4caf50;
        }
      </style>
      <h2>Console Web Component</h2>
      <p>This is the <code>&lt;console-wc&gt;</code> web component!</p>
    `;

    this.shadowRoot.appendChild(wrapper);
  }
}

customElements.define('console-wc', ConsoleWc);
