class Number extends HTMLElement {

    get state(){
        return this.numVal;
    }
    set state(newVal){
        this.numVal = newVal;
        this.setAttribute('num', newVal)
    }
    connectedCallback() {
      this.innerHTML = this.numVal
      this.setAttribute('num', this.numVal)
    }
    disconnectedCallback() {
      
    }
    static get observedAttributes() {
      return ['num'];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
      // console.log(`${attrName}, o->${oldVal}, n->${newVal}`)
      this.innerHTML = newVal;
    }
  
    constructor() {
      super();
      this.numVal = 0;
    }
  
    toggleDrawer() {
    }
  }
  
  // customElements.define('app-drawer', Number);
  customElements.define('progress-num', Number);
  
  export default Number;