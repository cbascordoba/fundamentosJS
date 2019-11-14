// == comparar dos variables pero lleva a estas a un mismo tipo de dato. STRING Y NÚMERO SERAN IGUALES

// === Compara dos variables pero NO IGUALA VARIABLES DE DISTINTO TIPO. Se recomienda utiizar. 
var x=4, y = '4';

// Para comparar dos objetos tiene una referencia tiene que estar apuntando a la otra

// var otraPersona = {
//     nombre: 'Sacha'   SI COMPARIO SACHA == OTRAPERSONA no dará true. 
// }

//var otraPersona = sacha; DE ESTA MANERA SI FUNCIONARÁ

var sacha = {
    nombre: 'Sacha'

}

var otraPersona = sacha;

