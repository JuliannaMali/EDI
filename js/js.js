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