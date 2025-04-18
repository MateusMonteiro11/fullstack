const randomNumber = Math.floor(Math.random() * 100);
const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');

guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 99) {
        message.textContent = 'Por favor, insira um número válido entre 0 e 99.';
    } else if (userGuess < randomNumber) {
        message.textContent = 'Muito baixo! Tente novamente.';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Muito alto! Tente novamente.';
    } else {
        message.textContent = 'Parabéns! Você acertou o número!';
    }

    guessInput.value = '';
});