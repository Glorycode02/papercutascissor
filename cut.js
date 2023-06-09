let header = document.getElementById("header")
let generate1 = document.getElementById("firstgen");
let generate2 = document.getElementById("secondgen");
let player1 = document.getElementById("player_1")
let player2 = document.getElementById("player_2")
let answers = ['👊', '✌', '✋']
let another = ['✌', '✋', '👊']
let random = answers[Math.floor(Math.random() * answers.length)]
let secondanswers = another[Math.floor(Math.random() * another.length)]
let score1 = document.querySelector(".score1")
let score2 = document.querySelector(".score2")
console.log(score1 , score2);
let count = 0
//functionalities
generate1.onclick = function () {
    player1.innerHTML = random
}

generate2.onclick = function () {
    player2.innerHTML = secondanswers
}


let int = setInterval(() =>{
    let p1 = player1.textContent
    let p2 = player2.textContent
    if (p1 != '' && p2 != '') {
        if (p1 == '👊' && p2 == '👊') {
            alert('no winner')
            clearInterval(int)
            document.location = document.location
        }else if(p1 == '👊' && p2 == '✌'){
            alert('p1 wins')
            clearInterval(int)
            document.location = document.location
            
        }else if(p1 == '👊' && p2 == '✋'){
            alert('p2 wins')
            clearInterval(int)
            document.location = document.location
            
        }

        if (p1 == '✌' && p2 == '👊') {
            alert('p2 wins')
            clearInterval(int)
            document.location = document.location
        }else if(p1 == '✌' && p2 == '✌'){
            alert('no winner')
            clearInterval(int)
            document.location = document.location
            
        }else if(p1 == '✌' && p2 == '✋'){
            alert('p1 wins')
            clearInterval(int)
            document.location = document.location
            
        }

        if (p1 == '✋' && p2 == '👊') {
            alert('p1 wins')
            clearInterval(int)
            document.location = document.location
        }else if(p1 == '✋' && p2 == '✌'){
            alert('p2 wins')
            clearInterval(int)
            document.location = document.location
            
        }else if(p1 == '✋' && p2 == '✋'){
            alert('no winner')
            clearInterval(int)
            document.location = document.location
            
        }
    }
},10)

