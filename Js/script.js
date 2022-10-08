/* Sumar dos números. */
function sumar(valor) {
    var total = 0;
    valor = parseInt(valor); // Convertir el valor a un entero (número).

    total = document.getElementById('spTotal').innerHTML;

    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    total = (total == null || total == undefined || total == "") ? 0 : total;