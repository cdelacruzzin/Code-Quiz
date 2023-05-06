var start = document.querySelector('.start');
var time = document.querySelector('#timer');
var radioDisplay = document.querySelector('.input-box');
var next = document.querySelector('#next');

var radios = document.querySelectorAll('input[name="a"]');
var labels = document.querySelectorAll('label');


//a counter to keep track of which question we are on
var questionNum = 0;
var questionArray = [question1, question2, question3, question4];

start.addEventListener('click', function () {
    setTime();
    radioDisplay.setAttribute("style", "display: block");

    question1();

});

//sets a timer of 120s, and stops when it reaches 0s
function setTime() {
    var timeLeft = 120;
    time.textContent = timeLeft; ``

    var timeInterval = setInterval(function () {
        timeLeft--;
        time.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}


console.log(this)

// && radios[1] &&radios[2] &&radios[3]
next.addEventListener('click', function (event) {
    event.preventDefault();

    //checks if any of the buttons is checked. nothing happends if nothing is checked. if checked, 
    //the corresponding function will be called.
    //will show next question if button is checked, otherwise nothing will happen
    if ((radios[0].checked == false && radios[1].checked == false && radios[2].checked == false && radios[3].checked == false)) {
    } else {
        if (questionNum < questionArray.length) {
            questionArray[questionNum]();

            for (const answered of radios) {
                if (answered.checked) {
                    console.log(answered.value);
                    break;
                }
            }





        } else {
            console.log("end");
        }
    }
    console.log(questionNum, "array: ", questionArray.length);
});



//when function is called, questions and answers change
function question1() {
    questionNum++;
    labels[0].textContent = "hello";
    labels[1].textContent = "my";
    labels[2].textContent = "name";
    labels[3].textContent = "carlos";


}

function question2() {
    questionNum++;
    labels[0].textContent = "a";
    labels[1].textContent = "s";
    labels[2].textContent = "d";
    labels[3].textContent = "f";


}
function question3() {
    questionNum++;
    labels[0].textContent = "q";
    labels[1].textContent = "w";
    labels[2].textContent = "e";
    labels[3].textContent = "r";

}
function question4() {
    questionNum++;
    labels[0].textContent = "3";
    labels[1].textContent = "f";
    labels[2].textContent = "g";
    labels[3].textContent = "d";

}


