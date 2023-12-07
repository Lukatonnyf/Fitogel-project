const url = 'https://www.youtube.com/watch?v=cOdG4eACN2A&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm&index=16'
const btnComprar = document.querySelector('#compre-aqui')

function comprar(url) {
    const win = window.open(url, '_blank')
    window.focus()
}