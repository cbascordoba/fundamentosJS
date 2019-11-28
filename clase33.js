const API_URL='https://swapi.co/api/'

const PEOPLE_URL='people/:id'

const opts = { crossDomain:true}



function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

    $.get(url,opts, function (persona) {
        console.log(`Hola yo soy ${persona.name}`)
        
      //si nos envian un callback llamemoslo
      if(callback){
        callback()
        }
    })
    
}

obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(prompt('Indica un número:'))
    })
})






