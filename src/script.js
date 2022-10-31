const content = document.getElementById("inicioMensagem")
const button = document.getElementById("btnMensagem")

const geradorpaises = [
    ["Brasil", "Samba", 0],
    ["Argentina", "Tango", 0],
    ["Alemanha", "Schnitzel", 0],
    ["Itália", "Pizza", 0],
    ["Japão", "Tokyo Drift", 0],
    ["Austrália", "Insetos que te matam", 0],
    ["Russia", "Vodka", 0],
    ["Canada", "Frio", 0],
    ["Grécia", "Antiguidades", 0],
    ["Estados Unidos", "Pessoas ricas", 0],
]

const handleBtn = () => {
    const number = Math.floor(Math.random() * geradorpaises.length)
    geradorpaises[number][2] += 1
    content.innerHTML = 
    `
    <p>País sorteado: <span>${geradorpaises[number][0]} </span></p>
    <p>É lembrado por: <span>${geradorpaises[number][1]} </span></p>
    <p>Nº de vezes sorteado: <span>${geradorpaises[number][2]} </span></p>
    `
}

button.addEventListener('click', handleBtn);

$(document).ready(function () {
    tippy('.tippy', {
        theme: 'light',
        size: 'big',
        arrow: true
    })
});
