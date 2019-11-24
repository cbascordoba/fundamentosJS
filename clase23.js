function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){
    if(this.altura >= 1.8){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy alto`)
    }
    else{
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy bajo`)
    }
}
var sebas = new Persona('Sebas','Cordoba',1.66)
sebas.saludar()
sebas.soyAlto()