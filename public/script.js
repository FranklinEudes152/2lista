let indiceAtual = 0;
const imagens = [
    "./imagens/1.jpg", // Ajustei o caminho para ficar consistente com os outros
    "./imagens/2.jpg",
    "./imagens/3.jpg",
    "./imagens/4.jpg",
];

window.onload = function() {
    atualizarImagem();
};

function mudarSlide(direcao) {
    indiceAtual += direcao;
    if (indiceAtual >= imagens.length) {
        indiceAtual = 0; // Volta para a primeira imagem se passar do final
    } else if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1; // Vai para a última imagem se for negativo
    }
    atualizarImagem();
}

function atualizarImagem() {
    document.getElementById("imagem").src = imagens[indiceAtual];
}
