let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function add() {
    count += 1
    countEl.textContent = count
}

function order() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
