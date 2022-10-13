const productos = document.querySelector("#productos");


// creacion de un localStorage: y agregar los elementos de un array en él
let carrito = JSON.parse(localStorage.getItem("dato")) ||[];

// retorna una plantilla los productos que le pasemos por una array
let listarProductos = () => {

    return (productos.innerHTML = itemsNuevos.map((x) => {
    let  {id, nombre, precio, descripcion, foto} = x;
    let buscar = carrito.find((x) => x.id === id) || [];

    return    `   
    <div class="col-lg-4 card-info-salas" id="producto-id-${id}">
    <div class="card" style="width: 18rem;">
        <div class="cat">
            <img src="${foto}" class="card-img-top" alt="">
        </div>
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">${descripcion}</p>
         <p>${precio}</p>
         <div id=${id} class="botones"></div>
        </div>
    </div>
</div>
    
    `; 
    }).join(""));
}

listarProductos();


// let aumentar = (id)=> {

//     let itemSeleccionado = id;
//     let buscar = carrito.find((x) => x.id === itemSeleccionado.id);
//     if (buscar === undefined) {
//         carrito.push({
//             id: itemSeleccionado.id,
//             item: 1,
//         });

//     } else {
//         buscar.item += 1;
//     }
//     console.log(carrito);
//     actualiar(itemSeleccionado.id);
//     localStorage.setItem("dato", JSON.stringify(carrito));
// }



// let disminuir = (id)=> {

//     let itemSeleccionado = id;
//     let buscar = carrito.find((x) => x.id === itemSeleccionado.id);
//     if (buscar === undefined) {
//         return;
//     } else if (buscar === 0) {
//         return;
//     } else {
//         buscar.item -= 1;
//     }


    
//     actualiar(itemSeleccionado.id);
//     carrito = carrito.filter((x) => x.item !== 0);
//     console.log(carrito);
//     localStorage.setItem("dato", JSON.stringify(carrito));

// }


// let actualiar = (id)=> {
//     let buscar = carrito.find((x) => x.id === id);
//     document.getElementById(id).innerHTML = buscar.item;
//     contar();
// };


// let contar = () => {
//     let contador = document.getElementById("contador");
//     let sum = carrito.map((x) => x.item).reduce((x,y) => x +y, 0);
//     contador.innerHTML = `[${sum}]`;
//     console.log(contador);
// };

// contar();



