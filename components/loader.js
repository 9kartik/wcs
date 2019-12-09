import Number from './number.js';

class Loader extends Number {
    set finalVal(val){
        this.target = val
    }
    connectedCallback() {
        this.append(this.cnv);
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        let arcAngle = 2* Math.PI * newVal / this.target;
        this.context.beginPath();
        this.context.arc(this.cnv.width/2, this.cnv.height/2, this.cnv.width/3, -arcAngle/2, arcAngle/2);
        this.context.lineWidth = 3;
        this.context.lineCap = 'round';
        this.context.stroke();
    }
    
    set size(val){
        this.cnv.width = val*2/3;
        this.cnv.height = val*2/3;
    }

    constructor() {
        super();
        this.val = 0;
        this.cnv = document.createElement('canvas')
        this.context = this.cnv.getContext('2d');
    }
}

customElements.define('progress-loader', Loader);

export default Loader;