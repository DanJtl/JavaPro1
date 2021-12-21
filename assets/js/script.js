let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}

let username = "per"
let message = "you have three new notifications"

console.log(message + "," + username + "!")