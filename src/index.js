// Definição do player 1 com atributos básicos
const player1 = {
    NOME: "Mario", 
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0, // Pontos iniciais zerados
}

// Definição do player 2 com atributos básicos
const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0 // Pontos iniciais zerados
}

// Função para rolar o dado, gerando um número de 1 a 6
async function rollDice(){
   return Math.floor(Math.random() * 6) + 1; // Número aleatório entre 1 e 6
}

// Função para sortear o tipo de bloco da rodada
async function getRandomBlock() {
    let random = Math.random(); // Gera um número aleatório entre 0 e 1
    let result; 

    // Sorteia o bloco com base no número aleatório
    switch (true) {
        case random < 0.33: // Bloco "RETA" se o número for menor que 0.33
            result = "RETA";
            break; 
        case random < 0.66: // Bloco "CURVA" se o número for entre 0.33 e 0.66
            result = "CURVA";
            break;
        default: // Bloco "CONFRONTO" se o número for maior que 0.66
            result = "CONFRONTO";
    }

    return result; // Retorna o tipo do bloco sorteado
}

// Função para registrar o resultado do dado e do atributo usado
async function logRollResult(characterName, blok, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${blok}: ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

// Função principal que executa a corrida entre dois personagens
async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) { // Executa 5 rodadas
        console.log(`🏁 Rodada ${round}`); // Indica o número da rodada

        let blok = await getRandomBlock(); // Sorteia o tipo de bloco
        console.log(`Bloco: ${blok}`); // Exibe o tipo do bloco

        // Rola os dados para os dois personagens
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // Variáveis para armazenar o total de pontos na rodada
        let TotalTestSkill1 = 0;
        let TotalTestSkill2 = 0;

        // Bloco "RETA": usa a VELOCIDADE dos personagens
        if (blok === "RETA") {
            TotalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            TotalTestSkill2 = diceResult2 + character2.VELOCIDADE; // Corrigido para usar o atributo do player 2

            // Registra o resultado da VELOCIDADE
            await logRollResult(character1.NOME, "VELOCIDADE", diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "VELOCIDADE", diceResult2, character2.VELOCIDADE);
        }

        // Bloco "CURVA": usa a MANOBRABILIDADE dos personagens
        if (blok === "CURVA") {
            TotalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            TotalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            // Registra o resultado da MANOBRABILIDADE
            await logRollResult(character1.NOME, "MANOBRABILIDADE", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "MANOBRABILIDADE", diceResult2, character2.MANOBRABILIDADE);
        }

        // Bloco "CONFRONTO": usa o PODER dos personagens
        if (blok === "CONFRONTO") {
            TotalTestSkill1 = diceResult1 + character1.PODER;
            TotalTestSkill2 = diceResult2 + character2.PODER;

            // Registra o resultado do PODER
            await logRollResult(character1.NOME, "PODER", diceResult1, character1.PODER);
            await logRollResult(character2.NOME, "PODER", diceResult2, character2.PODER);
        }

        // Verifica quem venceu a rodada
        if (TotalTestSkill1 > TotalTestSkill2) {
            console.log(`${character1.NOME} marcou um ponto!`);
            character1.PONTOS++; // Incrementa o ponto do player 1
        } else if (TotalTestSkill2 > TotalTestSkill1) {
            console.log(`${character2.NOME} marcou um ponto!`);
            character2.PONTOS++; // Incrementa o ponto do player 2
        } else {
            console.log("Empate! Ninguém marcou pontos nesta rodada.");
        }

        console.log("------------------------------------------------------------------");
    }

    // Exibe o resultado final da corrida
    console.log(`🏁 Resultado final: ${character1.NOME} ${character1.PONTOS} x ${character2.PONTOS} ${character2.NOME}`);
    if (character1.PONTOS > character2.PONTOS) {
        console.log(`🏆 ${character1.NOME} venceu a corrida!`);
    } else if (character2.PONTOS > character1.PONTOS) {
        console.log(`🏆 ${character2.NOME} venceu a corrida!`);
    } else {
        console.log("A corrida terminou em empate!");
    }
}

// Função auto-invocável para iniciar o jogo
(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`);

    // Chama a função principal da corrida
    await playRaceEngine(player1, player2);
})();
