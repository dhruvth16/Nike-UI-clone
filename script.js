let page2 = document.querySelector('.page2');
let menu = document.querySelector('.menu-2');
let closeBtn = document.querySelector('.close');
let acc = document.querySelector('.acc');
let items = document.querySelector('.items');
let img = document.querySelector('.top-lvl-img');
let searchbar = document.querySelector('input');
let cancel = document.querySelector('.cancel');
let hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
    // page2.style.height = "400px";
    menu.style.display = "flex";
    acc.style.display = "none";
    closeBtn.style.display = "block"
})

closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    acc.style.display = "flex";
    closeBtn.style.display = "none"
})

menu.addEventListener("mouseover", () => {
    page2.style.height = "400px";
    items.style.display = "flex";
    items.style.opacity = "1";
    img.style.filter = "blur(5px)";
})

menu.addEventListener("mouseout", () => {
    page2.style.height = "60px";
    items.style.display = "none"
    items.style.opacity = ".6";
    img.style.filter = "blur(0px)";
});

searchbar.addEventListener('keypress', ()=>{
    page2.style.height = "200px";
    img.style.filter = "blur(5px)";
    cancel.style.display = "flex";
    document.querySelector('.header-1').style.visibility = "hidden";
    document.querySelector('.header-2').style.width = "0px";
    document.querySelector('.menu-2').style.visibility = "hidden";
    // document.querySelector('.nike').style.fill = "white";
    document.querySelector('.nike').style.marginTop = "-70px";
    document.querySelector('.icon1').style.display = "none";
    document.querySelector('.icon2').style.display = "none";
    document.querySelector('.cart').style.marginTop = "-70px"
})

cancel.addEventListener('click', ()=> {
    page2.style.height = "50px";
    cancel.style.display = "none";
    searchbar.value = "";
    img.style.filter = "blur(0px)";
    document.querySelector('.header-1').style.visibility = "visible";
    document.querySelector('.header-2').style.width = "100%";
    document.querySelector('.menu-2').style.visibility = "visible";
    document.querySelector('.nike').style.marginTop = "0px";
    document.querySelector('.icon1').style.display = "flex";
    document.querySelector('.icon2').style.display = "flex";
    document.querySelector('.cart').style.marginTop = "0px";
})