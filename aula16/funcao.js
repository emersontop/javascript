function parimpar (n){
    if(n%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

let res = parimpar(4)
console.log(`o numero é ${res}`)

function soma(n1=0,n2=0){
    return n1+n2
}

res = soma(4)
console.log(`a soma é ${res}`)

/*
let v = function(c){
    return x*2
}

console.log(v(5))

*/