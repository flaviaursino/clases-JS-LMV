const formu = document.getElementById('formulario');

formu.addEventListener('submit', function(e){

    e.preventDefault();

    if(e.currentTarget.nombre.value == '') {
        alert('El campo nombre es requerido');
        return;
    }

    if (e.currentTarget.comentarios.value == '') {
        alert('El campo comentarios es requerido');
        return;
    }

    alert(`Gracias ${e.currentTarget.nombre.value} por enviarnos el siguiente comentario: ${e.currentTarget.comentarios.value}.` )



})