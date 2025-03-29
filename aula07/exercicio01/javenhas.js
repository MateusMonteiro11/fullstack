const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

function desenharRetanguloAzul() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = 'blue';
    ctx.fillRect(0,0,90,90);
    ctx.strokeRect(0,0,90,90);
    ctx.closePath(); 
}
function desenharRetanguloVermelho() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = 'red';
    ctx.fillRect(710,0,90,90);
    ctx.strokeRect(710,0,90,90);
    ctx.closePath(); 
}
function desenharRetanguloAmarelo1() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0,660,70,70);
    ctx.closePath();
}
function desenharRetanguloAmarelo2() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0,730,70,70);
    ctx.closePath();
}
function desenharRetanguloAmarelo3() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = 'yellow';
    ctx.fillRect(70,730,70,70);
    ctx.closePath();
}
function linhapretinha() {
    ctx.strokeStyle = 'black'; 
    ctx.lineWidth = 2; 
    ctx.beginPath(); 
    ctx.moveTo(400, 800); 
    ctx.lineTo(400, 400);
    ctx.stroke();
}
function desenharRetanguloPreto() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = 'black';
    ctx.fillRect(670,680,130,130);
    ctx.closePath();
}
function desenharRetanguloBranco() {
    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.fillStyle = 'white';
    ctx.fillRect(665,665,70,70);
    ctx.closePath();
}
function linha1() {
    ctx.strokeStyle = 'blue'; 
    ctx.lineWidth = 2; 
    ctx.beginPath(); 
    ctx.moveTo(0, 0); 
    ctx.lineTo(400, 400);
    ctx.stroke();
}
function linha2(){
    ctx.strokeStyle = 'red'; 
    ctx.lineWidth = 2; 
    ctx.beginPath(); 
    ctx.moveTo(800, 0); 
    ctx.lineTo(400, 400);
    ctx.stroke();
}
function quadradociano() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = 'aqua';
    ctx.fillRect(0,401,70,70);
    ctx.closePath();
}
function quadradociano2() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = 'aqua';
    ctx.fillRect(0,329,70,70);
    ctx.closePath();
}
function quadradociano3() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = 'aqua';
    ctx.fillRect(730,365,70,70);
    ctx.closePath();
}
function linhaverde() {
    ctx.strokeStyle = 'green'; 
    ctx.lineWidth = 2; 
    ctx.beginPath(); 
    ctx.moveTo(800, 400);   
    ctx.lineTo(0, 400);
    ctx.stroke();
    ctx.closePath();
}
function quadradovermei() {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = 'red';
    ctx.fillRect(310,400,90,90);
    ctx.closePath();
}
function arco() {
    ctx.strokeStyle = 'green'; 
    ctx.lineWidth = 2; 
    ctx.beginPath();
    ctx.arc(400, 400, 140, 3.14, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}
function arquinho1() {
    ctx.strokeStyle = 'green'; 
    ctx.lineWidth = 2; 
    ctx.beginPath();
    ctx.arc(400, 400, 170, 1.75 * Math.PI, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}
function arquinho2() {
    ctx.strokeStyle = 'green'; 
    ctx.lineWidth = 2; 
    ctx.beginPath();
    ctx.arc(400, 400, 170, 1 * Math.PI, 1.25 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}
function circunferenciacentral() {
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'aqua';
    ctx.lineWidth = 2; 
    ctx.arc(400, 320, 35, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}
function bolafinal() {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "green";
    ctx.fillStyle = 'aqua';
    ctx.arc(400, 800, 100, 3.14, 2 * Math.PI);
    ctx.stroke();
    ctx.fill()
    ctx.closePath();
}
function arquinhofinal() {
    ctx.strokeStyle = 'green'; 
    ctx.lineWidth = 2; 
    ctx.beginPath();
    ctx.arc(400, 800, 220, 1 * Math.PI, 1.5 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}
function arquinhofinal2() {
    ctx.strokeStyle = 'green'; 
    ctx.lineWidth = 2; 
    ctx.beginPath();
    ctx.arc(400, 800, 170, 1.5 * Math.PI, 1 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}
function bolaamarela1() {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.fillStyle = 'yellow';
    ctx.lineWidth = 2; 
    ctx.arc(200, 600, 35, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}
function bolaamarela2() {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.fillStyle = 'yellow';
    ctx.lineWidth = 2; 
    ctx.arc(600, 600, 35, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}
function texto() {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = 'black';
    ctx.font = "50px Arial"
    ctx.textAlign = "center";
    ctx.fillText("Canvas",400,120);
    ctx.closePath();
}

desenharRetanguloAmarelo1();
desenharRetanguloAmarelo2();
desenharRetanguloAmarelo3();
desenharRetanguloAzul();
desenharRetanguloVermelho();
desenharRetanguloPreto();
desenharRetanguloBranco();

linha1 ();
linha2();
linhapretinha();

quadradociano();
quadradociano2();
quadradociano3();
linhaverde();

quadradovermei();
arco();
arquinho1();
arquinho2();
circunferenciacentral();
bolafinal();

arquinhofinal();
arquinhofinal2();

bolaamarela1();
bolaamarela2();

texto();