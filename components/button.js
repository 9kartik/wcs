class Button extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `<button>${this.btnname}</button>`;
    }
    set name(name){
        this.btnname = name;
    }
    disable(){
        this.disabled = true;
        this.setAttribute('disabled','');
    }
    enable(){
        this.disabled = false;
        this.removeAttribute('disabled');
    }
    set meth(methName){
        this.addEventListener('click', function(){
                methName();
                this.disable()}
            );
    }
    disconnectedCallback() {
      
    }
    constructor() {
      super();
      this.disabled = false;
      // Setup a click listener on <app-drawer> itself.
    //   this.addEventListener('click', this.)
    }
  }
  
  // customElements.define('app-drawer', Button);
  customElements.define('n-btn', Button);
  export default Button;