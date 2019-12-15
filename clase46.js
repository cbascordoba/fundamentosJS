var sebas = {
    nombre: 'Sebastian',
    apellido: 'Cordoba',
    edad: 26
}

// function esMayorDeEdad(persona){
//     if(persona.edad >= 18){
//         var mensaje = 'Es mayor de edad'
//     }
//     else{
//         var mensaje = 'Es mayor de edad'
//     }

//     console.log(mensaje)
// }
function esMayorDeEdad(persona){
    if(persona.edad >= 18){
        let mensaje = 'Es mayor de edad'
    }
    else{
        let mensaje = 'Es mayor de edad'
    }

    console.log(mensaje)
}

esMayorDeEdad(sebas)