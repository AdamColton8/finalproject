//slider
$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        dots: true,
        centerMode: true
    });
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}





function initMap() {
    var uluru = {lat: 49.229, lng: 28.47};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

 

  $('[data-fancybox="images"]').fancybox({
    thumbs : {
      autoStart : true
    },
    buttons : [
      'zoom',
      'close'
    ]
  });
  