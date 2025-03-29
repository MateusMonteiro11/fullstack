// Obtém o elemento canvas e o contexto de desenho
const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

// Função para desenhar um retângulo
function desenharRetangulo() {
    ctx.fillStyle = 'blue'; // Cor de preenchimento
    ctx.fillRect(50, 50, 200, 100); // Desenha um retângulo (x, y, largura, altura)
}

// Função para desenhar um círculo
function desenharCirculo() {
    ctx.beginPath(); // Inicia um novo caminho
    ctx.arc(400, 300, 50, 0, Math.PI * 2); // Desenha um círculo (x, y, raio, ângulo inicial, ângulo final)
    ctx.fillStyle = 'red'; // Cor de preenchimento
    ctx.fill(); // Preenche o círculo
}

// Chama as funções de desenho
desenharRetangulo();
desenharCirculo();