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

//string methods

const string = 'hello';

console.log(string.length)

console.log('hello\fworld')

console.log(string.indexOf('ll'))

console.log(string.replace('ello','i'))

console.log(string.toUpperCase())

console.log(string.toLowerCase())

console.log(string.charAt(0))

console.log(string[0])

console.log(string.split(''))

console.log(string.split('l'))

//Arrays

const animals = ['dog', 'cat', 'horse', 'wolf']

fruits = new Array('banana', 'apple', 'pear', 'orange')

console.log(typeof(animals))

console.log(typeof(fruits))

console.log(fruits)

console.log(animals)

console.log(animals[2])

fruits[1] = 'pineapples'

console.log(fruits[1])

for(let i = 0; i < animals.length; i++){
    console.log(animals[i])
}

//array common methods

console.log('toString ' + fruits.toString())

console.log('join ' + fruits.join(' * '))

console.log('push ' + fruits.push('apple'), fruits) //appends item in the last of an array

fruits[fruits.length] = 'new fruit' //appends item in the last of an array
console.log(fruits)

console.log('pop ' + fruits.pop(), fruits) //removes last item from an array

console.log('unshift ' + fruits.unshift('Strawberries') , fruits) //appends item in the first of an array

console.log('shift ' + fruits.shift() , fruits) //removes first item from an array

const fruitsAndAnimals = fruits.concat(animals) //concatenate array with another array
console.log('concat ' + fruitsAndAnimals)

console.log('reverse ' + fruitsAndAnimals.reverse()) //reveres an array

const numbers = new Array()

for(let num = 0; num <= 10; num++){
    numbers.push(num)
}

console.log(numbers)

console.log('sort ' + numbers.sort(function(a,b){return a - b})) // sorts an array in ascending order

console.log('sort ' + fruits.sort(function(a,b){return a - b})) // sorts an array in ascending order

console.log('reverse sort ' + numbers.sort(function(a,b){return b - a})) //sorts an array in descending order (dosen't work with strings array)

//Objects

let me = {
    firstName : 'Mahmoud',
    lastName : 'AL-Haddad',
    age : 17,
    myInfo : function(){
        return me.firstName + ' ' + me.lastName + '\n' + me.age
    }
}

console.log(me.firstName , me.lastName , me['age'])

me.age = 16.3 //Change value

console.log(me.firstName , me.lastName , me['age']) 

me.age++ //Change numbers value

console.log(me.firstName , me.lastName , me['age'])

console.log(me.myInfo())

// if else

var age = prompt('How old are you?')

if ( (age >= 18) && (age <= 32) ){

    console.log('You are welcome')

} else {

    console.log('this not your place')
}

//switch statment


let sat = 1,
    sun = 2,
    mon = 3,
    tues = 4,
    wedn = 5,
    thirs = 6,
    friday = 7;

    switch(sun){
        case 6, 7:
            console.log('weekend')
            break;
        default :
            console.log('weekday')               
            
    }
*/

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





