class Persona{

    constructor(nombre, apellido, altura){
            this.nombre = nombre
            this.apellido = apellido
            this.altura = altura
        }

        saludar(fn){
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
            //si nos pasaron algo como parametro se ejecuta...
            if(fn){
                var {nombre,apellido}=this
                fn(nombre, apellido, false)

            }
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

class Desarrollador extends Persona{

    constructor(nombre, apellido,altura){
        super(nombre,apellido,altura)
       
    }

    saludar(fn){
        debugger
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
        if(fn){
           
            fn(nombre, apellido, true)

        }
    }
}

function respoderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`No sabia que eras desarrollador`)
    }
}

var sebas = new Persona('Sebas','Cordoba',1.66)
var artur = new Desarrollador('Artur','Lizky',1.83)
var ana = new Persona('Ana','Lopez',1.90)

sebas.saludar()
artur.saludar(respoderSaludo)
ana.saludar(respoderSaludo)
