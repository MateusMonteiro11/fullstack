const RIGHT = 4, UP = 3, LEFT = 2, DOWN = 1;

class Pacman {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = RIGHT;
        this.nextDirection = RIGHT;
        this.currentFrame = 1;
        this.frameCount = 7;
        this.animationInterval = setInterval(() => this.updateAnimation(), 100);
    }
    move() {
        this.updateDirectionIfPossible();
        this.moveForward();
        if (this.checkCollisions()) this.moveBackward();
    }
    consume() {
        const mapX = this.getMapX();
        const mapY = this.getMapY();
        if (map[mapY][mapX] === 2) {
            map[mapY][mapX] = 3;
            score++;
            updateScoreDisplay();
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
    checkCollisionWithGhosts(ghosts) {
        return ghosts.some(g => g.getMapX() === this.getMapX() && g.getMapY() === this.getMapY());
    }
    updateDirectionIfPossible() {
        if (this.direction === this.nextDirection) return;
        const previousDirection = this.direction;
        this.direction = this.nextDirection;
        this.moveForward();
        if (this.checkCollisions()) {
            this.moveBackward();
            this.direction = previousDirection;
        } else {
            this.moveBackward();
        }
    }
    getMapX() {
        return Math.floor((this.x + this.width/2) / blockSize);
    }
    getMapY() {
        return Math.floor((this.y + this.height/2) / blockSize);
    }
    updateAnimation() {
        this.currentFrame = this.currentFrame === this.frameCount ? 1 : this.currentFrame + 1;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        let rotation = 0;
        if (this.direction === RIGHT) rotation = 0;
        else if (this.direction === DOWN) rotation = Math.PI / 2;
        else if (this.direction === LEFT) rotation = Math.PI;
        else if (this.direction === UP) rotation = 3 * Math.PI / 2;
        ctx.rotate(rotation);
        ctx.translate(-this.width / 2, -this.height / 2);
        const frameWidth = blockSize;
        const frameHeight = blockSize;
        const sx = (this.currentFrame - 1) * frameWidth;
        const sy = 0;
        ctx.drawImage(pacmanSprites, sx, sy, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
        ctx.restore();
    }
}