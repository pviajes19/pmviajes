// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


//  owl carousel script
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

//    end owl carousel script 



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.innerText = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_hn4mhbo';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.innerText = 'Enviar';
        alert('Mensaje enviado 👍');
        this.reset();
      }, (err) => {
        btn.innerText = 'Enviar';
        alert('Error al enviar 😬');
        console.log(err);
      });
});