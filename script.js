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

function imprimirNombreMayusculas(persona)
{
   var nombre = persona.nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreMayusculas(sacha);