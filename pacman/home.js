const btnPlay = document.getElementById('btnPlay');
    const btnRules = document.getElementById('btnRules');
    const content = document.getElementById('content');
    const rulesText = `
      <h2>Regras do Jogo</h2><br>
      <ul>
        <li>Controle o Pacman para comer todos os pontos amarelos no labirinto.</li><br>
        <li>Evite os fantasmas, pois tocar neles fará você perder uma vida.</li><br>
        <li>Complete a fase para vencer o jogo.</li><br>
        <li>Use as setas do teclado ou WASD para mover o Pacman.</li>
      </ul>
    `;
    btnPlay.addEventListener('click', () => {
      // Redireciona para pacman.html dentro da pasta "jogo"
      window.location.href = 'pacman.html';
    });
    btnRules.addEventListener('click', () => {
      content.innerHTML = rulesText;
      content.classList.remove('hidden');
      btnRules.setAttribute('aria-expanded', 'true');
    });