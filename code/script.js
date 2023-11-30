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

setInterval(scrollGallery, 1); // Funkcja scrollGallery wywoływana co 1ms dla płynności
