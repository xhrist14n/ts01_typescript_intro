//sample2.ts
function saludo(person: string) {
    return "Hello, " + person;
}
var user = "<strong>Compilando codigo de prueba</strong>";
document.body.innerHTML = saludo(user);
