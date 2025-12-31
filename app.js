let compScore=0;
let userScore=0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
user = document.querySelector("#userScore");
comp = document.querySelector("#compScore");

//Play game
const playGame = (userChoice)=>{
    console.log("User choice ",userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice ",compChoice);
    
    //Draw
    if(compChoice===userChoice){
        gameDraw();
    } 

    //other wins
    if(userChoice==="paper" && compChoice==="rock"){
        userWin();
    } else if(userChoice==="paper" && compChoice==="scissors"){
        compWin();
    } else if(userChoice==="scissors" && compChoice==="paper"){
        userWin();
    } else if(userChoice==="scissors" && compChoice==="rock"){
        compWin();
    } else if(userChoice==="rock" && compChoice==="scissors"){
        userWin();
    } else if(userChoice==="rock" && compChoice==="paper"){
        compWin();
    }
};

//computer choice
const genCompChoice = () =>{
    const options = ['rock','paper','scissors'];
    const compChoice = Math.floor(Math.random()*3);
    return options[compChoice];
};


// User Choice
choice.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const gameDraw = (userChoice,compChoice)=>{
    msg.style.backgroundColor="rgb(26, 24, 39)";
    msg.innerText="Game Draw! , Try again";
    console.log("Game Draw");
}

const userWin = () =>{
    userScore++;
    user.innerText=userScore;
    msg.style.backgroundColor="Green";
    msg.innerText="You Won :), Try again";
    console.log("User Won");
}

const compWin =() =>{
    compScore++;
    comp.innerText=compScore;
    msg.style.backgroundColor="Red";
    msg.innerText="Computer Won :(, Try again";
    console.log("Computer won");
}

