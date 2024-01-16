//vamos a declarar los scripts del header


// esta variable es el más!
var Mas = document.querySelector('.predesplegable');
var dropdown = document.querySelector('.dropdown');
var imagenmas = document.querySelector('.imgmas');
var bodyResult =document.querySelector('.containerone');
var bodyResultt =document.querySelector('.containertwo');

Mas.addEventListener("click",()=>{
console.log("esto va?")
dropdown.classList.toggle("displaynone")
imagenmas.classList.toggle("rotate")
});
bodyResult.addEventListener("click",()=>{
    dropdown.classList.add("displaynone")
    imagenmas.classList.toggle("rotate")
});
bodyResultt.addEventListener("click",()=>{
    dropdown.classList.add("displaynone")
    imagenmas.classList.toggle("rotate")
});
