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
    set symbol(symbol){
      this.symb = symbol;
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
      this.innerHTML = newVal + ' ' + ((newVal!='Done!')?this.symb:'');
    }
  
    constructor() {
      super();
      this.numVal = 0;
      this.defaultText = 'Click Start';
      this.finishedText = 'Complete';
    }
  
    toggleDrawer() {
    }
  }
  
  // customElements.define('app-drawer', Number);
  customElements.define('progress-num', Number);
  
  export default Number;