var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
})();
function saludo(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Juan", "M.", "Martinez");
document.body.innerHTML = saludo(user);
