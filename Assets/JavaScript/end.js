const username = document.getElementById("username");

username.addEventListener("keyup", () => {
    console.log(usernameInput.value);
});


saveHighScore = (e) => {
    console.log("clicked the saved button")
    e.preventDefault();

};

