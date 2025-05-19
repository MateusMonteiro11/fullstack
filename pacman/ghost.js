class Ghost {
    constructor(x, y, width, height, speed, imageX, imageY, imageWidth, imageHeight, range) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = RIGHT;
        this.imageX = imageX;
        this.imageY = imageY;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
        this.range = range;
        this.changeDirectionInterval = setInterval(() => {
            this.updateDirection();
        }, 1000);
    }

    updateDirection() {
        let newDirection;
        let tries = 0;
        do {
            newDirection = Math.floor(Math.random() * 4) + 1;
            this.direction = newDirection;
            this.moveForward();
            const collides = this.checkCollisions();
            this.moveBackward();
            if (!collides) break;
            tries++;
        } while (tries < 4);
        this.direction = newDirection;
    }

    move() {
        this.moveForward();
        if (this.checkCollisions()) {
            this.moveBackward();
            this.updateDirection();
        }
    }
    moveBackward() {
        switch(this.direction) {
            case RIGHT: this.x -= this.speed; break;
            case LEFT: this.x += this.speed; break;
            case UP: this.y += this.speed; break;
            case DOWN: this.y -= this.speed; break;
        }
    }
    moveForward() {
        switch(this.direction) {
            case RIGHT: this.x += this.speed; break;
            case LEFT: this.x -= this.speed; break;
            case UP: this.y -= this.speed; break;
            case DOWN: this.y += this.speed; break;
        }
    }
    checkCollisions() {
        return (
            map[Math.floor(this.y / blockSize)][Math.floor(this.x / blockSize)] === 1 ||
            map[Math.floor((this.y + this.height - 1) / blockSize)][Math.floor(this.x / blockSize)] === 1 ||
            map[Math.floor(this.y / blockSize)][Math.floor((this.x + this.width - 1) / blockSize)] === 1 ||
            map[Math.floor((this.y + this.height - 1) / blockSize)][Math.floor((this.x + this.width - 1) / blockSize)] === 1
        );
    }
    getMapX() {
        return Math.floor((this.x + this.width / 2) / blockSize);
    }
    getMapY() {
        return Math.floor((this.y + this.height / 2) / blockSize);
    }
    draw() {
        ctx.save();
        ctx.drawImage(
            ghostSprites,
            this.imageX,
            this.imageY,
            this.imageWidth,
            this.imageHeight,
            this.x,
            this.y,
            this.width,
            this.height
        );
        ctx.restore();
    }
}