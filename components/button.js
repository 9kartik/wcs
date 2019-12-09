class Button extends HTMLElement {

    connectedCallback() {
        this.btn = document.createElement('button');
        this.btn.innerHTML = this.btnname;
        this.appendChild(this.btn);
        if(this.getAttribute('disable') !== null)
            this.disable();
    }
    set name(name){
        this.btnname = name;
    }
    changeName(name){
        this.btn.innerHTML = name;
    }
    disable(){
        this.disabled = true;
        this.btn.setAttribute('disabled','');
    }
    enable(){
        this.disabled = false;
        this.btn.removeAttribute('disabled');
    }
    set meth(methName){
        this.addEventListener('click', function(){
                methName.call(this)
            }
        );
    }

    constructor() {
      super();
      // Setup a click listener on <app-drawer> itself.
    //   this.addEventListener('click', this.)
    }
  }
  
  // customElements.define('app-drawer', Button);
  customElements.define('n-btn', Button);
  export default Button;