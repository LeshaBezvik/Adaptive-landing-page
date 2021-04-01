//Адаптивное меню
const menuIcon = document.querySelector('.menu-burger');
const menuHeader = document.querySelector('.header-menu');

if(menuIcon){    
    menuIcon.addEventListener('click', function (e){
        document.body.classList.toggle('lock'); //при открытом меню не скролится страничка
        menuIcon.classList.toggle('active');
        menuHeader.classList.toggle('active');
    });
    

};






//Слайдер
const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;

console.log(dots);

const activeSlide = n =>{
    //console.log(n);
    for (slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n =>{
    for (dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nextSlide = () =>{
    if(index == slides.length - 1){
        index = 0;
        activeSlide(index);
        activeDot(index);
    }
    else{
        index++;
        activeSlide(index);
        activeDot(index);
    }
}

const prevSlide = () =>{
    if(index == 0){
        index = slides.length - 1;
        activeSlide(index);
        activeDot(index);
    }
    else{
        index--;
        activeSlide(index);
        activeDot(index);
    }
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);