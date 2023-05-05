var start = document.querySelector('.start');
var time = document.querySelector('#timer');


start.addEventListener('click', function () {
setTime();
})



function setTime() {
    
    var timeLeft = 2;
    
    time.textContent = timeLeft;

    var timeInterval = setInterval(function () {
        timeLeft--;
        time.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}