const player1 = {
    NOME: "Mario" ,
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
}

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0
}

 //função de rolar o dado //
async function rollDice(){
   return Math.floor (Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random()  //esse comando vai me sortear um numero de 0 a 1
    let result 


    //fazer uma condição de sortear 
    switch (true) {
        case random < 0.33: //CASO O VALOR SEJA MENOR QUE 0.33 E UAM RETA
            result = "RETA"
            break; // ESSE COMANDO E PARA DE EXECUTAR
            case random < 0.66:
                result = "CURVA"
                break
        default: // BASICAMENTE SE NENHUM COMANDO A CIMA FOR VALIDO ELE VAI SER UM COMFRONTO
            result = "COMFRONTO"
    }

    return result //para ele retornar para função resultado 
}

async function playRaceEngine(character1, character2){
    //comando para rodar de uma rodada a 5 rodadas e mosta mensagem de 🏁 Rodada 1 assim vai 
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`)

        // sortear bloco
        let blok =  await getRandomBlock() //espere o getRandomBlock
        console.log(`Bolco: ${blok}`)
    }

    //rolar dados
    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()

    //teste de habilidade 
    let TotalTestSkill1 = 0
    let TotalTestSkill2 = 0
}


//AQUI E UMA FUNÇÃO AUTO INVOCAVEL() COM VAR DENTRO ${player1.NOME}  //
(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} E ${player2.NOME} começando... \n`)

    //await serve para uma função esperar a outra
    //e esse comando chama a função da linha 23
    await playRaceEngine(player1,player2)

})()

