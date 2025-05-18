const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

const pacmanFrames = document.getElementById("animações");
const fantasmaFrames = document.getElementById("fantasmas");

let createRect = (x, y, width, height, color) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
};

let dimensãoBloco = 20;
let fps = 30;
let corParede = "#3420CA";
let espaçoParede = dimensãoBloco / 1.5;
let paredeOff = (dimensãoBloco - espaçoParede) / 2;
let corPrimáriaParede = "black"

const direção_direita = 4;
const direção_acima = 3;
const direção_esquerda = 2;
const direção_abaixo = 1;

let mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1],
    [1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let gameLoop = () => {
    update()
    draw()
}

let update = () => {
    // todo
}

let draw = () => {
    createRect(0, 0, canvas.width, canvas.height, "black");
    // todo
    drawWalls();
}

let gameInterval = setInterval(gameLoop, 1000/fps)

let drawWalls = () => {
    for(let i = 0 ; i < mapa.length; i++) {
        for(let j = 0; j < mapa[0].length; j++) {
            if(mapa[i][j] == 1) { // Limitação da parede dentro do mapa.
                createRect(
                    j * dimensãoBloco,
                    i * dimensãoBloco,
                    dimensãoBloco,
                    dimensãoBloco,
                    corParede,
                );
                if(j > 0 && mapa[i][j - 1] == 1) {
                createRect(
                    j * dimensãoBloco,
                    i * dimensãoBloco + paredeOff,
                    espaçoParede + paredeOff,
                    espaçoParede,
                    corPrimáriaParede
                    );
                };
                if(j < mapa[0].lenght - 1 && mapa[i][j + 1] == 1) {
                    createRect(
                    j * dimensãoBloco + paredeOff,
                    i * dimensãoBloco + paredeOff,
                    espaçoParede + paredeOff,
                    espaçoParede,
                    corPrimáriaParede
                    );
                }
                if(i > 0 && mapa[i - 1][j] == 1) {
                createRect(
                    j * dimensãoBloco + paredeOff,
                    i * dimensãoBloco,
                    espaçoParede,
                    espaçoParede + paredeOff,
                    corPrimáriaParede
                    );
                };
                if(i < mapa.lenght - 1 && mapa[i + 1][j] == 1) {
                    createRect(
                    j * dimensãoBloco + paredeOff,
                    i * dimensãoBloco + paredeOff,
                    espaçoParede,
                    espaçoParede + paredeOff,
                    corPrimáriaParede
                    );
                }
            }
        }
    }
}