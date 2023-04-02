var stopwatch = document.getElementById('stopwatch');
var startButton = document.getElementById('start');
var pauseButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');

var seconds = 0;
var minutes = 0;
var hours = 0;

var run = false;

let startTime = 0;
let elapsedTime = 0;
let interval;

startButton.addEventListener('click', function() {
    let display = '00:00:00';
    intervalId = setInterval(function() {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
      display = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
      stopwatch.textContent = display;
    }, 1000);
});

pauseButton.addEventListener('click', function() {
    if (run) {
        clearInterval(intervalId);
        run = false;
    } else {
        run = true;
    }
});

resetButton.addEventListener('click', function() {
    clearInterval(intervalId);
    stopwatch.textContent = '00:00:00';
    seconds = 0;
    minutes = 0;
    hours = 0;
    run = false;
});
