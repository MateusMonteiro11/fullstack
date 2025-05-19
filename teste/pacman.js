class Pacman {
    constructor (x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = direção_direita;
        this.frame = 1;
        this.framecount = 1;

        setInterval(() => {
            this.alterarAnimação()
        }, 100);
    }


    movimento() {
    this.alterador();
        this.movimentoDianteiro();
        if (this.checkColisôes()) {
            this.movimentoTraseiro();
            return;
        }
    }

    comer() {

    }

    movimentoTraseiro() {
        switch(this.direction) {
            case direção_direita:
                this.x -= this.speed;
                break;
            case direção_acima:
                this.y += this.speed;
                break;
            case direção_esquerda:
                this.x += this.speed;
                break;
            case direção_abaixo:
                this.y -= this.speed;
                break;
        }
    }

    movimentoDianteiro() {
        switch(this.direction) {
            case direção_direita:
                this.x += this.speed;
                break;
            case direção_acima:
                this.y -= this.speed;
                break;
            case direção_esquerda:
                this.x -= this.speed;
                break;
            case direção_abaixo:
                this.y += this.speed;
                break;
        }
    }

    checkColisôes() {
        let isCollided = false;
        if (
            mapa[parseInt(this.y / dimensãoBloco)][
                parseInt(this.x / dimensãoBloco)
            ] == 1 ||
            mapa[parseInt(this.y / dimensãoBloco + 0.9999)][
                parseInt(this.x / dimensãoBloco)
            ] == 1 ||
            mapa[parseInt(this.y / dimensãoBloco)][
                parseInt(this.x / dimensãoBloco + 0.9999)
            ] == 1 ||
            mapa[parseInt(this.y / dimensãoBloco + 0.9999)][
                parseInt(this.x / dimensãoBloco + 0.9999)
            ] == 1
        ) {
            isCollided = true;
        }
        return isCollided;
    }

    checkColisõesFantasmas() {}

    alterador() {
        if (this.direction == this.Direção) return;
        let tempDirection = this.direction;
        this.direction = this.Direção;
        this.movimentoDianteiro();
        if (this.checkColisôes()) {
            this.movimentoTraseiro();
            this.direction = tempDirection;
        } else {
            this.movimentoTraseiro();
        }
    }

    alterarAnimação() {
        this.frame = this.frame == this.framecount ? 1 : this.frame + 1
    };

    draw() {
        canvasContext.save()
        canvasContext.translate(
            this.x + dimensãoBloco / 2,
            this.y + dimensãoBloco / 2
        );

        canvasContext.rotate((this.direction * 90 * Math.PI) / 180);

        canvasContext.translate(
            -this.x + dimensãoBloco / 2,
            -this.y + dimensãoBloco / 2
        );

        canvasContext.drawImage (
            pacmanFrames,
            (this.frame - 1) * dimensãoBloco,
            0,
            dimensãoBloco,
            dimensãoBloco,
            this.x,
            this.y,
            this.width,
            this.height
        );

        canvasContext.restore();
    }

    getMapX() {
        return parseInt(this.x / dimensãoBloco)
    }
    getMapY() {
        return parseInt(this.y / dimensãoBloco)
    }
    getMapXLadoDireito() {
        return parseInt((this.x + 0.9999 * dimensãoBloco) / dimensãoBloco)
    }
    getMapYLadoDireito() {
        return parseInt((this.y + 0.9999 * dimensãoBloco) / dimensãoBloco)
    }
}