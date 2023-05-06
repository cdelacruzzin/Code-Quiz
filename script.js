var start = document.querySelector('.start');
var time = document.querySelector('#timer');
var radioDisplay = document.querySelector('.input-box');
var next = document.querySelector('#next');

var radios = document.querySelectorAll('input[name="a"]');
var labels = document.querySelectorAll('label');


//a counter to keep track of which question we are on
var questionNum = 0;
var questionArray = [question1, question2, question3, question4];

var userAnsArray = [];

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
    //the for loop determines which button was checked, and stores it into 'answer' variable
    //creates an object, and stores the answer in the object.
    //stores the object in storage and JSON.stringify to convert it to a string
    if ((radios[0].checked == false && radios[1].checked == false && radios[2].checked == false && radios[3].checked == false)) {
    } else {
        if (questionNum < questionArray.length) {

            questionArray[questionNum]();

            var answer;
            for (const answered of radios) {
                if (answered.checked) {
                    answer = answered.value;
                    userAnsArray.push(answer);
                    break;
                }
            }

            var userAns = {
                ans: userAnsArray
            }

            console.log("object: ",userAns.ans);
            localStorage.setItem('userAns', JSON.stringify(userAns));

            questionNum++;
        } else {
            console.log("end");
        }
    }
    console.log(questionNum, "array: ", questionArray.length);
    console.log("answer for q", questionNum, " : ", answer);
    console.log(userAnsArray);
});



//when function is called, questions and answers change
function question1() {

    labels[0].textContent = "hello";
    labels[1].textContent = "my";
    labels[2].textContent = "name";
    labels[3].textContent = "carlos";


}

function question2() {
    labels[0].textContent = "a";
    labels[1].textContent = "s";
    labels[2].textContent = "d";
    labels[3].textContent = "f";


}
function question3() {
    labels[0].textContent = "q";
    labels[1].textContent = "w";
    labels[2].textContent = "e";
    labels[3].textContent = "r";

}
function question4() {
    labels[0].textContent = "3";
    labels[1].textContent = "f";
    labels[2].textContent = "g";
    labels[3].textContent = "d";

}


