function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    // agora que tenho as variáveis declaradas e recebendo os valores basicos de entrada vamos analisar.
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] VERIFIQUE O ANO NOVAMENTE')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada ${idade} anos`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade < 10){
                //criança
                // img.setAttribute('src', 'nome do arquivo')
            } else if (idade < 21){
                //jovem
                // img.setAttribute('src', 'nome do arquivo')
            } else if (idade < 50){
                //adulto
                // img.setAttribute('src', 'nome do arquivo')
            } else {
                //idoso
                // img.setAttribute('src', 'nome do arquivo')
            }
        } else if(fsex[1].checked){
            genero = "Mulher"
            if(idade>=0 && idade < 10){
                //criança
                // img.setAttribute('src', 'nome do arquivo')
            } else if (idade < 21){
                //jovem
                // img.setAttribute('src', 'nome do arquivo')
            } else if (idade < 50){
                //adulto
                // img.setAttribute('src', 'nome do arquivo')
            } else {
                //idoso
                // img.setAttribute('src', 'nome do arquivo')
            }
        }
        res.style.textalign = 'Cente'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        //res.appendChild(img)
    }
}