class Persona{

    constructor(nombre, apellido, altura){
            this.nombre = nombre
            this.apellido = apellido
            this.altura = altura
        }

        saludar(){
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        }

        soyAlto(){
            if(this.altura >= 1.8){
                console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy alto`)
            }
            else{
                console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy bajo`)
            }
        }
}

// function Persona(nombre, apellido, altura){
//     this.nombre = nombre
//     this.apellido = apellido
//     this.altura = altura
// }

class Desarrollador extends Persona{

    constructor(nombre, apellido,altura){
        super(nombre,apellido,altura)
       
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}


var sebas = new Persona('Sebas','Cordoba',1.66)
// sebas.saludar()
// sebas.soyAlto()