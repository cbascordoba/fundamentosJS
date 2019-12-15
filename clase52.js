const sebas = {
    nombre:'Sebastian',
    apellido: 'Cordoba'
}
const luisa = {
    nombre:'Luisa',
    apellido: 'Cordoba'
}

function saludar(saludo = 'hola'){
    console.log(`${saludo} mi nombre es ${this.nombre}`)
}

//----------------------------bind ----------------------
// const saludarASebas = saludar.bind(sebas)
// const saludarALuisa = saludar.bind(luisa)
//setTimeout(saludar.bind(sebas, 'Hola parce'),1000)
//----------------------------bind ----------------------

//--------------------------call --------------------------
//saludar.call(sebas)
//--------------------------call --------------------------


//-------------------apply -----------
saludar.apply(sebas, ['hola parce'])
//-------------------apply -----------
