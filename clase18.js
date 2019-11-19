var signo = prompt('¿Cuál es tu signo?')

switch(signo){
    case 'acuario':
    case 'Acuario':
        console.log('Hosroscopo de acuario')
        break
    
        case 'tauro':
            console.log('Hosroscopo de Tauro')
            break
        default:
            console.log('No es un signo zoodiacal valido')
}
