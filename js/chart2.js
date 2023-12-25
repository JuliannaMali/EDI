var lawenda_m = 0
var lawenda_f = 0
var wanilia_m = 0
var wanilia_f = 0
var jablko_cynamon_m = 0
var jablko_cynamon_f = 0
var pomarancza_gozdziki_m = 0
var pomarancza_gozdziki_f = 0
var trawa_cytrynowa_m = 0
var trawa_cytrynowa_f = 0
var grejpfrut_m = 0
var grejpfrut_f = 0
var mieta_m = 0
var mieta_f = 0
var hiacynt_f = 0
var hiacynt_m = 0
var jasmin_m=0
var jasmin_f = 0
var fiolek_m = 0
var fiolek_f = 0
var swierk_m = 0
var swierk_f = 0
var sosna_m = 0
var sosna_f = 0
var kokos_m = 0
var kokos_f = 0

function updateChart2()
{
    async function fetchData2()
    {
        //const url = 'Klienci (2).json';
        const url = 'https://my.api.mockaroo.com/klienci.json?key=e8c704d0';
        const response = await fetch(url);
        const datapoints2 = await response.json();
        console.log(datapoints2);
        return datapoints2
    };
    fetchData2().then(datapoints2 =>
    {
        datapoints2.map(function(index)
        {
            if(index.plec === 'Male' && index.zakupy[0].zapach==='Lawenda')
                {lawenda_m +=1;}
            else if(index.plec === 'Female' && index.zakupy[0].zapach==='Lawenda')
                {lawenda_f += 1;}
            else if(index.plec === 'Male' && index.zakupy[0].zapach==='Wanilia')
                {wanilia_m += 1;}
            else if(index.plec === 'Female' && index.zakupy[0].zapach==='Wanilia')
                {wanilia_f += 1;}
            else if(index.plec === 'Male' && index.zakupy[0].zapach==='Jabłko-cynamon')
                {jablko_cynamon_m += 1;}
            else if(index.plec === 'Female' && index.zakupy[0].zapach==='Jabłko-cynamon')
                {jablko_cynamon_f += 1;}
            else if(index.plec === 'Male' && index.zakupy[0].zapach==='Pomarańcza-goździki')
                {pomarancza_gozdziki_m += 1;}
            else if(index.plec === 'Female' && index.zakupy[0].zapach==='Pomarańcza-goździki')
                {pomarancza_gozdziki_f += 1;}
            else if(index.plec === 'Male' && index.zakupy[0].zapach==='Trawa cytrynowa')
                {trawa_cytrynowa_m += 1;}
            else if(index.plec === 'Female' && index.zakupy[0].zapach==='Trawa cytrynowa')
                {trawa_cytrynowa_f += 1;}
            else if(index.plec === 'Male' && index.zakupy[0].zapach==='Grejpfrut')
                {grejpfrut_m += 1;}
            else if(index.plec === 'Female' && index.zakupy[0].zapach==='Grejpfrut')
                {grejpfrut_f += 1;}
            else if(index.plec === 'Male' && index.zakupy[0].zapach==='Mięta')
                {mieta_m += 1;}
            else if(index.plec === 'Female' && index.zakupy[0].zapach==='Mięta')
                {mieta_f += 1;}
            else if(index.plec === 'Male' && index.zakupy[0].zapach==='Hiacynt')
                {hiacynt_m += 1;}
            else if(index.plec === 'Female' && index.zakupy[0].zapach==='Hiacynt')
                {hiacynt_f += 1;}
            else if(index.plec === 'Male' && index.zakupy[0].zapach==='Jaśmin')
                {jasmin_m += 1;}
            else if(index.plec === 'Female' && index.zakupy[0].zapach==='Jaśmin')
                {jasmin_f += 1;}
            else if(index.plec === 'Male' && index.zakupy[0].zapach==='Fiołek')
                {fiolek_m += 1;}
            else if(index.plec === 'Female' && index.zakupy[0].zapach==='Fiołek')
                {fiolek_f += 1;}
            else if(index.plec === 'Male' && index.zakupy[0].zapach==='Świerk')
                {swierk_m += 1;}
            else if(index.plec === 'Female' && index.zakupy[0].zapach==='Świerk')
                {swierk_f += 1;}
            else if(index.plec === 'Male' && index.zakupy[0].zapach==='Sosna')
                {sosna_m += 1;}
            else if(index.plec === 'Female' && index.zakupy[0].zapach==='Sosna')
                {sosna_f += 1;}
            else if(index.plec === 'Male' && index.zakupy[0].zapach==='Kokos')
                {kokos_m += 1;}
            else if(index.plec ==='Female' && index.zakupy[0].zapach==='Kokos')
                {kokos_f += 1;};
            
            return lawenda_m, lawenda_f, wanilia_m, wanilia_f, jablko_cynamon_m, jablko_cynamon_f, pomarancza_gozdziki_m, pomarancza_gozdziki_f, trawa_cytrynowa_m, trawa_cytrynowa_f, grejpfrut_m, grejpfrut_f, mieta_m, mieta_f, hiacynt_m, hiacynt_f, jasmin_m, jasmin_f, fiolek_m, fiolek_f, swierk_m, swierk_f, sosna_m, sosna_f, kokos_m, kokos_f;

        });
        
        console.log(lawenda_m);
        console.log(lawenda_f);
        console.log(wanilia_m);
        console.log(wanilia_f);
        console.log(jablko_cynamon_m);
        console.log(jablko_cynamon_f);
        console.log(pomarancza_gozdziki_m);
        console.log(pomarancza_gozdziki_f);
        console.log(trawa_cytrynowa_m);
        console.log(trawa_cytrynowa_f);
        console.log(grejpfrut_m);
        console.log(grejpfrut_f);
        console.log(mieta_m);
        console.log(mieta_f);
        console.log(hiacynt_m);
        console.log(hiacynt_f);
        console.log(jasmin_m);
        console.log(jasmin_f);
        console.log(fiolek_m);
        console.log(fiolek_f);
        console.log(swierk_m);
        console.log(swierk_f);
        console.log(sosna_m);
        console.log(sosna_f);
        console.log(kokos_m);
        console.log(kokos_f);

        const bought_by_gender1 = [lawenda_m,wanilia_m,jablko_cynamon_m, pomarancza_gozdziki_m, trawa_cytrynowa_m, grejpfrut_m, mieta_m, hiacynt_m, jasmin_m, fiolek_m, swierk_m, sosna_m,kokos_m];
        const bought_by_gender2 = [lawenda_f,wanilia_f, jablko_cynamon_f,pomarancza_gozdziki_f, trawa_cytrynowa_f, grejpfrut_f, mieta_f, hiacynt_f, jasmin_f, fiolek_f, swierk_f,sosna_f, kokos_f];
        const labls2= ['Lawenda', 'Wanilia', 'Jabłko-cynamon', 'Pomarańcza-goździki', 'Trawa cytrynowa', 'Grejpfrut', 'Mięta', 'Hiacynt', 'Jaśmin', 'Fiołek', 'Świerk', 'Sosna', 'Kokos'];

        myChart2.data.labels = labls2;
        myChart2.config.data.datasets[0].data = bought_by_gender1;
        myChart2.config.data.datasets[1].data = bought_by_gender2;
        myChart2.update();
        
    });
};


const data = {
  labels: [],
  datasets: 
  [{
    label: 'Mężczyźni',
    data: [],
    backgroundColor: 'rgba(54, 162, 235, 0.3)',
    borderColor: 'rgba(54, 162, 235, 1)'
  },
  {
    label: 'Kobiety',
    data: [],
    backgroundColor: 'rgba(255,26,104, 0.3)',
    borderColor: 'rgba(255,26,104, 1)'
  }
  ]
};

const config = {
  type: 'bar',
  data,
  options: 
  {
    scales: 
    {
      y: {beginAtZero: true}
    }
  }
};

const myChart2 = new Chart(
  document.getElementById('myChart2'),
  config
);