import Number from '../components/number.js';
import Button from '../components/button.js';
import Loader from '../components/loader.js';
import Ticker from '../utils/ticker.js';
import ticker from '../utils/ticker.js';
class ProgressBar extends HTMLElement {

    fragmentInit(){
      this.tickerInit();
      this.fragment = new DocumentFragment();
      this.startBtn = document.createElement('n-btn');
      this.pauseBtn = document.createElement('n-btn');
      this.progNum = document.createElement('progress-num');
      
      this.startBtn.name = 'Start';
      this.pauseBtn.name = 'Pause';
      this.startBtn.meth = this.tickerInit;
      this.pauseBtn.meth = this.tickerInit.bind(this, true);

      this.fragment.appendChild(this.progNum);
      this.fragment.appendChild(this.startBtn);
      this.fragment.appendChild(this.pauseBtn);
    }
    connectedCallback() {
        this.fragmentInit();
        this.appendChild(this.fragment);
    }
    disconnectedCallback() {
    }
    static get observedAttributes() {
      return ['disabled', 'open'];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
      // console.log(`${attrName}, o->${oldVal}, n->${newVal}`)
    }
  
    evaluater(xval){
        this.progNum.state = xval;
        if(xval == this.finalVal)
            {
                this.finished = true;
                setTimeout(()=>this.progNum.state = 'Complete!',500)
            }
    }
    tickerInit(){
        this.tickerInit = Ticker(100,this.finalVal, this.evaluater.bind(this))
    }
    constructor() {
      super();
      this.finalVal = 100;
      this.finished = false;
    }
  
    toggleDrawer() {
    }
  }
  
  // customElements.define('app-drawer', ProgressBar);
  export default ProgressBar;