var sacha = {
    nombre:'Sacha',
    apellido: 'Puertas',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Gomez',
    edad: 27
}

function imprimirNombreMayusculas({nombre})
{
   var nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreMayusculas(sacha);

//Puedo indicarle un nombre diferente al parametro de la funcion 
imprimirNombreMayusculas({nombre: 'Pepito'})