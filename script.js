let hamburger = document.querySelector('#hamburger');
let navList = document.querySelector('#dashboard-left-nav');
hamburger.addEventListener('click', function (e){
    if (navList) {
        navList.style.marginLeft = '0px';
        hamburger.style.display = 'none';
    } 
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


    // Candidate sub-menu item
    let candidate = document.querySelector('#candidate');
    candidate.addEventListener('click', function () {
        
        let candidateMenu = document.querySelector('#candidate-menu');

        // Clear the Inner HTML to prevent it form appending
        candidateMenu.innerHTML = ''

        //  Create and append the element
        let element1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        let div5 = document.createElement('div');
        let div6 = document.createElement('div');

        let element2 = document.createElement('a');
        let element3 = document.createElement('a');
        let element4 = document.createElement('a');
        let element5 = document.createElement('a');
        let element6 = document.createElement('a');

        element2.setAttribute('href', './eoi-candidate.html')
        element3.setAttribute('href', './eoi-candidate.html')
        element4.setAttribute('href', './eoi-candidate.html')

        element2.textContent = "Add EOI";
        element3.textContent = "Screen";
        element4.textContent = "Unscreen"
        element5.textContent = "Nomination"
        element6.textContent = "Nomination Result"

        div2.appendChild(element2);
        div3.appendChild(element3);
        div4.appendChild(element4);
        div5.appendChild(element5);
        div6.appendChild(element6);

        
        element1.appendChild(div2);
        element1.appendChild(div3);
        element1.appendChild(div4);
        element1.appendChild(div5);
        element1.appendChild(div6);
        candidateMenu.appendChild(element1)

        // Styling dropdown
        candidateMenu.style.backgroundColor = 'white';
        candidateMenu.style.position = 'absolute';
        candidateMenu.style.padding = '10px';
        candidateMenu.style.marginLeft = '10px';
        candidateMenu.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)';
        candidateMenu.style.color = 'black';
        candidateMenu.style.zIndex = 1;
        element2.style.width = '100%'
        element2.classList = 'text-dark'
        element3.classList = 'text-dark'
        element4.classList = 'text-dark'
        element5.classList = 'text-dark'
        element6.classList = 'text-dark'

        // div2.onmouseover = function () {
        //     element2.style.backgroundColor = '#eee';
        // }

        // div2.onmouseleave = function () {
        //     element2.style.backgroundColor = 'white';
        // }
        
    })