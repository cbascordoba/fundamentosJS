

var sacha = {
    nombre: 'Sacha',
    apellido: 'Sanchez',
    altura: 1.72,
    cantidadLibros: 78
}
var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.81,
    cantidadLibros: 132
}
var isa = {
    nombre: 'Isabella ',
    apellido: 'Córdoba',
    altura: 1.68,
    cantidadLibros: 90
}

const esAlta = persona => persona.altura > 1.8


var personas = [sacha, alan, isa]

var personasAltas = personas.filter(esAlta)

// vamos a desglozar y crear un nuevo objeto para no modificar el inicial. 
const pasarAlturaACms = persona => ({
  
        ...persona,
        altura: persona.altura* 100
    
})

var personasCms = personas.map(pasarAlturaACms)

/////////////////////////////////////////////////////////////////////////////
//una forma de sumar todos los libros de cada persona seria la siguiente:
// var acum = 0

// for(var i=0; i<personas.length;i++){
//     acum = acum + personas[i].cantidadLibros
// }
// console.log("En total son"+ acum)

/////////////////////////////////////////////////////////////////////////////

//la segunda forma es la siguiente 

const reducer = (acum, {cantidadLibros})  => acum + cantidadLibros

//la funcion reduce tiene dos parametros la FUNCION y el valor inicial
var totalDeLibros = personas.reduce(reducer, 0)
console.log(totalDeLibros)

