class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.container = document.querySelector('#global-container');
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    this.EventType = this._getEventType()
    this._addEvent();
  }

  _getEventType(){
      return window.ontouchstart ? 'touchstart' : 'click';
  }

  _toggle() {
      this.DOM.container.classList.toggle('menu-open');
  }

  _addEvent(){
      this.DOM.btn.addEventListener(this.EventType, this._toggle.bind(this));
  }
}

new MobileMenu();