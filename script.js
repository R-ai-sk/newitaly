/*--const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const btnPop = document.querySelector('.icon-close');

const iconClose = document.querySelector('.btn');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});


loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});


btnPop.addEventListener('click',()=>{
    wrapper.classList.toggle('active-pop');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.toggle('active-pop');
});

---*/


/********88888888888888888 */
const menu = document.querySelector('.nav-menu');
const openMenu = document.querySelector('#open-menu-btn');
const closeMenu = document.querySelector('#close-menu-btn');


openMenu.addEventListener('click',()=>{
    menu.style.display="flex";
    closeMenu.style.display="inline-block";
    openMenu.style.display="none";
    
});



const navClose = () =>{
    menu.style.display="none";
    openMenu.style.display="inline-block";
    closeMenu.style.display="none";

}

closeMenu.addEventListener('click',navClose)






window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})





const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');

     const icon = faq.querySelector('.faq-icon i');
      if(icon.className === 'fa-solid fa-plus'){
        icon.className = "fa-solid fa-minus";
      }else{

        icon.className = "fa-solid fa-plus";

      }

    })


})


