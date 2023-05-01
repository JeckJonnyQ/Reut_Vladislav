const slider = document.querySelector('.slider');
const sliderLine = document.querySelector('.slider_line');
const sliderImg = document.querySelector('.slider_image');

const btnEcuador = document.querySelector('.btn_ecuador');
const btnKe = document.querySelector('.btn_ke');
const btnCo = document.querySelector('.btn_co');
const btnCl = document.querySelector('.btn_cl');
const btnHoll = document.querySelector('.btn_holl');
const btnIsr = document.querySelector('.btn_isr');

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

btnEcuador.addEventListener('click', nextSlide);
btnKe.addEventListener('click', nextSlide);
btnCo.addEventListener('click', nextSlide);
btnCl.addEventListener('click', nextSlide);
btnHoll.addEventListener('click', nextSlide);
btnIsr.addEventListener('click', nextSlide);

btnEcuador.addEventListener('click', prevSlide);
btnKe.addEventListener('click', prevSlide);
btnCo.addEventListener('click', prevSlide);
btnCl.addEventListener('click', prevSlide);
btnHoll.addEventListener('click', prevSlide);
btnIsr.addEventListener('click', prevSlide);


function nextSlide() {
    sliderCount++;

    if (sliderCount >= sliderImg.length) {
        sliderCount = 0;
    }

    rollSlider();
}
function prevSlide() {
    sliderCount--;

    if (sliderCount < 0) {
        sliderCount = sliderImg.length -1;
    }

    rollSlider();
}
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

