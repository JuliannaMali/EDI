var ljus = 0;
var lykta = 0;
var stjarna = 0;
var takfonster = 0;
var gryning = 0;
var glans = 0;
var lagereld = 0;
var veke = 0;


//fetch block
function updateChart1()
{
    async function fetchData1()
    {
        //const url = 'Swieczki (2).json';
        const url = 'https://my.api.mockaroo.com/swieczki.json?key=e8c704d0';
        const response = await fetch(url);
        //wait until the request has been completed
        const datapoints = await response.json();
        console.log(datapoints);
        return datapoints
    };
    fetchData1().then(datapoints => 
    {
            datapoints.map(function(index)
            {
                if(index.model === 'Ljus')
                    {ljus += index.iloscsprzedanych;}
                else if(index.model === 'Lykta')
                    {lykta += index.iloscsprzedanych;}
                else if (index.model === 'Stjärna')
                    {stjarna += index.iloscsprzedanych;}
                else if (index.model === 'Takfönster')
                    {takfonster += index.iloscsprzedanych;}
                else if (index.model === 'Gryning')
                    {gryning += index.iloscsprzedanych;}
                else if (index.model === 'Glans')
                    {glans += index.iloscsprzedanych;} 
                else if (index.model === 'Lägereld')
                    {lagereld += index.iloscsprzedanych;}  
                else 
                    {veke += index.iloscsprzedanych;};
            
    
                return ljus, lykta, stjarna, takfonster, gryning, glans, lagereld, veke;
            });        
    
        console.log(ljus);
        console.log(lykta);
        console.log(stjarna);
        console.log(takfonster);
        console.log(gryning);
        console.log(glans);
        console.log(lagereld);
        console.log(veke);

        const sold = [ljus, lykta, stjarna, takfonster, gryning, glans, lagereld, veke];
        const labels1 = ['Ljus', 'Lykta', 'Stjärna', 'Takfönster', 'Gryning', 'Glans', 'Lägereld', 'Veke'];

        myChart1.data.labels = labels1;
        myChart1.data.datasets[0].data = sold;
        myChart1.update();

    });
};

const data2 = {
    labels: [],
    datasets: 
    [{
        label: [],
        data: [],
        backgroundColor: 
        [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(255, 50, 0, 0.2)'
        ],
        borderColor: 
        [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(255, 50, 0, 1)'
        ]
    }],
};

const configure = {
    type: 'polarArea',
    data: data2
};

const myChart1 = new Chart(
    document.getElementById('myChart1'),
    configure
);
