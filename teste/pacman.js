class Pacman {
    constructor (x, y, width, height, speed) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed - speed
    }
    movimento() {
        this.checkColisôes();
        this.movimentoDianteiro();
        this.movimentoTraseiro();
        if (this.checkColisôes()) {
            this.movimentoTraseiro();
        }
    }
    comer() {

    }
    movimentoTraseiro() {

    }
    movimentoDianteiro() {

    }
    checkColisôes() {

    }
    checkColisõesFantasmas() {

    }
    alteraçãoDeDireção() {

    }
    alterarAnimação() {

    }
    desenho() {

    }
 }