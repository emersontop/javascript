let num = [5, 8, 9, 3, 2]
//coloca a casa numero 0 para receber um valor
num[0] = [1]
//coloco um novo numero no ultimo local do vetor
num.push(855)
//retorna o comprimento do vetor
num.length
//ordena os vetores em ordem crescente
num.sort()

console.log(`nosso vetor é : ${num}`) 
console.log(`Nosso vetor tem ${num.length} lugares`)

// novo modelo de for para vetores

for(let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}

//buscar um valor dentro de um vetor
num.indexOf(2)