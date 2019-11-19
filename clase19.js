//vamos a crear una collection y vamos a iterar sobre cada uno de los elementos. 

var sacha = {
    nombre: 'Sacha',
    apellido: 'Sanchez',
    altura: 1.72
}
var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.80
}
var isa = {
    nombre: 'Isabella ',
    apellido: 'Córdoba',
    altura: 1.68
}

var personas = [sacha, alan, isa]

for(i=0; i<personas.length;i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}

