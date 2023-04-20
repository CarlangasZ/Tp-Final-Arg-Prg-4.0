function iniciarMap(){
    var coord = {lat:-34.4828417 ,lng: -58.5734908};
    var map = new google.maps.Map(document.getElementById('maps'),{
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
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

let botonEnviar = document.getElementById("botonEnviar");
function formulario () {
    botonEnviar.addEventListener("submit", function (g) {
        g.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let correo = document.getElementById("correo").value;
        let mensaje = document.getElementById("mensaje").value;
        console.log(`El cliente ${nombre}, se comunica desde su correo ${correo}, para darle este mensaje: ${mensaje}`)
    });
}
formulario()

