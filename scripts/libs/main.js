document.addEventListener("DOMContentLoaded", function () {
    const _contentApper = function (el, isIntersecting) {
        if (isIntersecting) {
            el.classList.add("inview");
        } 
    }
    const so = new ScrollObserver(".appear",_contentApper)
    
    
    
    const header = document.querySelector('.header');
    const _headerApper = function (el, isIntersecting) {
        if (isIntersecting) {
            header.classList.remove("triggerd");
        }else {
            header.classList.add("triggerd");
        }
    }
    const so2 = new ScrollObserver(".hero",_headerApper,{once:false})
    
    const side = document.querySelector('.side');
    const _sideApper = function (el, isIntersecting) {
        if (isIntersecting) {
            side.classList.remove("triggerd");
        }else {
            side.classList.add("triggerd");
        }
    }
    const so3 = new ScrollObserver(".hero",_sideApper,{once:false})

    const menu = document.querySelector('.mobile-menu__btn');
    const _menucontainerApper = function (el, isIntersecting) {
        if (isIntersecting) {
            menu.classList.remove("triggerd");
        }else {
            menu.classList.add("triggerd");
        }
    }
    const so4 = new ScrollObserver(".hero",_menucontainerApper,{once:false})
});
