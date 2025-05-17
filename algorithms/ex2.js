/*
Advertencias:

Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique

Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas

*/

function simplificarRuta(ruta) {
  let pila = [];
  const partes = ruta.split("/");
  for (const parte of partes) {
    if (parte === "..") {
      pila.pop();
    } else if (parte !== "." && parte !== "") {
      pila.push(parte);
    }
  }
  return partes;
}
