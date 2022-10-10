const productosAdministrador = document.querySelector("#productosNuevos");

let listarProductos = () => {

    return (productosAdministrador.innerHTML = itemsNuevos.map((x) => {
    let  {id, nombre, precio, descripcion, foto} = x;
    

    return    `   
    <div class="col-lg-4" id="producto-id-${x.id}">
    <div class="card" style="width: 18rem;">
        <div class="cat">
            <img src="${foto}" class="card-img-top" alt="">
        </div>
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">${descripcion}</p>
         <p>$ ${precio}</p>
         <p onclick="eliminadorProducto(${id})" style="cursor:pointer" class="btn btn-danger"> Eliminar </p>
         <div id=${id}></div>
         
         
        </div>
    </div>
</div>
    
    `; 
    }).join(""));
}

listarProductos();

let eliminadorProducto = (id) => {
    let itemSeleccionado = id;
    console.log(itemSeleccionado);
     itemsNuevos = itemsNuevos.filter((x)=> x.id !== itemSeleccionado.id);
    listarProductos();
    
    localStorage.setItem("productosRegistradosLS", JSON.stringify(itemsNuevos));

};