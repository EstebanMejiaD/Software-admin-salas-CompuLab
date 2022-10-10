
const inputs = document.querySelectorAll("input");
const btnRegistrar = document.querySelector("#registrar");


let itemsNuevos = JSON.parse(localStorage.getItem("productosRegistradosLS"))|| [];

btnRegistrar.addEventListener("click", () => {
    const productoNuevo = {
        id: inputs[0].value,
        nombre: inputs[1].value,
        descripcion: inputs[2].value,
        precio: inputs[3].value,
        foto: inputs[4].value,
    }
    itemsNuevos.push(productoNuevo);
    localStorage.setItem("productosRegistradosLS", JSON.stringify(itemsNuevos))
});
