var start = document.querySelector('.start');
var time = document.querySelector('#timer');
var radioDisplay = document.querySelector('.input-box');
var next = document.querySelector('#next');

var radios = document.querySelectorAll('input');
var labels = document.querySelectorAll('label');


start.addEventListener('click', function () {
setTime();
radioDisplay.setAttribute("style", "display: block");
question1();

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
    labels[0].textContent = "hello";
    labels[1].textContent = "my";
    labels[2].textContent = "name";
    labels[3].textContent = "carlos";






    //stores the value of the checked radio button to variable
    var selectedAns = document.querySelector('input[name="a"]:checked').value;
    return selectedAns;
}



