console.log("Calculando descuentos")

let precio=50000
let descuento=25
let productoDescuentado= precio * (descuento/100)
let precioDescuentado= precio - productoDescuentado

let templateString= `El precio del producto sin descuento es: $${precio}
El descuento es del:$${descuento}
El valor del producto con descuento es: $${precioDescuentado}`

console.log(templateString);
