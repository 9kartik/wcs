import Number from '../components/number.js';
import Button from '../components/button.js';
import Loader from '../components/loader.js';
import Ticker from '../utils/ticker.js';

class ProgressBar extends HTMLElement {

    attachStyles(){
      this.styledDom = this.attachShadow({mode: 'open'});
      this.styledDom.innerHTML = `
        <style>
          *{
            font-family: monospace;
          }
          .container{
            display : inline-flex;
            flex-direction : column;
            border-radius : 0.5em;
            box-shadow : 0.2em 0.3em 0.5em grey;
          }
          .relative{
            height: ${this.size}px;
            position: relative;
            display: block;
            width: ${this.size}px;
          }
          .centered{
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .absolute{
            position:absolute;
          }
          .btn-container{
            text-align : center;
          }
          .rotater>canvas {
            animation-name: rot;
            animation-duration: 4000ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
          }
          canvas { 
            filter : blur(3px);
          }
          @keyframes rot {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        </style>
      `
    }
    fragmentInit(){
        this.tickInit();
        this.fragment = new DocumentFragment();
        this.containerBox = document.createElement('span');
        this.containerBox.className = 'container';
        this.btnContainer = document.createElement('span');
        this.btnContainer.className = 'btn-container';
        this.progBox = document.createElement('span');
        this.progBox.className = 'relative';
        this.progNum = document.createElement('progress-num');
        this.progNum.className = 'absolute centered'
        this.progLdr = document.createElement('progress-loader');
        this.progLdr.className='absolute';
        this.progLdr.size = this.size;
        this.progLdr.finalVal = this.targetVal;
        this.progBox.append(this.progLdr,this.progNum);

        this.startBtn = document.createElement('n-btn');
        this.pauseBtn = document.createElement('n-btn');
        this.startBtn.name = 'Start';
        this.pauseBtn.name = 'Pause';
        this.pauseBtn.setAttribute('disable','')
        this.startBtn.meth = this.tickerInit;
        this.startBtn.meth = this.startAnimation.bind(this);
        this.startBtn.meth = this.startBtn.disable;
        this.startBtn.meth = this.pauseBtn.enable.bind(this.pauseBtn);
        this.pauseBtn.meth = this.tickerInit.bind(this, true);
        this.pauseBtn.meth = this.startBtn.enable.bind(this.startBtn);
        this.pauseBtn.meth = this.pauseBtn.disable;
        
        this.btnContainer.append(this.startBtn,this.pauseBtn)
        
        this.containerBox.append(this.progBox,this.btnContainer)
        this.fragment.appendChild(this.containerBox);
    }
    connectedCallback() {
        this.fragmentInit();
        this.attachStyles();
        this.styledDom.append(this.fragment);
    }
    disconnectedCallback() {
    }
    static get observedAttributes() {
      return ['disabled', 'open'];
    }
  
    evaluater(xval){
        this.progNum.state = xval;
        this.progLdr.state = xval;
        if(xval == this.targetVal){
            this.finished = true;
            setTimeout(()=>this.progNum.state = 'Done!',500)
            this.stopAnimation();
            this.pauseBtn.disable();
            this.startBtn.disable();
        }
    }
    startAnimation(){
      this.progLdr.className = 'absolute rotater centered';
    }
    stopAnimation(){
      this.progLdr.className = 'absolute centered';
    }
    tickInit(){
        this.tickerInit = Ticker(this.targetVal, 100, this.evaluater.bind(this))
    }
    constructor() {
      super();
      this.targetVal = this.getAttribute('target')||100;
      this.size = this.getAttribute('size')||200;
      this.finished = false;
    }
  
    toggleDrawer() {
    }
  }
  
  // customElements.define('app-drawer', ProgressBar);
  export default ProgressBar;