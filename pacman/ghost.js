class Ghost {
    constructor(x, y, width,
        height,
        speed,
        imageX,
        imageY,
        imageWidth,
        imageHeight,
        range
    ) {
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
        this.randomTargetIndex = parseInt(Math.random() * 4);
        this.target = randomTargetsForGhosts[this.randomTargetIndex];
        this.changeDirectionInterval = setInterval(() => {
            this.updateDirection();
        }, 1000);
        setInterval(() => {
            this.changeRandomDirection();
        }, 10000)
    }

    isInRange() {
        let xDistance = Math.abs(pacman.getMapX() - this.getMapX());
        let yDistance = Math.abs(pacman.getMapY() - this.getMapY());
        if(
            Math.sqrt(xDistance * xDistance + yDistance * yDistance) <=
            this.range
        ) {
            return true;
        }
        return false;
    }


    updateDirection() {
    const directions = [UP, DOWN, LEFT, RIGHT];
    let bestDirection = this.direction;
    let minDistance = Infinity;

    for (let dir of directions) {
        // Simular movimento
        let testX = this.x;
        let testY = this.y;
        switch (dir) {
            case UP: testY -= this.speed; break;
            case DOWN: testY += this.speed; break;
            case LEFT: testX -= this.speed; break;
            case RIGHT: testX += this.speed; break;
        }

        // Verificar colisão
        const tempX = this.x;
        const tempY = this.y;
        this.x = testX;
        this.y = testY;
        const collides = this.checkCollisions();
        this.x = tempX;
        this.y = tempY;
        if (collides) continue;

        // Calcular distância até o Pac-Man
        const dx = pacman.x - testX;
        const dy = pacman.y - testY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < minDistance) {
            minDistance = distance;
            bestDirection = dir;
        }
    }

    this.direction = bestDirection;
}

    move() {
        if (this.isInRange()) {
            this.target = pacman;;
        } else {
            this.target = randomTargetsForGhosts[this.randomTargetIndex];
        }
        this.changeDirectionIfPossible();
        this.moveForward();
        if (this.checkCollisions()) {
            this.moveBackward();
            return;
        }
    }

    changeRandomDirection() {
        let addition = 1;
        this.randomTargetIndex += addition;
        this.randomTargetIndex = this.randomTargetIndex % 4;
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

    changeDirectionIfPossible() {
        let tempDirection = this.direction
            this.direction = this.calculateNewDirection(
            map,
            parseInt(this.target.x / blockSize),
            parseInt(this.target.y / blockSize)
        );
        if (typeof this.direction == "undefined") {
            this.direction = tempDirection;
            return;
        }
        if (
            this.getMapY() != this.getMapYRightSide() &&
            (this.direction == LEFT ||
                this.direction == RIGHT)
        ) {
            this.direction = UP
        }
        if (
            this.getMapX() != this.getMapXRightSide() &&
            this.direction == UP
        ) {
            this.direction = LEFT
        }
        this.moveForward();
        if (this.checkCollisions()) {
            this.moveBackward();
            this.direction = tempDirection;
        } else {
            this.moveBackward();
        }
        console.log(this.direction);
    }

    calculateNewDirection(map, destX, destY) {
        let mp = [];
        for (let i = 0; i < map.length; i++) {
            mp[i] = map[i].slice();
        }

        let queue = [
            {
                x: this.getMapX(),
                y: this.getMapY(),
                rightX: this.getMapXRightSide(),
                rightY: this.getMapYRightSide(),
                moves: [],
            },
        ];
        while (queue.length > 0) {
            let poped = queue.shift();
            if (poped.x == destX && poped.y == destY) {
                return poped.moves[0];
            } else {
                mp[poped.y][poped.x] = 1;
                let neighborList = this.addNeighbors(poped, mp);
                for (let i = 0; i < neighborList.length; i++) {
                    queue.push(neighborList[i]);
                }
            }
        }

        return 1; // Direção
    }

    addNeighbors(poped, mp) {
        let queue = [];
        let numOfRows = mp.length;
        let numOfColumns = mp[0].length;

        if (
            poped.x - 1 >= 0 &&
            poped.x - 1 < numOfRows &&
            mp[poped.y][poped.x - 1] != 1
        ) {
            let tempMoves = poped.moves.slice();
            tempMoves.push(LEFT);
            queue.push({ x: poped.x - 1, y: poped.y, moves: tempMoves });
        }
        if (
            poped.x + 1 >= 0 &&
            poped.x + 1 < numOfRows &&
            mp[poped.y][poped.x + 1] != 1
        ) {
            let tempMoves = poped.moves.slice();
            tempMoves.push(RIGHT);
            queue.push({ x: poped.x + 1, y: poped.y, moves: tempMoves });
        }
        if (
            poped.y - 1 >= 0 &&
            poped.y - 1 < numOfColumns &&
            mp[poped.y - 1][poped.x] != 1
        ) {
            let tempMoves = poped.moves.slice();
            tempMoves.push(UP);
            queue.push({ x: poped.x, y: poped.y - 1, moves: tempMoves });
        }
        if (
            poped.y + 1 >= 0 &&
            poped.y + 1 < numOfColumns &&
            mp[poped.y + 1][poped.x] != 1
        ) {
            let tempMoves = poped.moves.slice();
            tempMoves.push(DOWN);
            queue.push({ x: poped.x, y: poped.y + 1, moves: tempMoves });
        }
        return queue;
    }

     getMapX() {
        return Math.floor((this.x + this.width / 2) / blockSize);
    }
    getMapY() {
        return Math.floor((this.y + this.height / 2) / blockSize);
    }

    getMapXRightSide() {
        let mapX = parseInt((this.x * 0.99 + blockSize) / blockSize);
        return mapX;
    }

    getMapYRightSide() {
        let mapY = parseInt((this.y * 0.99 + blockSize) / blockSize);
        return mapY;
    }

    changeAnimation() {
        this.currentFrame =
            this.currentFrame == this.frameCount ? 1 : this.currentFrame + 1;
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

    let updateGhosts = () => {
    for (let i = 0; i < ghosts.length; i++) {
        ghosts[i].move();
    }
};

    let drawGhosts = () => {
    for (let i = 0; i < ghosts.length; i++) {
        ghosts[i].draw();
    }
};