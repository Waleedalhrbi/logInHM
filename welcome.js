let user = JSON.parse(localStorage.getItem("user"));
        
if (user) {
   
    document.getElementById("username").textContent = "Welcome mr " + user.name;
} else {
    window.location.href = "index.html";
}


document.getElementById("logoutBtn").onclick = function() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
};