
function diasEntreFechas(fecha1, fecha2){
    const unDia = 1000* 60*60 *24
    //abs funcion que transforma un numero negativo en positivo 
    //el resultado sera unn numero en milisengundos
   const diferencia = Math.abs(fecha1 - fecha2)

   return Math.floor(diferencia/unDia) 
}

const hoy = new Date()
//el mes arrancaria desde 0, es decir mayo seria el 4 en vez de 5
const nacimiento = new Date(1993,4,11)