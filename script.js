var start = document.querySelector('.start');
var time = document.querySelector('#timer');
var radioDisplay = document.querySelector('.input-box');
var next = document.querySelector('#next');
var radios = document.querySelectorAll('input');
var labels = document.querySelectorAll('label');

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
    setTime();
    radioDisplay.setAttribute("style", "display: flex");
    
    
});

//sets a timer of 120s, and stops when it reaches 0s or the game over function is called
//stores the time left after the time interval ends to the user score object
function setTime() {
    var timeLeft = 120;
    time.textContent = timeLeft; 

    var timeInterval = setInterval(function (event) {
        timeLeft--;
        time.textContent = timeLeft;

        if (timeLeft === 0 || (userScore.userAns.length==4)) {
            clearInterval(timeInterval);
        }
        userScore.userTimeFinish = timeLeft; //when clearInterval condition is true, the time will be recorded in the object
    }, 1000);

    
}
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
        if (questionNum < questionArray.length ) {

            var answer;
            for (const answered of radios) {
                if (answered.checked) {
                    answer = parseInt(answered.value); //parses answer from string to int
                    selectedQ = document.querySelector(`label[for="${answered.id}"]`).textContent; //stopred the label sorresponding to the selected radio button into a variable"

                    userScore.userAns.push("Q"+ (questionNum+1)+ ": "+ selectedQ);
                    userScore.userAnsVal.push(answer);
                    break;
                }
            }
            questionArray[questionNum]();
            questionNum++;
        }
    }

});

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
function gameOver(){
    var counter = 0;
    for(let property in answerKey){
        if(answerKey[property] === userScore.userAnsVal[counter]){
            userScore.userAns[counter] += '✔️';
            userScore.userCorrectAnsNum++;
        } else {
            userScore.userAns[counter] += '❌';
        }
        counter++;
    }
    localStorage.setItem('userScore', JSON.stringify(userScore));
    console.log(userScore.userTimeFinish);
    renderScore();
    
}

function renderScore(){

     var finalScore = JSON.parse(localStorage.getItem("userScore"));
    // console.log(userScore.userTimeFinish);

     if (finalScore !== null){
        document.querySelector('.correctAns').textContent = finalScore.userCorrectAnsNum;
        document.querySelector('.final-time').textContent = finalScore.userTimeFinish;
     }
}
