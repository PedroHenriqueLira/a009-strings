const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(`sem o comando trim fica ${minhaString.length} caracteres`)
console.log(minhaString.trim())
const quantidadeDeCaracteres = minhaString.trim()
console.log(`com o comando trim fica ${quantidadeDeCaracteres.length} caracteres`)
const minhaStringSubstituida = minhaString.replace('________.      ','sticioso.')
console.log(minhaStringSubstituida)