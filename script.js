const nav = document.getElementById('nav');

nav.addEventListener('click', (event) => {
    nav.querySelectorAll('a').forEach(element => element.classList.remove('active'));
    event.target.classList.add('active'); 
});

const wallpaper_v = document.getElementById('layer_v');
const wallpaper_h = document.getElementById('layer_h');

document.getElementById('square_v').addEventListener('click', () => {
    if(wallpaper_v.classList.contains('none')) {
        wallpaper_v.classList.remove('none');
    } else {
        wallpaper_v.classList.add('none');
    }
});
document.getElementById('square_h').addEventListener('click', () => {
    if(wallpaper_h.classList.contains('none')) {
        wallpaper_h.classList.remove('none');
    } else {
        wallpaper_h.classList.add('none');
    }
});

const slides = document.querySelectorAll('#slides .slide');
const sliderSection = document.getElementById('slider');
const chev_l = document.getElementById('chev_l');
const chev_r = document.getElementById('chev_r');

let activeSlide = 0;

chev_l.addEventListener('click', () => {
    activeSlide = (activeSlide + 1) % slides.length;
    if(slides[activeSlide].classList.contains('slide_1')) { 
        sliderSection.style.backgroundColor = '#648bf0';
        sliderSection.style.borderBottomColor = '#adc5db';
        slides[activeSlide].classList.remove('active_slide');
        slides[activeSlide - 1].classList.add('active_slide');
    } 
    else { 
        sliderSection.style.backgroundColor = '#f06c64';
        sliderSection.style.borderBottomColor = '#ea676b';
        slides[activeSlide].classList.remove('active_slide');
        slides[activeSlide + 1].classList.add('active_slide');
    }
})
chev_r.addEventListener('click', () => {
    activeSlide = (activeSlide + 1) % slides.length;
    if(slides[activeSlide].classList.contains('slide_1')) { 
        sliderSection.style.backgroundColor = '#648bf0';
        sliderSection.style.borderBottomColor = '#96c5f2';
        slides[activeSlide].classList.remove('active_slide');
        slides[activeSlide - 1].classList.add('active_slide');
    } 
    else { 
        sliderSection.style.backgroundColor = '#f06c64';
        sliderSection.style.borderBottomColor = '#ea676b';
        slides[activeSlide].classList.remove('active_slide');
        slides[activeSlide + 1].classList.add('active_slide');
    }
})

let portfolio_pics = document.getElementById('portfolio_pics');

let pics = [];
Array.from(document.getElementById('portfolio_pics').querySelectorAll('div')).forEach(element => pics.push(`${element.classList}`));

portfolio_pics.addEventListener('click', (event) => {
    portfolio_pics.querySelectorAll('div').forEach(element => element.classList.remove('border_portfolio'));
    event.target.classList.add('border_portfolio'); 
});

// iq over 100000000 sorry ))0)

portfolio_nav.addEventListener('click', (event) => {
    portfolio_nav.querySelectorAll('p').forEach(element => element.classList.remove('portfolio_active'));
    event.target.classList.add('portfolio_active'); 

    pics = pics.sort(function() {
        return Math.random() - 0.5 
    })

    portfolio_pics.querySelectorAll('div').forEach((elem,index) => elem.classList.remove(`${elem.classList.item(0)}`));
    portfolio_pics.querySelectorAll('div').forEach((elem,index) => elem.classList.add(`${pics[index]}`));
});


