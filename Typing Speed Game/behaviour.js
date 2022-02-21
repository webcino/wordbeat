window.addEventListener('load', init)

//global

//available levels
const levels = {
    easy: 6,
    medium: 4,
    hard: 2
}

// to change level
const currentlevel = levels.easy;

let time = currentlevel;
let score = 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'River',
    'Town',
    'Scene',
    'Build',
    'Guild',
    'Drain',
    'Sand',
    'Snow',
    'April',
    'Hunter',
    'Food',
    'Stun',
    'House',
    'Home',
    'Water',
    'Yard',
    'Wife',
    'Bead',
    'Chips',
    'Rolls',
    'Milk',
    'Shoes',
    'spray',
    'Medic',
    'Army',
    'Child',
    'Watch',
    'Shirt',
    'pants',
    'Socks',
    'Street',
    'Bank',
    'Money',
    'Cash',
    'Robber',
    'Thief',
    'Saint',
    'Hero',
    'Worship',
    'Kyle',
    'Nikita',
    'Sherne',
    'Handy',
    'Atha',
    'Rico',
    'Coffee',
    'Tea',
    'Cup',
    'Blanket',
    'Mat',
    'Room',
    'Suite',
    'Life',
    'Death',
    'Destiny',
    'Fate'
];

//Initialize Game
function init(){
    // show number of seconds in UI
    seconds.innerHTML = currentlevel;
    // load word from array
    showWord(words);
    //Start matching input on word input
    wordInput.addEventListener('input', startMatch);
    //call countdown every second
    setInterval(countdown, 1000);
   // check game status
   setInterval(checkStatus, 50);
}

//start match
function startMatch(){
    if(matchWords()){
       isPlaying = true;
       time = currentlevel + 1;
       showWord(words);
       wordInput.value = '';
       score++;
    }
    // if score = -1 display 0
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }
}

//Match currentWord to the word input
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!!';
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }

}

//pick and show random word
function showWord(words){
    // generate random array index
    const randIndex = Math.floor(Math.random()*words.length);
    //output random word
    currentWord.innerHTML = words[randIndex];
}

//countdown timer
function countdown(){
    // make sure time is not run out
    if(time > 0){
        time--;
    }else if(time === 0){
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}

//check game status
function checkStatus(){
    if(isPlaying && time === 0){
        message.innerHTML = 'GAME OVER!!!';
        score = -1;
    }
}