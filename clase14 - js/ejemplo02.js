const nombre = prompt('Ingrese su nombre: ', '');
const nota = parseInt(prompt('Ingrese su nota', ''));

if(Number.isNaN(nota)){
    document.write('La nota ingresada no es válida')
} else if (nota>=4){
    document.write(`${nombre} estas aprobado con un ${nota}`)
} else {
    document.write(`${nombre} estas desaprobado con un ${nota}`)
}

//Number.isNaN valida que la nota sea valor numérico.

