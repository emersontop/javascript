function taboada(){
    //declaração de variáveis
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    //validadação de entrada
    if(num.value.length == 0){
        window.alert(`Por favor digite um número`)
    }else{
        //conversão do dado de entrada em números
        let n = Number(num.value)
        let c =1
        tab.innerHTML = ''
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}