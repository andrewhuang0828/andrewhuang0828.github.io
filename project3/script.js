let secretNum = Math.floor((Math.random() * 100) + 1);

let score = 10;
let highScore = 0;

document.getElementById("rBtn").disabled = true;
console.log(secretNum);


document.getElementById("score").textContent = `Score : ${score}`;
document.getElementById("highscore").textContent = `High Score : ${highScore}`;


document.getElementById('btn').addEventListener("click", userGuess);
document.getElementById('rBtn').addEventListener("click", reset);



function userGuess(){
    let g = document.getElementById("guess").value;
    var node = document.createElement("LI");
    var textnode = document.createTextNode(document.getElementById("guess").value); 
    node.appendChild(textnode); 

    if (g == secretNum){
        
        correct();
        document.getElementById("list").appendChild(node);
    }
    else if(document.getElementById("guess").value.length == 0){
        document.getElementById("hint").textContent = "Please Guess a Number!";
    }

    else if (g < secretNum){
        document.getElementById("hint").textContent = "Too low! Guess Higher!";
        score -= 1;
        document.getElementById("score").textContent = `Score : ${score}`;
        document.getElementById("list").appendChild(node);
    }

    else if (g > secretNum){
        document.getElementById("hint").textContent = "Too High! Guess Lower!";
        score -= 1;
        document.getElementById("score").textContent = `Score : ${score}`;
        document.getElementById("list").appendChild(node);
    }
    
    else{
        document.getElementById("hint").textContent = "Please Guess a Number!";
    }
    document.input.reset()
}

function reset(){
    score = 10;
    secretNum = Math.floor((Math.random() * 100) + 1);
    document.getElementById("score").textContent = `Score : ${score}`;
    console.log(secretNum);
    document.getElementById("sb").style.backgroundColor = 'burlywood';
    document.getElementById("think").src = "img/thinking.jpg";
    document.getElementById("guess").style.opacity = 1;
    document.getElementById("btn").style.opacity = 1;
    document.getElementById("rBtn").style.opacity = 0;
    document.getElementById("hint").style.opacity = 1;
    document.getElementById("hint").textContent = "Guess a Number!";
    document.getElementById("a").textContent = "";
    document.getElementById("b").textContent = ``;
    document.getElementById("c").textContent = ``;
    document.getElementById("d").textContent = ``;
    document.getElementById("list").innerHTML = "";
}


function correct(){
    if(score > highScore){
        highScore = score;
    }
    
    document.getElementById("highscore").textContent = `High Score : ${highScore}`;
    document.getElementById("sb").style.backgroundColor = '#a1d95a';
    document.getElementById("think").src = "img/winner.jpg";
    document.getElementById("guess").style.opacity = 0;
    document.getElementById("btn").style.opacity = 0;
    document.getElementById("rBtn").style.opacity = 1;
    document.getElementById("hint").style.opacity = 0;
    document.getElementById("a").textContent = "Congratulations! ";
    document.getElementById("b").textContent = `Your guess was correct. ${secretNum} was my secret number `;
    document.getElementById("c").textContent = `Your Score: ${score}`;
    document.getElementById("d").textContent = `Best Score: ${highScore}`;
    document.getElementById("rBtn").disabled = false;
}

