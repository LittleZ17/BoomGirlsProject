
const crash = document.querySelector('#crash');
const bombo = document.querySelector('#bombo');
const tom1 = document.querySelector('#tom1');
const tom2 = document.querySelector('#tom2');
const tom3 = document.querySelector('#tom3');
const tom4 = document.querySelector('#tom4');
const hit = document.querySelector('#hit');
const redoblante = document.querySelector('#redoblante');


function sound(nameSound){
    const dom = new Audio(nameSound);
    dom.play();
}
crash.addEventListener('click', () => {
        sound("./sounds/crash.wav");
});
bombo.addEventListener('click', () => {
    sound("./sounds/bombo (1).wav");
});
tom1.addEventListener('click', () => {
    sound("./sounds/tom1.wav");
});
tom2.addEventListener('click', () => {
    sound("./sounds/tom2.wav");
});
tom3.addEventListener('click', () => {
    sound("./sounds/tom3.wav");
});
tom4.addEventListener('click', () => {
    sound("./sounds/tom4.wav");
});
hit.addEventListener('click', () => {
    sound("./sounds/hit-hat.wav");
});
redoblante.addEventListener('click', () => {
    sound("./sounds/redoblante.wav");
});