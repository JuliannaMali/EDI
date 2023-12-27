document.getElementById('tableHeader').addEventListener('click', 
function () 
{
  var tableContent = document.getElementById('tableCandles');
  var isExpanded = tableContent.classList.contains('show');
  
  if (isExpanded) 
  {
    tableContent.classList.remove('show');
    document.getElementById('tableHeader').innerHTML = '<i class="bi bi-arrows-expand"></i>'
  } 
  else 
  {
    tableContent.classList.add('show');
    document.getElementById('tableHeader').innerHTML = '<i class="bi bi-arrows-collapse"></i>'
  }
});

document.getElementById('tableHeader2').addEventListener('click', 
function () 
{
  var tableContent = document.getElementById('tableClients');
  var isExpanded = tableContent.classList.contains('show');
  
  if (isExpanded) 
  {
    tableContent.classList.remove('show');
    document.getElementById('tableHeader2').innerHTML = '<i class="bi bi-arrows-expand"></i>'
  } 
  else 
  {
    tableContent.classList.add('show');
    document.getElementById('tableHeader2').innerHTML = '<i class="bi bi-arrows-collapse"></i>'
  }
});
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
