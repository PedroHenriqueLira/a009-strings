//Crie a const para a frase aqui
let casa = 'verde'
let portão = 'azul'

const frase = `Jorge tem uma casa ${casa} e com portão ${portão}, com os dizeres: "BOAS VINDAS,`+ ("mas não deixe o gato sair").toUpperCase()
console.log(frase)

console.log(frase.replace('verde','rosa').replace('azul','laranja'))
