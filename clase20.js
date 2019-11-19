//vamos a crear una collection y vamos a iterar sobre cada uno de los elementos. 

var sacha = {
    nombre: 'Sacha',
    apellido: 'Sanchez',
    altura: 1.72
}
var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.81
}
var isa = {
    nombre: 'Isabella ',
    apellido: 'Córdoba',
    altura: 1.68
}

const esAlta = persona => persona.altura > 1.8


var personas = [sacha, alan, isa]

var personasAltas = personas.filter(esAlta)

// Otra forma es creando una funcion anonima en la funcion del filter

// var personasAltas = personas.filter(function(persona){
//     return persona.altura>1.8
// })

console.log(personasAltas)

