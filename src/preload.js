// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { clipboard } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
  console.log('Ready for action!')
  setClipboardButton()
})

function setClipboardButton() {
  const button = document.getElementById('btn-clipboard')
  button.addEventListener('click', () => {
    clipboard.writeText(getNotes())
  })
}

function getNotes() {
  const textarea = document.querySelector('textarea')
  return textarea.value
}
