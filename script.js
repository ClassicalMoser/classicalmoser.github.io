let secretMessage = document.getElementById("secret-message");

let secretButton = document.getElementById("secret-button");

secretButton.onclick = function () {(secretMessage.innerHTML = "You found the secret button!")};