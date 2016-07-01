
interface Person {
    firstName: string;
    lastName: string;
}


interface User {
    login: string;
    password: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

function login(user: User){
  return "Your access was granted to: "+user.login+" with  pass: "+user.password;

}

var user;
for(var i=0;i<10;i++){
	user = { login: "Samudio", password: "Lopez" };
	document.body.innerHTML += "<br>" + login(user);
}
