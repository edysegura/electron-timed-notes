let seconds = 0
let timerId

function toggleTimer() {
  if (timerId) {
    timerId = clearInterval(timerId)
    return
  }

  timerId = setInterval(() => {
    ++seconds
    updateDisplay(seconds)
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

setPlayButton()
setStopButton()