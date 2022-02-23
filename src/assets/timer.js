let seconds = 0
let timerId

function toggleTimer() {
  if (timerId) {
    timerId = clearInterval(timerId)
    return
  }

  timerId = setInterval(() => {
    ++seconds
    updateDisplay(secondsToHms(seconds))
  }, 1000)
}

function stopTimer() {
  timerId = clearInterval(timerId)
  seconds = 0
  updateDisplay('00:00:00')
}

function secondsToHms(elapsedSeconds) {
  const h = Math.floor(elapsedSeconds / 3600)
  const m = Math.floor((elapsedSeconds % 3600) / 60)
  const s = Math.floor((elapsedSeconds % 3600) % 60)

  const pad = (value) => (value < 10 ? '0' + value : value)

  return pad(h) + ':' + pad(m) + ':' + pad(s)
}
