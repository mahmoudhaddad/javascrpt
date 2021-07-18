/*
function greeting(yourName){
    var result  = 'Hello ' + yourName;
    alert(result);
}

name = prompt('Whats your name?');

greeting(name)

function sumNumbers(num1, num2){
    var result = num1 + num2;

    console.log(result);
}

sumNumbers(10, 5);

//Challenge 1: Your age in days

function ageInDays(){
    let birthYear = prompt('What year where you born... Good friend?'),
        days = (2020 - birthYear) * 365,
        textAnswer = 'You are ' + days + ' days old.';
        
    document.getElementById('result').innerText = textAnswer;   
}

function reset(){
    document.getElementById('result').innerText = "";
}

//Challenge 2: Cats Generator

function generateCat(){
    let cat = document.createElement('img')

    cat.src = 'images/cat.jpg'
    cat.alt = 'cat'
    cat.title = 'cute cat'

    document.getElementById('cats-box').appendChild(cat)
}

//Challenge 3: rock, paper, scissors

/*
    Determine user select : ('rock', 'paper', 'scissors')
    Determine bot select : ('rock', 'paper', 'scissors')
    Determine result : ([0, 1], [0.5, 0.5], [1, 0])
    result : ({'color' : 'color'} , {'message' : 'message'})
    
 */

 function rpsGame(yourChoice){

    let humanChoice = yourChoice.id,
        botChoice = botSelect()

        console.log(humanChoice)

        console.log(botChoice)

    

    console.log(finalResult(determineResult(humanChoice, botChoice)))

    rpsFrontEnd(humanChoice, botChoice, finalResult(determineResult(humanChoice, botChoice)))

    
 }
 


 function botSelect(){

    let randomNumber = Math.floor(Math.random() * 3)

    return ['rock', 'paper', 'scissors'][randomNumber]
 }

function determineResult(userChoice, computerChoice){
    let gameDatabase = {
        'rock' : {
            'rock' : 0.5,
            'paper' : 0,
            'scissors' : 1
        },

        'paper' : {
            'rock' : 1,
            'paper' : 0.5,
            'scissors' : 0
        },

        'scissors' : {
            'rock' : 0,
            'paper' : 1,
            'scissors' : 0.5
        }
    }

    let userResult =  gameDatabase[userChoice][computerChoice],
        computerResult = gameDatabase[computerChoice][userChoice]

        return [userResult, computerResult]
}

function finalResult([userResult, computerResult]){
    if(userResult === 0){
        return {'message' : 'You Lost', 'color' : 'red'}
    } else if(userResult === 0.5){
        return {'message' : 'You Tied', 'color' : 'yellow'}
    }else{
        return {'message' : 'You Won', 'color' : 'green'}
    }
}

function rpsFrontEnd(imageHumanChoice, imageBotChoice, finalMessage){
    let rpsImagesDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    }

    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    let image1 = document.createElement('img'),
        h2 = document.createElement('h2'),
        image2 = document.createElement('img')

        image1.src = rpsImagesDatabase[imageHumanChoice]
        image2.src = rpsImagesDatabase[imageBotChoice]
        h2.innerText = finalMessage['message']

        image1.style.cssText = 'box-shadow: 0 10px 50px ' + finalMessage['color'] + '; color : ' + finalMessage['color']
        h2.style.cssText = 'color :' + finalMessage['color']

        if(image1.style.color === 'red'){
            image2.style.cssText = 'box-shadow: 0 10px 50px green'
        } else if(image1.style.color === 'green'){
            image2.style.cssText = 'box-shadow: 0 10px 50px red'
        }else{
            image2.style.cssText = 'box-shadow: 0 10px 50px yellow'
        }

        document.getElementById('rsp-container').appendChild(image1)
        document.getElementById('rsp-container').appendChild(h2)
        document.getElementById('rsp-container').appendChild(image2)

}

function retry(){
    location.reload()
}





