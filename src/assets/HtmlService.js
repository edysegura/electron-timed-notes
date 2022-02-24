export default class HtmlService {
  constructor() {
    this.setForm()
  }

  setForm() {
    const form = document.querySelector('form')
    form.addEventListener('submit', (event) => event.preventDefault())
  }
}
