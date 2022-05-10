const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    // console.dir(loginInput.value);
    // const username = loginInput.value;
    // console.log(username);
    // if (username === "") {
    //     alert("Please write your name");
    // } else if(username.length > 15) {
    //     alert("Your name is too long.");
    // }
    
    event.preventDefault();
    console.log(loginInput.value);
    const username = loginInput.value
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginButton.addEventListener("click", onLoginSubmit);

//submit기능
loginForm.addEventListener("submit", onLoginSubmit);