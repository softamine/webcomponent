class ConsoleOctroi extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
    this.addEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
          border-radius: 8px;
          padding: 16px;
          margin: 16px 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .console-container {
          background-color: #282c34;
          color: #abb2bf;
          border-radius: 4px;
          padding: 12px;
          margin-bottom: 16px;
          font-family: 'Courier New', monospace;
          height: 150px;
          overflow-y: auto;
        }
        
        .console-line {
          margin: 4px 0;
          line-height: 1.4;
        }
        
        .prompt {
          color: #98c379;
        }
        
        button {
          background-color: #61afef;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 8px 16px;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        button:hover {
          background-color: #528bff;
        }
        
        .button-container {
          display: flex;
          gap: 8px;
        }
      </style>
      
      <div class="console-container" id="console-output">
        <div class="console-line"><span class="prompt">></span> Console Octroi initialized</div>
      </div>
      
      <div class="button-container">
        <button id="execute-button">Execute Command</button>
        <button id="clear-button">Clear Console</button>
      </div>
    `;
  }

  addEventListeners() {
    const executeButton = this.shadowRoot.getElementById('execute-button');
    const clearButton = this.shadowRoot.getElementById('clear-button');
    const consoleOutput = this.shadowRoot.getElementById('console-output');

    executeButton.addEventListener('click', () => {
      const timestamp = new Date().toLocaleTimeString();
      const outputLine = document.createElement('div');
      outputLine.className = 'console-line';
      outputLine.innerHTML = `<span class="prompt">></span> Command executed at ${timestamp}`;
      consoleOutput.appendChild(outputLine);

      const event = new CustomEvent('console-output', {
        bubbles: true,
        composed: true, 
        detail: {
          message: `il est ${timestamp}`,
          timestamp: timestamp
        }
      });
      
      this.dispatchEvent(event);
    });

    clearButton.addEventListener('click', () => {
      consoleOutput.innerHTML = '<div class="console-line"><span class="prompt">></span> Console cleared</div>';
    });
  }
}
customElements.define('console-wc', ConsoleOctroi);
