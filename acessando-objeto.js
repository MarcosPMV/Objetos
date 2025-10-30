const estudante = {
    nome: 'Marcos Martins',
    idade: 26,
    cpf:'46610815879',
    turma: 'JavaScript' 
}
estudante.nome  //Marcos Martins
function exibeInfoEstudante (objEstudante, InfoEstudante) {
return objEstudante[InfoEstudante];
}
console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));
