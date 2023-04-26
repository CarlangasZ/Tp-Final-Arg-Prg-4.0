//Booking init

let inputCantidadPersonas = document.getElementById("cantidadPersonas");
let spanValorReserva = document.getElementById("valorReserva");

function calcularReserva() {

  let cantidadPersonas = parseInt(inputCantidadPersonas.value);

  if (!isNaN(cantidadPersonas)) {

    let valorReserva = cantidadPersonas * 5000;
    spanValorReserva.textContent = valorReserva;
    console.log("Cantidad de personas: " + cantidadPersonas + ", valor total de la reserva " + valorReserva);

  }else{

    spanValorReserva.textContent = 0

  }

}

document.querySelector("#cantidadPersonas").addEventListener("input", function () {

  let cantidadPersonas = parseInt(this.value);
  if (cantidadPersonas < 1) {

    cantidadPersonas = 0;
    document.querySelector("#valorReserva").textContent = 0;

  } else if (cantidadPersonas > 10) {

    cantidadPersonas = 10;
    document.querySelector("#cantidadPersonas").value = 10;

  }
  let valorReserva = cantidadPersonas * 5000;
  document.querySelector("#valorReserva").textContent = valorReserva;

});

inputCantidadPersonas.addEventListener("input", calcularReserva);

//Booking end

//Contact form init

let botonEnviar = document.getElementById("botonEnviar");
let formulario = document.getElementById("formulario");
function enviarFormulario () {
    botonEnviar.addEventListener("click", function (g) {
        g.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let correo = document.getElementById("correo").value;
        let mensaje = document.getElementById("mensaje").value;
        let nombreValido = document.getElementById("nombreValido");
        let correoValido = document.getElementById("correoValido");
        let mensajeValido = document.getElementById("mensajeValido");
        let regex = /\S+@\S+.\S+/;
        if (nombre.length == 0) {
            nombreValido.innerText = "Ingrese nombre válido";
        } else if (!regex.test(correo)) {
            correoValido.innerText = "Ingrese un correo electrónico válido";
        } else if (mensaje.length == 0) {
            mensajeValido.innerText = "Ingrese mensaje válido";
        } else {
            console.log(`El cliente ${nombre}, se comunica desde su correo ${correo}, para darle este mensaje: ${mensaje}`);
            formulario.reset();
        }
    })
}

enviarFormulario();


//Contact Form end

//Api init

let httpRequest = new XMLHttpRequest();

httpRequest.open('GET', 'https://ws.smn.gob.ar/map_items/weather', true)

httpRequest.setRequestHeader('Accept', 'application/json')

httpRequest.onload = async () => {

  if (httpRequest.status === 200) {
    const datos = await JSON.parse(httpRequest.responseText)

    datos.forEach(temperatura => {

      if (temperatura.int_number === 87544) {

        const p = document.createElement("p")
        p.textContent = "Le Festin se encuentra ubicado en la provincia de " + temperatura.province + ", normalmente tratamos de mantener un ambiente ni muy frio ni muy caliente, asi que nuestra temperatura ambiente es de " + temperatura.weather.tempDesc + ", ya que sabemos que al ser la etiqueta del lugar utilizar traje y vestidos, lo ideal es equilibrar la temperatura para evitar cualquier desgaste fisico."
        document.getElementById("Temperaturas").appendChild(p)

      }
    });
  }
}
httpRequest.send()

//Api fin

//Maps init

function iniciarMap() {
  var coord = { lat: -34.4828417, lng: -58.5734908 };
  var map = new google.maps.Map(document.getElementById('maps'), {
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
    title: 'Le Festin'
  });
  var contenido = '<div><strong>' + 'Le Festin' + '</strong>' + '<br>' + 'Blanco Encalada 2120, B1609 Boulogne, Provincia de Buenos Aires' + '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contenido
  });
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
}

//Maps end
