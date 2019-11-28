const API_URL='https://swapi.co/api/'

const PEOPLE_URL='people/:id'

const opts = { crossDomain:true}

const onPeopleResponse = function(luke){
    console.log(`Hola yo soy ${luke.name}`)}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,opts, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
//podria preguntalo al usuario
obtenerPersonaje(prompt('Escribe un numero:'))




