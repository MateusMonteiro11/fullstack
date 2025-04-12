const canvas = document.getElementById('bolinha');
const ctx = canvas.getContext('2d');

let bola = {
    x: 0,
    y: 0,
    raio: 20,
    img: new Image(),
};

bola.img.src = 'imagens/bola.png';

bola.img.onload = function () {
    animacao();
};

bola.desenha = function (angulo) {
    ctx.save(); 
    ctx.translate(this.x, this.y); 
    ctx.rotate(angulo); 
    ctx.drawImage(this.img, -this.raio, -this.raio, 2 * this.raio, 2 * this.raio); 
    ctx.restore();
};

function animacao() {
    ctx.clearRect(0, 0, 600, 600);
    let angulo = Math.atan2(bola.y - mouseY, bola.x - mouseX);
    bola.desenha(angulo);
    requestAnimationFrame(animacao);
};

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', function (evento) {
    let rect = canvas.getBoundingClientRect();
    mouseX = evento.clientX - rect.left;
    mouseY = evento.clientY - rect.top;

    bola.x = mouseX;
    bola.y = mouseY;
});