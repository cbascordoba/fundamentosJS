// console.log('a')
// console.log('b')
// setTimeout(()=>console.log('b'),0)
// console.log('c')

//Esta función quedará en la COLA DE TAREAS
setTimeout(()=>console.log('d'),2000)

//el for tomará mucho tiempo y una vez finalice se podrá ejecutar el settimeout
for(var i=0; i< 10000000000; i++){

}