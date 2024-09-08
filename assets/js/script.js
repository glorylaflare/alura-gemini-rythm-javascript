// script.js

// Obtém o modal
const modal = document.getElementById("gameModal");

// Obtém o botão que abre o modal
const openModalBtn = document.getElementById("openModalBtn");

// Obtém o elemento <span> que fecha o modal
const closeSpan = document.querySelector(".close");

// Obtém o botão para iniciar o jogo
const startGameBtn = document.getElementById("startGameBtn");

// Obtém o contêiner do jogo e o marcador de pontuação
const gameContainer = document.getElementById("gameContainer");
const scoreDisplay = document.getElementById("score");

// Pontuação inicial
let score = 0;

// Quando o usuário clica no botão, abre o modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clica no <span> (x), fecha o modal
closeSpan.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Função para iniciar o jogo
function startGame() {
    // Reseta a pontuação
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;

    // Reseta a posição das notas
    const notes = document.querySelectorAll(".note");
    notes.forEach(note => {
        note.style.top = "-50px"; // Reseta a posição inicial
        setTimeout(() => {
            note.style.top = "100%"; // Move a nota para baixo
        }, 100);
    });

    // Atualiza a pontuação a cada segundo
    setInterval(() => {
        score += 10; // Aumenta a pontuação
        scoreDisplay.textContent = `Score: ${score}`;
    }, 1000);
}

// Inicia o jogo ao clicar no botão
startGameBtn.onclick = function() {
    startGame();
}
