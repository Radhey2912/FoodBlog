const hamburger=document.querySelector('.hamburger');
const navmenu=document.querySelector('.navmenu');
let logo=document.querySelector('.logo')


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('change');
    navmenu.classList.toggle('navchange');
    logo.classList.toggle('logochange')
})