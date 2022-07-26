//Crie a const para a frase aqui

const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS,`+ ("mas não deixe o gato sair").toUpperCase()
console.log(frase)

console.log(frase.replace('verde','rosa').replace('azul','laranja'))

const fraseNova = frase
const temVerde = fraseNova.includes('verde')
const temLaranja = fraseNova.includes('laranja')
console.log(`na frase a cima inclui verde? ${temVerde}\nna frase a cima inclui laranja? ${temLaranja} `)
