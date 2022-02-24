import ElapsedTimer from './ElapsedTimer.js'
import HtmlService from './HtmlService.js'

const elapsedTimer = new ElapsedTimer(updateDisplay)
new HtmlService()

function updateDisplay(time) {
  const timerElement = document.querySelector('.time')
  timerElement.textContent = time
}

function setPlayButton() {
  const btn = document.getElementById('btn-play')
  btn?.addEventListener('click', () => elapsedTimer.toggleTimer())
}

function setStopButton() {
  const btn = document.getElementById('btn-stop')
  btn?.addEventListener('click', () => elapsedTimer.stopTimer())
}

setPlayButton()
setStopButton()
