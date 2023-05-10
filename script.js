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
var counter = 0;

var answerKey = {
    ans1: 4,
    ans2: 2,
    ans3: 3,
    ans4: 1
};

var answerKey = [4, 2, 3, 1];
//an object to store user's data
var userScore = {
    userCorrectAnsNum: 0,
    userTimeFinish: 0,
    userAnsVal: [],
    userAns: []
};

//when clicked, timer starts, displays the questions, and calls the function to initialize the variables
start.addEventListener('click', function () {
    initialize();
    initialSet.initialTime.startTime();
    radioDisplay.setAttribute("style", "display: flex");
    document.querySelector('.content').setAttribute("style", "display: block");
    document.querySelector('section').setAttribute("style", "display: none");
    console.log(userScore);
});

function initialize() {
    initialSet.initialTime.timer = 120;
    userScore.userAns.splice(0);
    questionNum = 0;
    userScore.userAnsVal.splice(0);
    counter = 0;
    userScore.userCorrectAnsNum = 0;

    for (var a = 0; a < initialSet.initialQs.length; a++) {
        labels[a].textContent = initialSet.initialQs[a];
    }
}

var initialSet = {
    //
    initialTime: {
        timer: 120,
        timeInterval: null,
        startTime: function () {
            var timeInterval = setInterval(function () {
                initialSet.initialTime.timer--;
                time.textContent = initialSet.initialTime.timer;
                if (initialSet.initialTime.timer === 0 || (userScore.userAns.length === 4)) {
                    clearInterval(timeInterval);
                }
                userScore.userTimeFinish = initialSet.initialTime.timer; //when interval gets stopped, the time will be stored in userTimeFinish object
                time.textContent = initialSet.initialTime.timer +1;
            }, 1000);
        },
    },
    //there are the initial question on the html doc
    initialQs: [document.getElementById('a_zero').textContent, document.getElementById('a_one').textContent, document.getElementById('a_two').textContent, document.getElementById('a_three').textContent,]
};
next.addEventListener('click', function (event) {
    event.preventDefault();
    //checks if any of the buttons is checked. nothing happends if nothing is checked. if checked, 
    //the corresponding function will be called.
    //will show next question if button is checked, otherwise nothing will happen
    //the for loop determines which button was checked, and stores it into 'answer' variable
    //after all questions answered, function to save answers will be called
    //once all questions answered, the gameOver function will be called
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
            console.log(counter);
            counter++;
            if (answerKey[counter] !== userScore.userAnsVal[counter] && (counter < 4)) {
                initialSet.initialTime.timer -= 5;
            }
            
            questionArray[questionNum]();//calls the element function of questionArray with questionNum as its index
            questionNum++;
        }
    }
});
//when functions are called, the labels' text content will change to questions for the corresponding question
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
function gameOver() {

    isCorrect();//calls the function to check which questions are correct or
    localStorage.setItem('userScore', JSON.stringify(userScore));//stores the userScore object to JSON Stringfy
    console.log(userScore);
    renderScore();

}
function renderScore() {
    //shows the score
    var finalScore = JSON.parse(localStorage.getItem("userScore"));   // Use JSON.parse() to convert text to JavaScript object
    var liElem = document.querySelectorAll('li');

    //hides the question form, and shows the results section
    document.querySelector('.content').setAttribute("style", "display: none");
    document.querySelector('section').setAttribute("style", "display: flex");

    if (finalScore !== null) {
        document.querySelector('.correctAns').textContent = finalScore.userCorrectAnsNum; //shows the number of correct answers the user got

        document.querySelector('.final-time').textContent = initialSet.initialTime.timer; // shows the time when user finished quiz

        for (var a = 0; a < 4; a++) {
            liElem[a].textContent = finalScore.userAns[a];
        }
    }
}
function isCorrect() {
    counter = 0;
    for (var a = 0; a < answerKey.length; a++) {
        if (answerKey[counter] === userScore.userAnsVal[counter]) {//compares the user answer value array to the answerKey object
            userScore.userAns[counter] += '✔️';//adds a check mark to the correct answer
            userScore.userCorrectAnsNum++;//updates the number of correct answers the user got right
        } else {
            userScore.userAns[counter] += '❌';//adds an x to the wrong answer
        }
        counter++;//updates the counter for how many questions have been answered
    }
}
