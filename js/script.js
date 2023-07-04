const button = document.getElementById("btn");
const box = document.getElementById("box");

let turn = 0;

document.addEventListener("keydown", function (event) {//!sprawdzenie czy jakiś przycisk kliknięto i interpretacja to jako event
    if (event.key === "Enter") {//^jeśli ten event to enter to wykona funkcję
        const message = document.getElementById("message");
        const newMessage = document.createElement("div");

        if (turn % 2 === 0) {
            newMessage.className = "messageBox";
        } else {
            newMessage.className = "secondMessage";
        }

        newMessage.innerHTML = message.value;

        box.append(newMessage);
        message.value = "";

        turn++;
    }
});
