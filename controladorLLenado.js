let productos=[
    {nombre: 'aguardiente tapa roja ',tamano:'1/2 botella', precio:'200000',foto:'img/guaroRojo.jpg'},
    {nombre:'aguardiente tapa azul ',tamano:'1/2 botella', precio:'220000',foto:'img/guaroAzul.jfif'},
    {nombre:'tequila Don julio ',tamano:'1 botella Grande', precio:'300000',foto:'img/donJulio.jfif'},
    {nombre:'Cerveza Aguila ',tamano:'1 botella', precio:'8000',foto:'img/cerveza-aguila.jpg'},
    {nombre:'Cerveza Pilsen ',tamano:'1 botella', precio:'8000',foto:'img/cerveza-pilsen.jpg'},
    {nombre:'Ron medellin  ',tamano:'1/2 botella', precio:'220000',foto:'img/ronMedellin.jpg'},
    {nombre:'Ron Viejo de Caldas',tamano:'1/2 botella', precio:'225000',foto:'img/ron-viejo-caldas.jpg'},
    {nombre:'agua ',tamano:'1 botella', precio:'4000',foto:'img/agua.jfif'},
    {nombre:'soda ',tamano:'1 botella', precio:'6000',foto:'img/soda.jfif'},
    {nombre:'gatorade ',tamano:'1 botella', precio:'8000',foto:'img/gatorade.jpg'}]

    // crear  una referencia a la etiqueta fila

    let fila=document.getElementById("fila")

    // recorrer el arreglo y sacar fotocopia a la iformacion que hay por dentro
    productos.forEach(function(producto){

        let columna=document.createElement("div")

        columna.classList.add("col")

        let tarjeta =document.createElement("div")

        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen=document.createElement("img")

        imagen.classList.add("card-img-top")
        imagen.classList.add("h-50")
        imagen.classList.add("p-3")
        imagen.src=producto.foto


        let nombreProducto=document.createElement("h4")

        nombreProducto.textContent=producto.nombre


        let tamano=document.createElement("h4")

        tamano.textContent=producto.tamano

        





        // padres e hijos

        tarjeta.appendChild(imagen)
        
        tarjeta.appendChild(nombreProducto)

        tarjeta.appendChild(tamano)

        columna.appendChild(tarjeta)

        fila.appendChild(columna)


    })