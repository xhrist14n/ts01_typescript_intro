function saludo(person) {
    return "Hello, " + person.nombre + " " + person.apellido;
}
var user = { nombre: "Juan", apellido: "Martinez" };
document.body.innerHTML = saludo(user);
