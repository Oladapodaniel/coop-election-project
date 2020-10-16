let hamburger = document.querySelector('#hamburger');
let navList = document.querySelector('#dashboard-left-nav');
hamburger.addEventListener('click', function (e){
    if (navList) {
        navList.style.marginLeft = '0px';
        hamburger.style.display = 'none';
    } 
    // else {
    //     navList.style.marginLeft = '-800px';
    //     hamburger.innerHTML = "<img src=\"./assets/ICON/SVG ICON/close.svg\">"
        
    // }
    
})

let close = document.querySelector('#close');
close.addEventListener('click', function (e) {
    navList.style.marginLeft = '-800px';
    hamburger.style.display = 'block';
})

// Election Result graph

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Total Vote: 23K"
        },
        data: [{        
            type: "line",
            color: ' #BB4B01',
              indexLabelFontSize: 16,
            dataPoints: [
                { label: 'Adewolu Dolapo', y: 450 },
                { label: 'Adewole Dolapo', y: 414},
                { label: 'Adewole Dolapo', y: 520, indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle" },
                { label: 'Adewole Dolapo', y: 460 },
                { label: 'Adewole Dolapo', y: 450 },
                { label: 'Adewole Dolapo', y: 500 },
                { label: 'Adewole Dolapo', y: 480 },
                { label: 'Adewole Dolapo', y: 480 },
                { label: 'Adewole Dolapo', y: 390 , indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
                { label: 'Adewole Dolapo', y: 500 },
                { label: 'Adewole Dolapo', y: 480 },
                { label: 'Adewole Dolapo', y: 510 }
            ]
        }]
    });
    chart.render();
    
    }