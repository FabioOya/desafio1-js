function produto(array) {
    var resultado = 1;
    for (var i = 0; i<array.lenght; i++) {
        resultado = resultado * array[i];
    }
    return resultado;
}