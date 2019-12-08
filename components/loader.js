class Loader extends HTMLElement {

    get state(){
        return this.val;
    }
    set state(newVal){
        this.val = newVal;
    }
    connectedCallback() {
      this.innerHTML = 'sample'
    }
    disconnectedCallback() {
      
    }
    static get observedAttributes() {
      return ['disabled', 'open'];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
      // console.log(`${attrName}, o->${oldVal}, n->${newVal}`)
    }
  
    constructor() {
      super();
      this.val = 0;
      // Setup a click listener on <app-drawer> itself.
      
    }
  
    toggleDrawer() {
    }
  }
  
  // customElements.define('app-drawer', Loader);
  
  export default Loader;