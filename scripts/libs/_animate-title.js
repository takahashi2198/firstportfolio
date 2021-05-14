document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation(".animate-title");
    const ta2 = new TextAnimation(".animate-title-hidden");
    ta2.animate();
    setTimeout(()=>{
        ta.animate();
    }, 1500)
});

class TextAnimation {
    constructor(el) {
        this.DOM = {};
        if(el instanceof HTMLElement){
            this.DOM.el = el;
        } else {
            this.DOM.el = document.querySelector(el);
        }
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }

    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, "&nbsp;");
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }

    animate(){
        this.DOM.el.classList.toggle('inview');
    }
}

