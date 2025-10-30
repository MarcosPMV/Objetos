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
console.log("Avaliação: " + (livro.avaliacao === null ? "Nenhuma avaliação disponível." : "Nota: " + livro.avaliacao.nota + ", Comentário: \"" + livro.avaliacao.comentario + "\""));




