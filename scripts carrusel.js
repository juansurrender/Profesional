//voy a declarar las variables de los 5 contenedores
var firstCarrusel = document.querySelector('.firstcarrusel');
var secondCarrusel = document.querySelector('.secondcarrusel');
var thirdCarrusel = document.querySelector('.thirdcarrusel');
var fourCarrusel = document.querySelector('.fourcarrusel');
var fiveCarrusel = document.querySelector('.fivecarrusel');

//voy a declarar las variables de los 5 puntos que haran de botones

var puntoOne = document.querySelector('.puntoone');
var puntoTwo = document.querySelector('.puntotwo');
var puntoThree = document.querySelector('.puntothree');
var puntoFour = document.querySelector('.puntofour');
var puntoFive = document.querySelector('.puntofive');

puntoOne.addEventListener("click",()=>{
    console.log("he clickado?")
    firstCarrusel.classList.remove("tnone");//remove elimina una clase si está añadida y ya esta
    secondCarrusel.classList.add('tnone')
    thirdCarrusel.classList.add('tnone');
    fourCarrusel.classList.add('tnone');
    fiveCarrusel.classList.add('tnone');
    //ahora hare el efecto de que el punto se quede activo
    puntoOne.classList.add("activo");
    puntoTwo.classList.remove("activo");
    puntoThree.classList.remove("activo");
    puntoFour.classList.remove("activo");
    puntoFive.classList.remove("activo");
});

puntoTwo.addEventListener("click",()=>{
    console.log("he clickado?")
    secondCarrusel.classList.remove("tnone");//remove elimina una clase si está añadida y ya esta
    firstCarrusel.classList.add('tnone');
    thirdCarrusel.classList.add('tnone');
    fourCarrusel.classList.add('tnone');
    fiveCarrusel.classList.add('tnone');
     //ahora hare el efecto de que el punto se quede activo
     puntoOne.classList.remove("activo");
     puntoTwo.classList.add("activo");
     puntoThree.classList.remove("activo");
     puntoFour.classList.remove("activo");
     puntoFive.classList.remove("activo");
    
});

puntoThree.addEventListener("click",()=>{
    console.log("he clickado?")
    secondCarrusel.classList.add("tnone");
    firstCarrusel.classList.add('tnone');
    thirdCarrusel.classList.remove("tnone");//remove elimina una clase si está añadida y ya esta
    fourCarrusel.classList.add('tnone');
    fiveCarrusel.classList.add('tnone');
     //ahora hare el efecto de que el punto se quede activo
     puntoOne.classList.remove("activo");
     puntoTwo.classList.remove("activo");
     puntoThree.classList.add("activo");
     puntoFour.classList.remove("activo");
     puntoFive.classList.remove("activo");
});

puntoFour.addEventListener("click",()=>{
    console.log("he clickado?")
    secondCarrusel.classList.add("tnone");
    firstCarrusel.classList.add('tnone');
    thirdCarrusel.classList.add('tnone');
    fourCarrusel.classList.remove("tnone");//remove elimina una clase si está añadida y ya esta
    fiveCarrusel.classList.add('tnone');
     //ahora hare el efecto de que el punto se quede activo
     puntoOne.classList.remove("activo");
     puntoTwo.classList.remove("activo");
     puntoThree.classList.remove("activo");
     puntoFour.classList.add("activo");
     puntoFive.classList.remove("activo");
});

puntoFive.addEventListener("click",()=>{
    console.log("he clickado?")
    secondCarrusel.classList.add("tnone");
    firstCarrusel.classList.add('tnone');
    thirdCarrusel.classList.add('tnone');
    fourCarrusel.classList.add('tnone');
    fiveCarrusel.classList.remove("tnone");//remove elimina una clase si está añadida y ya esta
     //ahora hare el efecto de que el punto se quede activo
     puntoOne.classList.remove("activo");
     puntoTwo.classList.remove("activo");
     puntoThree.classList.remove("activo");
     puntoFour.classList.remove("activo");
     puntoFive.classList.add("activo");
});





