window.onscroll = function () {
    myFunction()
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("fixed");
        header.classList.add("top-0");
    } else {
        //header.classList.remove("fixed top-0");
        header.classList.remove("fixed");
        header.classList.remove("top-0");
    }
}

function toggleMenu() {
    var mobile_menu_container = document.getElementById("mobile-menu-container");

    if (mobile_menu_container.classList.contains('hidden')) {
        mobile_menu_container.classList.remove('hidden');
        animateCSS('#mobile-menu-container', 'fadeInRight');
        mobile_menu_container.onanimationend = () => {
            mobile_menu_container.classList.add('block');
        };
    } else {
        animateCSS('#mobile-menu-container', 'fadeOutRight');
        mobile_menu_container.onanimationend = () => {
            mobile_menu_container.classList.add('hidden');
        };
    }
}

const animateCSS = (element, animation, prefix = 'animate__') =>
// We create a Promise and return it
new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});
