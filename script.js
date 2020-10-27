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
    let candidateMenu = document.querySelector('#candidate-menu');
    candidate.addEventListener('click', function (e) {
            candidateMenu.classList.toggle('show')      
    })

    // Set sub Menu
    let setup = document.querySelector('.setup')
    let setupMenu = document.querySelector('#setup-menu')

    setup.addEventListener('click', function () {
        setupMenu.classList.toggle('show-setup')
        // console.log(setupMenu)
    })


    document.addEventListener('click', function (e) {
        if (!e.target.matches('.candidate')) {
        let dropdown = document.getElementsByClassName('candidate-menu')
        for(let i = 0; i < dropdown.length; i++) {
            let openDropDown = dropdown[i]
            if (openDropDown.classList.contains('show')) {
                openDropDown.classList.remove('show')
            }
        }
        }

        if (!e.target.matches('.setup')) {
            let setupDropdown = document.getElementsByClassName('setup-menu')
            for(let i = 0; i < setupDropdown.length; i++) {
                let setupOpenDropDown = setupDropdown[i]
                if (setupOpenDropDown.classList.contains('show-setup')) {
                    setupOpenDropDown.classList.remove('show-setup')
                }
            }
            }
    })


    
    // candidateMenu.addEventListener('click', function () {
    //     // console.log('dapo')
    //     event.stopPropagation()
    // })

   
        // document.addEventListener('click', function (e) {
            // let targetElement = e.target
            //     if (targetElement == candidateMenu) {
                    // console.log('dapo')
            //     }   else {
            //         console.log('Danny')
            //         candidateMenu.style.display = 'none'
            //     }
            // if (!e.target.matches('.candidate') && !e.target.matches('#candidate-menu')) {
                
            // }
            // if (candidateMenu.style.display == 'none') {
            //     candidate.addEventListener('click', function () {
            //         candidate.style.display = 'block'
            //     })
            // }
            
        // })