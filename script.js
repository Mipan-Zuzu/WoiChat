const socket = io("http://localhost:3000");

const form = document.getElementById("chat-form");
const input = document.getElementById("message");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit("chat message", input.value);
        input.value = "";
    }
});

socket.on("chat message", (msg) => {
    const div = document.createElement("div");
    div.classList.add("message");
    div.textContent = msg;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
});
