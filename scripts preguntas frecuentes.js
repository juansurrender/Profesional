
//voy a hacer el el primer desplegable//

//esta es la variable  donde vamos a clickar
var firstOption = document.querySelector('.firstHdesplegable');
//esta es la variable que aparecera cuando clickemos//
var firstResult = document.querySelector('.firstdesplegable');
//esta es la variable que hara que cuando clickemos en el body se quite lo demas//
var bodyResult =document.querySelector('.containerfour');

//la funcion de toggle es que si un elemento tiene una clase la saca y viceversa "ak. BOOLEANO"//

firstOption.addEventListener("click",()=>{
    console.log("ehto vah?")
    firstResult.classList.toggle("d-none");
    secondResult.classList.add("d-none");
    thirdResult.classList.add("d-none");
    fourResult.classList.add("d-none");
    sixResult.classList.add("d-none");
    fiveResult.classList.add("d-none");
    sevenResult.classList.add("d-none");
});


//esta es la variable  donde vamos a clickar
var secondtOption = document.querySelector('.secondHdesplegable');
//esta es la variable que aparecera cuando clickemos//
var secondResult = document.querySelector('.seconddesplegable');

secondtOption.addEventListener("click",()=>{
    console.log("ehto vah?")
    firstResult.classList.add("d-none");
    secondResult.classList.toggle("d-none");
    thirdResult.classList.add("d-none");
    fourResult.classList.add("d-none");
    sixResult.classList.add("d-none");
    fiveResult.classList.add("d-none");
    sevenResult.classList.add("d-none");
});





//esta es la variable  donde vamos a clickar
var thirdOption = document.querySelector('.thirdHdesplegable');
//esta es la variable que aparecera cuando clickemos//
var thirdResult = document.querySelector('.thirddesplegable');

thirdOption.addEventListener("click",()=>{
    console.log("ehto vah?")
    firstResult.classList.add("d-none");
    secondResult.classList.add("d-none");
    thirdResult.classList.toggle("d-none");
    fourResult.classList.add("d-none");
    sixResult.classList.add("d-none");
    fiveResult.classList.add("d-none");
    sevenResult.classList.add("d-none");
    
});




//esta es la variable  donde vamos a clickar
var fourOption = document.querySelector('.fourHdesplegable');
//esta es la variable que aparecera cuando clickemos//
var fourResult = document.querySelector('.fourdesplegable');

fourOption.addEventListener("click",()=>{
    console.log("ehto vah?")
    firstResult.classList.add("d-none");
    secondResult.classList.add("d-none");
    thirdResult.classList.add("d-none");
    fourResult.classList.toggle("d-none");
    sixResult.classList.add("d-none");
    fiveResult.classList.add("d-none");
    sevenResult.classList.add("d-none");
});




//esta es la variable  donde vamos a clickar
var sixOption = document.querySelector('.fiveHdesplegable');
//esta es la variable que aparecera cuando clickemos//
var sixResult = document.querySelector('.fivedesplegable');

sixOption.addEventListener("click",()=>{
    console.log("ehto vah?")
    
    firstResult.classList.add("d-none");
    secondResult.classList.add("d-none");
    thirdResult.classList.add("d-none");
    fourResult.classList.add("d-none");
    sixResult.classList.toggle("d-none");
    fiveResult.classList.add("d-none");
    sevenResult.classList.add("d-none");
});



//esta es la variable  donde vamos a clickar
var fiveOption = document.querySelector('.sixHdesplegable');
//esta es la variable que aparecera cuando clickemos//
var fiveResult = document.querySelector('.sixdesplegable');

fiveOption.addEventListener("click",()=>{
    console.log("ehto vah?")
   
    firstResult.classList.add("d-none");
    secondResult.classList.add("d-none");
    thirdResult.classList.add("d-none");
    fourResult.classList.add("d-none");
    sixResult.classList.add("d-none");
    fiveResult.classList.toggle("d-none");
    sevenResult.classList.add("d-none");
});




//esta es la variable  donde vamos a clickar
var sevenOption = document.querySelector('.sevenHdesplegable');
//esta es la variable que aparecera cuando clickemos//
var sevenResult = document.querySelector('.sevendesplegable');

sevenOption.addEventListener("click",()=>{
    console.log("ehto vah?")
    firstResult.classList.add("d-none");
    secondResult.classList.add("d-none");
    thirdResult.classList.add("d-none");
    fourResult.classList.add("d-none");
    sixResult.classList.add("d-none");
    fiveResult.classList.add("d-none");
    sevenResult.classList.toggle("d-none");
});


