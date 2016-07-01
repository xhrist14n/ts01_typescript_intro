
interface Persona {
    nombre: string;
    apellido: string;
}
function saludo(person: Persona) {
    return "Hello, " + person.nombre + " " + person.apellido;
}

var user = { nombre: "Juan", apellido: "Martinez" };

document.body.innerHTML = saludo(user);
