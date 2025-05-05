const tabuleiro = document.getElementById("tabuleiro");
const dado = document.getElementById("dado");
const turnoText = document.getElementById("turno");
const vencedor = document.getElementById("vencedor");

const totalCasas = 30;
let posicoes = [0, 0]; // Jogador 1 e 2
let turno = 0; // 0 = jogador 1, 1 = jogador 2

// Criar casas
for (let i = 1; i <= totalCasas; i++) {
  const casa = document.createElement("div");
  casa.classList.add("casa");
  casa.setAttribute("id", `casa-${i}`);
  casa.innerText = i;
  tabuleiro.appendChild(casa);
}

function atualizarTabuleiro() {
  // Limpar classes
  document.querySelectorAll(".casa").forEach(casa => {
    casa.classList.remove("j1", "j2");
  });

  if (posicoes[0] > 0)
    document.getElementById(`casa-${posicoes[0]}`).classList.add("j1");

  if (posicoes[1] > 0)
    document.getElementById(`casa-${posicoes[1]}`).classList.add("j2");
}

function jogarDado() {
  if (posicoes[0] >= totalCasas || posicoes[1] >= totalCasas) return;

  const numero = Math.floor(Math.random() * 6) + 1;
  dado.innerText = `Resultado do dado: ${numero}`;

  posicoes[turno] += numero;
  if (posicoes[turno] > totalCasas) posicoes[turno] = totalCasas;

  atualizarTabuleiro();

  if (posicoes[turno] === totalCasas) {
    vencedor.innerText = `🎉 Jogador ${turno + 1} venceu!`;
    turnoText.innerText = "Fim de jogo";
    return;
  }

  turno = 1 - turno;
  turnoText.innerText = `Vez de: Jogador ${turno + 1}`;
}
