class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}
function saludo(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Juan", "M.", "Martinez");
document.body.innerHTML = saludo(user);
