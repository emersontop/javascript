var agora = new Date()
var hora = agora.getHours()
//aqui ele paga a hora do sistema
console.log(`Agora são exatamente ${hora} horas`)
if(hora<12){
    console.log(`bom dia!`)
}else if (hora <=18){
    console.log(`boa tarde!`)
} else {
    console.log(`boa noite!`)
}