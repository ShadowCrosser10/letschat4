function login() {
        username = document.getElementById("user_input").value;
        localStorage.setItem("Username is; ", username); 
        window.location = "rooms.html";   
    
}