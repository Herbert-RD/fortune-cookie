
let messages = 
['O bom-senso vale mais do que muito conhecimento.',
'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
'São os nossos amigos que nos ensinam as mais valiosas lições.',
'Aquele que se importa com o sentimento dos outros, não é um tolo.',
'A adversidade é um espelho que reflete o verdadeiro eu.']


const fortuneCookie = document.getElementById('fortuneCookieButton')
const screen1 = document.getElementById('screen1')
const screen2 = document.getElementById('screen2')
const messageP = document.getElementById('messageP')
const tryAgain = document.getElementById('tryAgain')


fortuneCookie.addEventListener("click", (e) => {
  e.preventDefault
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')

  messageP.innerHTML = messages[Math.floor(Math.random() * 5)]
})

tryAgain.addEventListener("click", (e) => {
  e.preventDefault
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
})