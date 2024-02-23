var urlbase =" https://platzi-avo.vercel.app/api/avo";
var url  = "https://platzi-avo.vercel.app";
var arregloAguacates = [];

window.fetch(urlbase)

.then((respuesta)=> respuesta.json())
.then((responsejson) => {

    responsejson.data.forEach(element => {
        console.log(element.name);
        var div = document.createElement('div');
        var h1 = document.createElement('h1');
        var h3 = document.createElement('h3');
        var texto  = document.createTextNode(element.name);
        var precio = document.createTextNode(element.price);
        var imagen = document.createElement('img');
        imagen.src = url + element.image;

        h1.appendChild(texto);
        h3.appendChild(precio);

        div.appendChild(h1);
        div.appendChild(h3);
        div.appendChild(imagen);
        arregloAguacates.push(div);
    });

    document.body.append(...arregloAguacates);
})


