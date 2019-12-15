const sebas = {
    nombre: 'sebas',
    apellido: 'cordoba',
    edad: 26
}

//const cumpleaños = persona => persona.edad++

//vamos a desglozar a la personas y pizamos su edad
const cumpleañosInmutable = persona => ({
    ...persona,
    edad: persona.edad+1
})