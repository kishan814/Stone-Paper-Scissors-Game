let userScore = 0;
let ComputerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const ComputerScorePara = document.querySelector("#Computer-score")

const genComputerChoice = () => {
    let options = ["rock","paper","scissor"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}
const drawGame = () => {
    console.log("game was draw. Play Again");
    msg.style.backgroundColor = "#081b31"

}

const showWinner = (userWin, userChoice, ComputerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! Your ${userChoice} beats ${ComputerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        ComputerScore++;
        ComputerScorePara.innerText = ComputerScore;
        msg.innerText = `You lost. ${ComputerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};
const playGame = (userChoice) => {
    const ComputerChoice = genComputerChoice();

    if(userChoice === ComputerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            ComputerChoice ==="paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = ComputerChoice === "scissor" ? false : true;

        } else {
            userWin = ComputerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, ComputerChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    });
});