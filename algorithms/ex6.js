/*

Enunciado Ejercicio 6:
Dado un año actual, crea un programa que me muestre
los años bisiestos que habrá en los proximos 30 años

Ejemplo:
bisiestos(2023);

// Salida:
2024
2028
2032
2036
2040
2044
2048
2052

*/

function bisiestos(anio) {
  // tener varible con limite de años
  const limite = 50;

  // Bucle que se ejecuten tantas veces como años limite tengamos
  for (i = 0; i < limite; i++) {
    // Comprobar si el dia 29 de febrero existe en el año actual
    const fecha = new Date(anio, 1, 29).getMonth();
    if (fecha === 1) {
      console.log(anio);
    }
    anio++;
  }
  // si sí existe, mostrar año bisiesto
}

bisiestos(2025);
