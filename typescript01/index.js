function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function login(user) {
    return "Your access was granted to: " + user.login + " with  pass: " + user.password;
}
var user;
for (var i = 0; i < 10; i++) {
    user = { login: "Samudio", password: "Lopez" };
    document.body.innerHTML += "<br>" + login(user);
}
