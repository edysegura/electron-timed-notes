let seconds = 0
let timerId

function toggleTimer(callback) {
  if (timerId) {
    timerId = clearInterval(timerId)
    return
  }

  timerId = setInterval(() => {
    ++seconds
    callback(seconds)
  }, 1000)
}

function stopTimer() {
  timerId = clearInterval(timerId)
  seconds = 0
  callback('00:00:00')
}

export function secondsToHms(elapsedSeconds) {
  const hours = Math.floor(elapsedSeconds / 3600)
  const minutes = Math.floor((elapsedSeconds % 3600) / 60)
  const seconds = Math.floor((elapsedSeconds % 3600) % 60)

  const pad = (value) => (value < 10 ? '0' + value : value)

  return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
}
