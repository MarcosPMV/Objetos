// 1-2
const pessoa = {
    nome: 'Marcos',
    idade: 26,
    solteiro: true,
    hobbie: ['Jogar', 'Futebol', 'Ler HQs']
}
pessoa.endereco = {
    rua: 'Doutor prudente de morais, 427',
    cidade: 'Praia Grande',
    estado: 'São Paulo'
}

function mostrarInfoPessoa (objeto){;
return objeto;
}
console.log(mostrarInfoPessoa(pessoa));

// 3
const pessoas = [{
   nome: 'Jorge',
   idade: 19,
   cidade: 'Mairiporã'
}, 
   {  
   nome: 'Carlo',
   idade: 35,
   cidade: 'Teresina'},
   {   
   nome: 'Joseph',
   idade: 18,
   cidade: 'Natal'

   }
]
pessoas.push({
    nome:'Richard',
    idade: 26,
    cidade: 'Londres'
})

function filtrarPorCidade (pessoas){ 
    return pessoas.filter (pessoas => pessoas.cidade === 'Londres');
}
function mostrarListaPessoas(pessoas){
    return pessoas;
}
console.log(mostrarListaPessoas(pessoas));
console.log(filtrarPorCidade(pessoas));


// 4
const calculadora = {
    soma: function soma (x, y){
        return x + y 
    },
    subtracao: function subtracao(x, y){
return x - y   
},
    multiplicacao: function multiplicacao (x, y){
        return x * y
    },
    divisao: function divisao (x, y){
        return x / y
    },

    calcularMedia: function calcularMedia  (numeros) {
     const soma = numeros.reduce((total, numero) => total + numero, 0);
        return soma / numeros.length;}
}
console.log(calculadora.soma(1,2));
console.log(calculadora.subtracao(3,1));
console.log(calculadora.multiplicacao(1,1));
console.log(calculadora.divisao(25,12));

const numerosParaMedia = [10, 8, 6, 9, 7];
console.log("Média: " + calculadora.calcularMedia(numerosParaMedia));

// 5
    const contaBancaria = {
titular:'Marcos',
saldo: 5000,
depositar: function (valor){
return this.saldo += valor;
},
sacar: function(valor) {
   if (valor <= this.saldo ) {
  this.saldo -= valor;
  return this.saldo
   
} else {  
   console.log(`Operação não concluida. Saldo insuficiente, você tem disponivel um saldo de: ${this.saldo}`); return
}
}
}


const cliente = {
    nome: 'Ricardo Coração de Leão ',
    conta: contaBancaria
}


function mostrarSaldo(cliente) {
  console.log (cliente.nome);
  console.log (cliente.conta.saldo);
    
}
cliente.conta.depositar(1000)
cliente.conta.sacar(10000)
mostrarSaldo(cliente)




