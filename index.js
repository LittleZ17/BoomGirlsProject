// Al hacer clik en el HB activo una clase
const boton = document.querySelector('.boton');
const nav = document.querySelector('.nav');

function toggleMenu(){
    nav.classList.toggle('activo');
}

boton.addEventListener('click',() =>{
    toggleMenu();
})

// function sound(nameSound){
//     const dom = new Audio(nameSound);
//     dom.play();
// }

// -----.addEventListener('click', () => {
//     sound("crash.wav");
// });
