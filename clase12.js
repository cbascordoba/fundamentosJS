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

function imprimirSiEsMayorDeEdad(persona){
    if(persona.edad >= 18){
        console.log('Es mayor de edad')
    }
    else{
        console.log('No es mayo de edad')
    }
}

imprimirProfesiones(sacha)
imprimirSiEsMayorDeEdad(sacha)
