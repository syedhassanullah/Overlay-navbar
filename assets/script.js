const menuicon = document.querySelector(".menu-icon")
const nav = document.querySelector(".navbar")



menuicon.addEventListener("click" ,()=>{
    menuicon.classList.toggle("active-menuicon");
    nav.classList.toggle("active-nav");
})

