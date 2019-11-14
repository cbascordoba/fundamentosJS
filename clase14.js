var sacha = {
    nombre: ' Sacha',
    apellido: 'cortes',
    edad : 28, 
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)
    if(persona.ingeniero){
        console.log('Ingeniero');
    }
    else{
        console.log('No es ingeniero')
    }
    if(persona.cocinero){
        console.log('Cocinero');
    }
    if(persona.cantante){
        console.log('Cantante');
    }
    if(persona.dj){
        console.log('Dj');
    }
    if(persona.guitarrista){
        console.log('Guitarrista');
    }
    if(persona.drone){
        console.log('Piloto de drone');
    }
}

const MAYORIA_DE_EDAD =18

// function esMayorEdad(persona){

//     return persona.edad >= MAYORIA_DE_EDAD
// }

// Arrow function permite asignar una funcion anonima a una variable. 

// var esMayorEdad =function (persona){

//     return persona.edad >= MAYORIA_DE_EDAD
// }

// Cuando tenemos un solo parametro podemos oviar los parentesis 
const esMayorEdad = ({ edad }) => edad >=MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona){
    if(esMayorEdad(persona)){
        console.log(`${persona.nombre} Es mayor de edad`)
    }
    else{
        console.log(`${persona.nombre} NO Es mayor de edad`)
    }
}

const permitirAcceso = ({ edad }) => !esMayorEdad({ edad }) ? console.log('ACCESO DENEGADO'): console.log('ACCESO permitido')

    

imprimirSiEsMayorDeEdad(juan)
