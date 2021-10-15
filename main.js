let totalCarrito = 0;
let productos = 0;

function agregarProductoAlCarrito (precioProducto){
    totalCarrito += precioProducto;
    productos += 1;
    alert("Tienes " + productos + " en tu carrito y te cuestan " + "$ "+ totalCarrito);
}