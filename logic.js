let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const botScorePara = document.querySelector("#bot-score");


const genBotChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}


const drawGame = () => {
    msg.innerText = "Game was Draw! Play again"
};

const showWinner = (userWin, userChoice, botChoice) => {
    if(userWin){
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `Congratulations You won! Your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor = "#8B5038" ;
    } else {
        botScore++
        botScorePara.innerText = botScore;
        msg.innerText = `Oops, You lost! ${botChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#B1754A";
    } 
    
}


const playGame = (userChoice) => {
    //Generate computer Choice
    const botChoice = genBotChoice();

    if(userChoice === botChoice) {
        //Draw Game!!
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = botChoice === "paper"? false : true;
        } else if(userChoice === "paper"){
            userWin = botChoice === "scissors"? false : true;
        } else {
            userWin = botChoice === "rock"? false : true; 
        }
        showWinner(userWin, userChoice, botChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})