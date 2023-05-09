var start = document.querySelector('.start');
var time = document.querySelector('#timer');
var radioDisplay = document.querySelector('.input-box');
var next = document.querySelector('#next');
var radios = document.querySelectorAll('input');
var labels = document.querySelectorAll('label');
var form = document.querySelectorAll('.content');

//a counter to keep track of which question we are on
var questionNum = 0;
var questionArray = [question2, question3, question4, gameOver];

var answerKey = {
    ans1: 4,
    ans2: 2,
    ans3: 3,
    ans4: 1
};

//when clicked, timer starts, displays the questions, and calls the question1 fuinction
start.addEventListener('click', function () {
    initialSet.initialTime.startTime();
    radioDisplay.setAttribute("style", "display: flex");



});

//sets a timer of 120s, and stops when it reaches 0s or the game over function is called
//stores the time left after the time interval ends to the user score object
// function setTime() {
//     var timeLeft = 120;


//     var timeInterval = setInterval(function () {
//         timeLeft--;
//         time.textContent = timeLeft;

//         if (timeLeft === 0 || (userScore.userAns.length === 4)) {
//             clearInterval(timeInterval);
//         }

//         userScore.userTimeFinish = timeLeft; //when clearInterval condition is true, the time will be recorded in the object
//         time.textContent = timeLeft + 1;
//     }, 1000);


// }



function nextBtn() {

    next.addEventListener('click', function (event) {
        event.preventDefault();
        //checks if any of the buttons is checked. nothing happends if nothing is checked. if checked, 
        //the corresponding function will be called.
        //will show next question if button is checked, otherwise nothing will happen
        //the for loop determines which button was checked, and stores it into 'answer' variable
        //after all questions answered, function to savwe answers will be called
        //once all questions answered, 'next' button will stop working


        if ((radios[0].checked == false && radios[1].checked == false && radios[2].checked == false && radios[3].checked == false)) {
        } else {
            if (questionNum < questionArray.length) {

                var answer;
                for (const answered of radios) {
                    if (answered.checked) {
                        answer = parseInt(answered.value); //parses answer from string to int
                        selectedQ = document.querySelector(`label[for="${answered.id}"]`).textContent; //stored the label corresponding to the selected radio button into a variable"

                        userScore.userAns.push("Q" + (questionNum + 1) + ": " + selectedQ);
                        userScore.userAnsVal.push(answer);
                        break;
                    }
                }
                questionArray[questionNum]();
                questionNum++;
            }
        }

    });

}
nextBtn();


//when function is called, questions and answers change

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


var userScore = {
    userCorrectAnsNum: 0,
    userTimeFinish: 0,
    userAnsVal: [],
    userAns: []
};


//compares the user answer value array to the answerKey object
//adds a check mark to the correct answer
//adds an x to the wrong answers
//updates the number of correct answers the user got right
//stores the userScore object to JSON Stringfy
function gameOver() {
    var counter = 0;
    for (let property in answerKey) {
        if (answerKey[property] === userScore.userAnsVal[counter]) {
            userScore.userAns[counter] += '✔️';
            userScore.userCorrectAnsNum++;
        } else {
            userScore.userAns[counter] += '❌';
        }
        counter++;
    }
    localStorage.setItem('userScore', JSON.stringify(userScore));
    console.log("time: ", userScore.userTimeFinish);
    console.log('length: ', userScore.userAns.length);
    console.log(userScore.userTimeFinish);
    console.log(initialSet.initialQs.a_zero);
    renderScore();

}
function renderScore() {
    // Use JSON.parse() to convert text to JavaScript object
    //shows the score
    var finalScore = JSON.parse(localStorage.getItem("userScore"));
    var liElem = document.querySelectorAll('li');
    document.querySelector('.content').setAttribute("style", "display: none");
    document.querySelector('section').setAttribute("style", "display: flex");

    if (finalScore !== null) {
        document.querySelector('.correctAns').textContent = finalScore.userCorrectAnsNum;
        document.querySelector('.final-time').textContent = finalScore.userTimeFinish;

        for (var a = 0; a < 4; a++) {
            liElem[a].textContent = finalScore.userAns[a];
        }

    }
    // start.addEventListener('click', function () {

        

    //     document.querySelector('.content').removeAttribute("style", "display: none");
    //     document.querySelector('section').removeAttribute("style", "display: flex");


    // });
}

var initialSet = {

    initialTime: {
        timer: 121,
        timeInterval: null,
        startTime: function () {

            this.timeInterval = setInterval(function () {
                time.textContent = initialSet.initialTime.timer;
                initialSet.initialTime.timer--;
                if (initialSet.initialTime.timer === 0 || (userScore.userAns.length === 4)) {
                    clearInterval(initialSet.initialTime.timeInterval);
                }
                userScore.userTimeFinish = initialSet.initialTime.timer; //when clearInterval condition is true, the time will be recorded in the object
                time.textContent = initialSet.initialTime.timer + 1;
            }, 1000);

            console.log("timer: ", initialSet.initialTime.timer);
        },

    },
//initialSet.initialTime.timer vs this.timer???





    initialQs: {
        a_zero: document.getElementById('a_zero').textContent,
        a_one: document.getElementById('a_one').textContent,
        a_two: document.getElementById('a_two').textContent,
        a_three: document.getElementById('a_three').textContent,
    }
};

// initialSet.initialTime.startTime();
// console.log(initialSet.initialTime.timer);


//fix timer!! there is a 1 second delay
//start button needs to run again
//when start button is clicked more than once, the timer stops working
// subtract time from timer when user answers incorrect
