//Para la recursividad necesitamos dos cosas
    //caso base
    //caso recursivo

function divisionEntera(dividendo,divisor){
    debugger
    if(dividendo< divisor){
        return 0
    }

    return 1 + divisionEntera(dividendo-divisor,divisor)
}