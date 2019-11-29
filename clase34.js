const API_URL='https://swapi.co/api/'

const PEOPLE_URL='people/:id'

const opts = { crossDomain:true}



function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

    $.get(url,opts, callback).fail(()=>{
        console.log(`Sucedio un error, No se encontro el personaje ${id}`)
    })
    
}
//recordemos que persona hace referencia a DATA la información que genera la APAI
obtenerPersonaje(1, function (persona) {
    console.log(`Hola yo soy ${persona.name}`)
    obtenerPersonaje(2, function (persona) {
        console.log(`Hola yo soy ${persona.name}`)
        obtenerPersonaje(prompt('Indica un número:'),function(persona){
            console.log(`Hola yo soy ${persona.name}`)
        })
       
    })
})




 