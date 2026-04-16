function login() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.email.toLowerCase() === email.toLowerCase())
    if(!user){
        alert("user not exist")
        return
    }
    if(password === user.password){
        alert("wellcome back")
        window.location.href = 'main.html'
    }else{
        alert("wrong password")
    }
}
function createid() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.email.toLowerCase() === email.toLowerCase())
    if(user){
        alert("user alredy exist")
        return
    }
    let newUser ={
        email : email,
        password: password
    }
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users));
    alert("id created")
    window.location.href = 'main.html'
}

