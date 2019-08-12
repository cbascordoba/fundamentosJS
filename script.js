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

function imprimirNombreYEdad(persona){
    console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años. ` )
}

imprimirNombreMayusculas(sacha);

//Puedo indicarle un nombre diferente al parametro de la funcion 
imprimirNombreMayusculas({nombre: 'Pepito'})

imprimirNombreYEdad(dario);