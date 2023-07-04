const button = document.getElementById("btn");
const box = document.getElementById("box");

let turn = 0;

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
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
button.onclick = function () {
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
