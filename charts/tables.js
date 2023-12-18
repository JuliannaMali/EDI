let outsideCandles;
let outsideClients;

fetch('https://my.api.mockaroo.com/swieczki.json?key=e8c704d0')
//fetch('Swieczki (2).json')
  .then(res => res.json())
  .then(data => {
    outsideCandles = data;
    data.forEach(candle => {
      const try1 = `<tr><td>${candle.model}</td><td>${candle.wielkosc}</td><td>${candle.zapach}</td><td>${candle.wosk}</td><td>${candle.dostepnosc}</td><td>${candle.kod}</td><td>${candle.iloscsprzedanych}</td><td>${candle.dataostatniejsprzedazy}</td></tr>`;
      document.getElementById('tableCandles').insertAdjacentHTML('beforeend', try1,);
    })
  })
  .then(()=>{
    console.log(outsideCandles);
  });


//fetch('Klienci (2).json')
fetch('https://my.api.mockaroo.com/klienci.json?key=e8c704d0')
  .then(res => res.json())
  .then(data =>{
    outsideClients = data;
    data.forEach(client => {
        const try2 = `<tr><td>${client.imię}</td><td>${client.nazwisko}</td><td>${client.email}</td><td>${client.plec}</td></tr>`
        document.getElementById('tableClients').insertAdjacentHTML('beforeend', try2)
    })
  })
  .then(()=>{
    console.log(outsideClients);
  });
