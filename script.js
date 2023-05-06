var start = document.querySelector('.start');
var time = document.querySelector('#timer');
var radioDisplay = document.querySelector('.input-box');
var next = document.querySelector('#next');

// var questions = [question1(), question2(), question3(), question4()];
// var correctAns = []


start.addEventListener('click', function () {
setTime();
radioDisplay.setAttribute("style", "display: block");

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

next.addEventListener('click', function(event){
    event.preventDefault();
})

var questionObj = {
    question1: question1(),


}

function question1(){
    //stores the value of the checked radio button to variable
    var selectedAns = document.querySelector('input[name="a"]:checked').value;
    return selectedAns;
}



