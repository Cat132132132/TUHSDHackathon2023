// Get the HTML elements that we'll be interacting with
const stopwatch = document.getElementById("stopwatch");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

// Set up our initial values for time
let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;

// Update the stopwatch display with the current time
function updateStopwatch() {
  // Format the time into a string
  const timeString =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  // Update the stopwatch display
  document.getElementById("stopwatch").textContent = timeString;
}

// Start the stopwatch
function startStopwatch() {
  intervalId = setInterval(() => {
    // Increment the time by one second
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }

    // Update the stopwatch display
    updateStopwatch();
  }, 1000);
}

// Pause the stopwatch
function pauseStopwatch() {
  clearInterval(intervalId);
  intervalId = null;
}

// Reset the stopwatch
function resetStopwatch() {
  // Reset the time values
  hours = 0;
  minutes = 0;
  seconds = 0;

  // Stop the stopwatch
  pauseStopwatch();

  // Update the stopwatch display
  updateStopwatch();
}