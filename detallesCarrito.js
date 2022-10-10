const totalcomprar = document.getElementById("total-compra");
const detalle = document.getElementById("detalle");


let carrito = JSON.parse(localStorage.getItem("dato"))||[];

let contar = () => {
    let contador = document.getElementById("contador");
    let sum = carrito.map((x) => x.item).reduce((x,y) => x +y, 0);
    contador.innerHTML = `[${sum}]`;
    console.log(contador);
};

contar();

let generarCarrito = () => {
    if(carrito.length !== 0) {
        return (detalle.innerHTML = carrito.map((x)=>{
            let {id, item} = x;
            let buscar = itemsNuevos.find((y) => y.id === id);
            return `
            <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${buscar.foto}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${buscar.nombre}  $ ${buscar.precio}</h5>
        <p class="card-text">${buscar.precio*item}</p>

        <p onclick="remover(${id})" style="cursor:pointer" class="btn btn-danger"> Eliminar del carrito </p>

        <i onclick="disminuir(${id});" class="bi bi-dash-lg botones"></i>
        <div id=${id} class="botones"> 
        ${item} 
        </div>
        <i onclick="aumentar(${id});" class="bi bi-plus-lg botones"></i>
            
      </div>
    </div>
  </div>
</div>
            `;
        }).join(""));

    }else {
        totalcomprar.innerHTML = "";
        detalle.innerHTML     = `<a href="index.html" class="btn btn-primary">Volver</a>` ;
    }
}

generarCarrito();

let aumentar = (id)=> {

    let itemSeleccionado = id;
    let buscar = carrito.find((x) => x.id === itemSeleccionado.id);
    if (buscar === undefined) {
        carrito.push({
            id: itemSeleccionado.id,
            item: 1,
        });

    } else {
        buscar.item += 1;
    }
    console.log(carrito);
    actualiar(itemSeleccionado.id);
    generarCarrito();
    totalCompra();
    localStorage.setItem("dato", JSON.stringify(carrito));
}



let disminuir = (id)=> {

    let itemSeleccionado = id;
    let buscar = carrito.find((x) => x.id === itemSeleccionado.id);
    if (buscar === undefined) {
        return;
    } else if (buscar === 0) {
        return;
    } else {
        buscar.item -= 1;
    }


    
    actualiar(itemSeleccionado.id);
    carrito = carrito.filter((x) => x.item !== 0);
    console.log(carrito);
    generarCarrito();
    totalCompra();
    localStorage.setItem("dato", JSON.stringify(carrito));

}

let actualiar = (id)=> {
    let buscar = carrito.find((x) => x.id === id);
    document.getElementById(id).innerHTML = buscar.item;
    contar();
};


let remover = (id) => {
    let itemSeleccionado = id;
    console.log(itemSeleccionado);
    carrito = carrito.filter((x)=> x.id !== itemSeleccionado.id);
    generarCarrito();
    contar();
    localStorage.setItem("dato", JSON.stringify(carrito));
}

let totalCompra = () => {
    if (carrito.length !== 0 ) {
        let acumulado = carrito.map((x) => {
            let buscar = items.find((y) => y.id === x.id);
            return x.item*buscar.precio;
        }).reduce((x,y) => x+y, 0);
        totalcomprar.innerHTML = `El total de la compra es: <b>${acumulado}</b>`;   
    }
}

totalCompra();



