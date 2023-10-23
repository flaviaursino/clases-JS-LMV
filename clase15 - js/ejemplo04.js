function todoslosParrafos() {
    const allparrafos = document.getElementsByTagName('p');

    //console.log(allparrafos)

    const num = allparrafos.length; // 7

    //console.log(num)
    alert(`Hay ${num} elementos <p> en este documento`)
}

function caja1Parrafos() {

    const caja1 = document.getElementById('caja1');
    //console.log(caja1)
    const caja1p = caja1.getElementsByTagName('p');
    const num = caja1p.length;
    alert(`Hay ${num} elementos <p> en la caja 1 (borde azul)`)

}

function segundoParrafo() {
    const caja2 = document.getElementById('caja2');

    const caja2p = caja2.getElementsByTagName('p');
    const num = caja2p.length;


    alert(`Hay ${num} elementos <p> en la caja 2(borde rojo)`)
}







