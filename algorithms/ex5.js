/*

Enunciado Ejercicio 5:
Dado un array de personas con nombres y apellidos
crear una función para ordenar el array por los apellidos
en orden alfabético

Ejemplo:
ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone"
]);

*/

function ordenarPorApellidos(personas) {
  const apellidos = personas.map((persona) => persona.split(" ")[1]).sort();

  const personaOrdenada = apellidos.map((apellido) => {
    const nombreOriginal = personas.find((nombreCompleto) => {
      return nombreCompleto.split(" ")[1] === apellido;
    });
    return nombreOriginal;
  });
  return personaOrdenada;
}

console.log(
  ordenarPorApellidos([
    "Víctor Robles",
    "Antonio Alcantara",
    "Al Pacino",
    "Robert DeNiro",
    "Brad Pitt",
    "Sylvester Stallone",
  ])
);
