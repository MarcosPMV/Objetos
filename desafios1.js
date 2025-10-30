// 1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. 
// O objeto deve conter as seguintes propriedades:

//titulo (string): título do livro.
//autor (string): nome do autor do livro.
//anoPublicacao (number): ano de publicação do livro.
//genero (string): gênero do livro.
// No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.



// 2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). 
// Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
// Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. 
// Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.
// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.

// 3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
// Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

// 4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
// Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

// No final do arquivo livro.js, adicione uma avaliação ao objeto.

// Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

// Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

// 5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
//  Depois altere o gênero do livro para "Aventura".

//6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
// Em seguida, exclua a propriedade avaliacao do objeto livro. 
// Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.

const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'Narnia',
    autor: 'C.S Lewis',
    anoPublicacao:'1950', 
    genero: 'Fantasia',
    avaliacao: null,
}
const avaliacaoLivro = { nota: 4.5, comentario: "Ótima leitura!" };
if (livro.avaliacao === null){
    livro.avaliacao = avaliacaoLivro
} else {
    console.log("Este livro já possui uma avaliação");
    
}


livro.idadeLivro = anoAtual - livro.anoPublicacao;
livro.genero = 'aventura'
// livro.mostrarDetalhes =  "Título: " + livro.titulo + "\n" +
                        //"Autor: " + livro.autor + "\n" +
                        //"Ano de Publicação: " + livro.anoPublicacao + "\n" +
                        //"Gênero: " + livro.genero + "\n" +
                        //"Idade de Publicação: " + livro.idadeLivro + " anos";

console.log("Detalhes do livro:");
console.log("Título:" + livro['titulo'] );
console.log("Autor: " + livro['autor']);
console.log("Ano de Publicação: " + livro['anoPublicacao']);
console.log("Gênero: " + livro ['genero']);
console.log("Idade de Publicação: " + livro['idadeLivro']);
console.log("Avaliação: Nenhuma avaliação disponível." );





