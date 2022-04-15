function contar(){
    //Criando as variáveis que serão usadas
    let ini = window.document.getElementById('txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    //Validação dos dados de entrada
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //mensagem de erro
        window.alert('[ERRO] faltam dados!')
    } else{
        //Alterar a div com o id res, para o texto contando:
        res.innerHTML = `Contando:`

        //declaração de variáveis para contagem
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('Passo invalido, considerando 1')
            p = 1
        }
        if(i<f){
            //contagem crescente
            for(let c = i; c<=f; c = c +=p){
                res.innerHTML+=`${c} +==> `
            }
            res.innerHTML+= `TOP`
        }else{
            //contagem decrescente
            for(let c =i; c>=f; c-= p){
                res.innerHTML+=`${c} +==>`
            }
            res.innerHTML+= `TOP` 
        }
        
    }
}