/* Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas

Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23

*/

function differenceDays(date1, date2) {
  // check the dates are in a correct format
  date1 = date1 instanceof Date ? date1 : new Date(date1);
  date2 = date2 instanceof Date ? date2 : new Date(date2);

  // get the difference in milsec between dates
  const differenceMilSec = Math.abs(date1.getTime() - date2.getTime());
  // convert to day format
  const days = differenceMilSec / (1000 * 60 * 60 * 24);

  return days;
}

console.log(differenceDays("Dec1, 2023", "Dec 24, 2023"));
