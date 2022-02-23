let seconds = 0
let timerId

function toggleTimer() {
  if (timerId) {
    timerId = clearInterval(timerId)
    return
  }

  timerId = setInterval(() => {
    ++seconds
    updateDisplay(getElapsedTime(seconds))
  }, 1000)
}

function stopTimer() {
  timerId = clearInterval(timerId)
  seconds = 0
  updateDisplay('00:00:00')
}

function updateDisplay(time) {
  const timerElement = document.querySelector('.time')
  timerElement.textContent = time
}

function setPlayButton() {
  const btn = document.getElementById('btn-play')
  btn?.addEventListener('click', () => toggleTimer())
}

function setStopButton() {
  const btn = document.getElementById('btn-stop')
  btn?.addEventListener('click', () => stopTimer())
}

function getElapsedTime(elapsedSeconds) {
  let hours = Math.floor(elapsedSeconds / 3600) // get hours
  let minutes = Math.floor((elapsedSeconds - hours * 3600) / 60) // get minutes
  let seconds = elapsedSeconds - hours * 3600 - minutes * 60 //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  return hours + ':' + minutes + ':' + seconds // Return is HH : MM : SS
}

setPlayButton()
setStopButton()
