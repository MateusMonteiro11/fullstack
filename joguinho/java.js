const canvas = document.getElementById('bolinha');
const ctx = canvas.getContext('2d');

let bola = {
    x: 0,
    y: 0,
    raio: 20,
    img: new Image(),
};

let golzinho = {
    x: 300,
    y: 50,
    raio: 100,
    img: new Image(),
    direcao: 'direita',
    desenha: function () {
        this.img.src = 'imagens/golzinho.png'
        ctx.beginPath();
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
        ctx.closePath();
    }
};

bola.img.src = 'imagens/bola.png';

bola.img.onload = function () {
    animacao();
};


bola.desenha = function () {
    ctx.beginPath();
    ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
    ctx.closePath();
};

function animacao() {
    ctx.clearRect(0, 0, 600, 600);
    if (bola.y < 0) {
        bola.y = 0
    }
    bola.y = bola.y - 2;
    if (golzinho.direcao === 'direita') {
        golzinho.x = golzinho.x + 1
    }

    if (golzinho.direcao === 'esquerda') {
        golzinho.x = golzinho.x - 1
    }

    if (golzinho.x > 500) {
        golzinho.direcao = 'esquerda'
    }

    if (golzinho.x < 100) {
        golzinho.direcao = 'direita'
    }
    bola.desenha();
    golzinho.desenha();
    requestAnimationFrame(animacao);
}


animacao();

document.addEventListener('mousemove', function (evento) {
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    console.log(x_mouse, y_mouse);
    bola.x = x_mouse;
    bola.y = y_mouse;

    if (bola.x > 600 - 2 * Math.PI) {
        bola.x = 590
    };
    if (bola.x < 0 + 2 * Math.PI) {
        bola.x = 10
    }
    if (bola.y > 600 - 2 * Math.PI) {
        bola.y = 590
    }
    if (bola.y < 0 + 2 * Math.PI) {
        bola.y = 10
    }
});




