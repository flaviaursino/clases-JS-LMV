const parrafo = document.getElementById('parrafo'); // la palabra en amarillo es el id (html)
const menos = document.getElementById('menos');
const mas = document.getElementById('mas');


//fontSize > css > font-size ..........fontSize(se saque el guión y la priemra letra va Mayuscula.)
menos.addEventListener('click', function () {
    parrafo.style.fontSize = '10px'

})

mas.addEventListener('click', function(){
    parrafo.style.fontSize = '30px'
})