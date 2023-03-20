function login(e) {
    if (e.innerText == "Login")
    {
        e.innerText = "Logout"
    }
    else if (e.innerText == "Logout")
    {
        e.innerText = "Login"
    }
}

function remove(e) {
    e.remove();
}

function like() {
    alert("Ninja was liked");
}