class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<p>Hello from MyComponent!</p>`;
  }
}

customElements.define('my-component', MyComponent);
