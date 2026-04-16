let users = [
  { email: "test@gmail.com", password: "1234" },
  { email: "admin@gmail.com", password: "admin" }
];

function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.email === email);

  if (!user) {
    alert("User not found ❌");
    return;
  }

  if (user.password === password) {
    alert("Login successful ✅");
  } else {
    alert("Wrong password ❌");
  }
}

function createAccount(email, password) {
  let user = users.find(u => u.email === email);

  if (user) {
    console.log("User already exists ❌");
    return;
  }

  users.push({ email, password });
  console.log("Account created ✅");
}