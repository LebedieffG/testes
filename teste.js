const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let tabuleiro = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];


let jogadorAtual = 'X';


function mostrarTabuleiro() {
  console.log('  0 1 2');
  for (let i = 0; i < tabuleiro.length; i++) {
    console.log(`${i} ${tabuleiro[i].join('|')}`);
  }
}


function jogadaValida(linha, coluna) {
  return linha >= 0 && linha < 3 && coluna >= 0 && coluna < 3 && tabuleiro[linha][coluna] === ' ';
}


function vencedor(jogador) {
  // Verifica linhas
  for (let i = 0; i < 3; i++) {
    if (tabuleiro[i][0] === jogador && tabuleiro[i][1] === jogador && tabuleiro[i][2] === jogador) {
      return true;
    }
  }
  // Verifica colunas
  for (let i = 0; i < 3; i++) {
    if (tabuleiro[0][i] === jogador && tabuleiro[1][i] === jogador && tabuleiro[2][i] === jogador) {
      return true;
    }
  }
  // Verifica diagonais
  if ((tabuleiro[0][0] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][2] === jogador) ||
      (tabuleiro[0][2] === jogador && tabuleiro[1][1] === jogador && tabuleiro[2][0] === jogador)) {
    return true;
  }
  return false;
}


function tabuleiroCompleto() {
  for (let linha of tabuleiro) {
    for (let celula of linha) {
      if (celula === ' ') {
        return false;
      }
    }
  }
  return true;
}


function trocarJogador() {
  jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
}


function jogar(linha, coluna) {
  if (jogadaValida(linha, coluna)) {
    tabuleiro[linha][coluna] = jogadorAtual;
    if (vencedor(jogadorAtual)) {
      console.log(`Jogador ${jogadorAtual} venceu!`);
      mostrarTabuleiro();
      rl.close();
    } else if (tabuleiroCompleto()) {
      console.log("Empate!");
      mostrarTabuleiro();
      rl.close();
    } else {
      trocarJogador();
      turno();
    }
  } else {
    console.log('Jogada inválida, tente novamente.');
    turno();
  }
}


function turno() {
  mostrarTabuleiro();
  rl.question(`Jogador ${jogadorAtual}, digite sua jogada (linha coluna): `, resposta => {
    const [linha, coluna] = resposta.split(' ').map(Number);
    jogar(linha, coluna);
  });
}


turno();