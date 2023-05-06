var start = document.querySelector('.start');
var time = document.querySelector('#timer');
var radioDisplay = document.querySelector('.input-box');
var next = document.querySelector('#next');

var radios = document.querySelectorAll('input');
var labels = document.querySelectorAll('label');

//a counter to keep track of which question we are on
var questionNum = 0;
var questionArray = [question1, question2, question3];

start.addEventListener('click', function () {
setTime();
radioDisplay.setAttribute("style", "display: block");

navigate(questionNum);



});

//sets a timer of 120s, and stops when it reaches 0s
function setTime() {
    var timeLeft = 120;
    time.textContent = timeLeft;``

    var timeInterval = setInterval(function () {
        timeLeft--;
        time.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}




function nextQ(){
    console.log(questionNum);
    next.addEventListener('click', function(event){
    event.preventDefault();
    questionNum++;
    navigate(questionNum);
    
})
}


function navigate(questionNum){
    if(questionNum < questionArray.length){
        questionArray[0]();
    }
    
}


//when function is called, questions and answers change
function question1(){
    labels[0].textContent = "hello";
    labels[1].textContent = "my";
    labels[2].textContent = "name";
    labels[3].textContent = "carlos";
    //stores the value of the checked radio button to variable

    nextQ();

}

function question2(){
    labels[0].textContent = "a";
    labels[1].textContent = "s";
    labels[2].textContent = "d";
    labels[3].textContent = "f";
}
function question3(){
    labels[0].textContent = "q";
    labels[1].textContent = "w";
    labels[2].textContent = "e";
    labels[3].textContent = "r";
}
function question4(){
    
}


