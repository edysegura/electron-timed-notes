export default class HtmlService {
  #timer

  constructor(ElapsedTimer) {
    this.#timer = new ElapsedTimer(this.updateDisplay)
    this.init()
  }

  init() {
    this.setPlayButton()
    this.setStopButton()
  }

  updateDisplay(time) {
    const timerElement = document.querySelector('.time')
    timerElement.textContent = time
  }

  setPlayButton() {
    const btn = document.getElementById('btn-play')
    btn.addEventListener('click', () => {
      this.#timer.toggleTimer()
      this.toggleInputNote()
    })
  }

  setStopButton() {
    const btn = document.getElementById('btn-stop')
    btn.addEventListener('click', () => {
      this.#timer.stopTimer()
      this.disabledInputNote()
      this.clearInputNote()
    })
  }

  disabledInputNote() {
    const isDisabled = true
    this.toggleInputNote(isDisabled)
  }

  clearInputNote() {
    const input = document.getElementById('input-note')
    input.value = ''
  }

  toggleInputNote(isDisabled) {
    const input = document.getElementById('input-note')
    input.disabled = isDisabled ?? !input.disabled
  }
}
