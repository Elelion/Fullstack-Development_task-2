/* first trackBar */

// client browser width:
var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// client browser:
var browser = navigator.userAgent;

var pos2 = 0;
var sum = 0;

// var fill = document.getElementById('sliderRangeFill');
// var track2 = document.getElementById('trackBar2');
var fill = document.getElementsByClassName('step-slider__fill')[0];
var track2 = document.getElementsByClassName('step-slider__range')[0];

function positionTrackBar2() {    

    pos2 = track2.value;

    switch (pos2) {
        case '0':
            sum = pos2 * 1 + 0;
            fill.style.width = sum + 'px';
            break;

        case '25': 
            if (browserWidth > 820) {
                sum = pos2 * 1 + 150;
                fill.style.width = sum + 'px';
            } else {
                fill.style.width = 25 + '%';
            }

            break;

        case '50': 
            if (browserWidth > 820) {
                sum = pos2 * 1 + 300;
                fill.style.width = sum + 'px';
            } else {
                fill.style.width = 48 + '%';
            }

            break;

        case '75': 
            if (browserWidth > 820) {
                sum = pos2 * 1 + 450;
                fill.style.width = sum + 'px';
            } else {
                fill.style.width = 69 + '%';
            }

            break;

        case '100': 
            if (browserWidth > 820) {
                sum = pos2 * 1 + 600;
                fill.style.width = sum + 'px'; 
            } else {
                fill.style.width = 88 + '%';
            }
            break;
    }  
    
    console.log('pos2: ' + pos2);
    console.log('sum: ' + sum);
}

track2.value = 0; 

track2.onclick = positionTrackBar2;
track2.mouseenter = positionTrackBar2;
track2.onmousemove = positionTrackBar2;
track2.mousedown = positionTrackBar2;
track2.mouseup = positionTrackBar2;