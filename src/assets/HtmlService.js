export default class HtmlService {
  #timer

  constructor(ElapsedTimer) {
    this.#timer = new ElapsedTimer(this.updateDisplay)
    this.init()
  }

  init() {
    this.setPlayButton()
    this.setStopButton()
    this.setStopDialog()
    this.setInputNote()
    this.setDeleteNotes()
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
      const dialog = document.getElementById('confirm-dialog')
      dialog.showModal()
    })
  }

  setStopDialog() {
    const dialog = document.getElementById('confirm-dialog')
    dialog.addEventListener('close', () => {
      if (dialog.returnValue === 'yes') {
        this.#timer.stopTimer()
        this.disabledInputNote()
        this.clearInputNote()
      }
    })
  }

  setInputNote() {
    const input = document.getElementById('input-note')
    input.addEventListener('keyup', (event) => {
      if (event.key.toUpperCase() === 'ENTER') {
        const minutes = this.formantMinutes(this.#timer.lap())
        const timedNote = `${minutes}m - ${input.value}`
        this.addNote(timedNote)
        this.clearInputNote()
      }
    })
  }

  setDeleteNotes() {
    const btn = document.getElementById('btn-delete-notes')
    btn.addEventListener('click', () => {
      confirm('Delete notes?') && this.clearNotes()
    })
  }

  formantMinutes(minutes) {
    const formattedMin = minutes.toFixed(0)
    return String(formattedMin).padStart(2, '0')
  }

  addNote(note) {
    const textarea = document.querySelector('textarea')
    textarea.value += `${note}\n`
  }

  disabledInputNote() {
    const isDisabled = true
    this.toggleInputNote(isDisabled)
  }

  clearInputNote() {
    const input = document.getElementById('input-note')
    input.value = ''
  }

  clearNotes() {
    const textarea = document.querySelector('textarea')
    textarea.value = ''
  }

  toggleInputNote(isDisabled) {
    const input = document.getElementById('input-note')
    input.disabled = isDisabled ?? !input.disabled
    if (!input.disabled) {
      input.focus()
    }
  }
}
