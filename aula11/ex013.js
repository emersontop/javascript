var agora = new Date()
var diasem = agora.getDay()
/*
    0 = Domingo
    1 = segunda
    ...
    6 = sabado
*/

console.log(diasem)

switch(diasem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('dia invalido')
        break    
}