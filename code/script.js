const gallery = document.getElementById('gallery');

gallery.innerHTML += gallery.innerHTML; // Duplikowanie elementów w galerii

let scrollAmount = 0;
let step = 0.2; // Prędkość przewijania

function scrollGallery() 
{
  scrollAmount += step;
  gallery.scrollTo(scrollAmount, 0);

  if (scrollAmount >= gallery.scrollWidth / 2) 
  {
    scrollAmount = 0;
    gallery.scrollTo(scrollAmount, 0);
  }
}

let mybutton = document.getElementById("myBtn");

// Gdy użytkownik przejdzie w dół 30px, pojawi się przycisk
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Jak użytkownik kliknie w przycisk, strona pójdzie w górę
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

setInterval(scrollGallery, 1); // Funkcja scrollGallery wywoływana co 1ms dla płynności
