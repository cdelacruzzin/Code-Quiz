var start = document.querySelector('.start');
var time = document.querySelector('#timer');


start.addEventListener('click', function () {
setTime();
})


//sets a timer of 120s, and stops when it reaches 0s
function setTime() {
    var timeLeft = 120;
    time.textContent = timeLeft;

    var timeInterval = setInterval(function () {
        timeLeft--;
        time.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}