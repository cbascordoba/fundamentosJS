function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function(){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}
function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
// 25. dentro de una arrow function, this está haciendo referencia al espacio global, a windows.
Persona.prototype.soyAlto = function(){
    if(this.altura >= 1.8){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy alto`)
    }
    else{
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy bajo`)
    }
}

function Desarrollador(nombre, apellido){
    this.nombre=nombre
    this.apellido=apellido
}
heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}


var sebas = new Persona('Sebas','Cordoba',1.66)
// sebas.saludar()
// sebas.soyAlto()