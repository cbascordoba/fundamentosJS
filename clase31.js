const API_URL='https://swapi.co/api/'

const PEOPLE_URL='people/:id'

// vamos a hacer un request donde le pasamos la url completa (reemplazamos :id por un número)
//El segundo parametro es indicarle que vamos a hacer la consulta en otra paágina diferente. 
const lukeUrl= `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain:true}

//callback funcion que se va a ejecutar en un futuro.para este caso cuando termine el request
//el parametor luke corresponde a la data que tiene la información del personaje

// $.get(lukeUrl,opts, function(luke){
//     console.log(`Hola yo soy ${luke.name}`)
// })

const onPeopleResponse = function(luke){
    console.log(`Hola yo soy ${luke.name}`)}

$.get(lukeUrl,opts, onPeopleResponse)


