// client browser width:
var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// client browser:
var browser = navigator.userAgent;

/* first trackBar */

var pos1 = 0;
// var block1 = document.getElementById('pointerTrackBar1'); // block value
// var p1 = document.getElementById('pointerValTrackBar1');  // value number in block
// var track1 = document.getElementById('trackBar1');        // input range
var block1 = document.getElementsByClassName('classic-slider__range-indicator')[0]; // block value
var p1 = document.getElementsByClassName('classic-slider__range-title')[0];  // value number in block
var track1 = document.getElementsByClassName('classic-slider__track')[0];     // input range

function positionTrackBar1() {    
    // ___CHROME && others___
    if (browserWidth > 820) {
        pos1 = track1.value * 6.65;

        block1.style.left = pos1 + 'px';
        p1.innerHTML = track1.value; 
    } else {
        if (browserWidth <= 820 && browserWidth > 570) { pos1 = track1.value * 0.85; }
        if (browserWidth < 570) { pos1 = track1.value * 0.83; }
        if (browserWidth < 500) { pos1 = track1.value * 0.80; }

        block1.style.left = pos1 + '%';
        p1.innerHTML = track1.value; 
    }     

    // ___FIREFOX___
    if (browser.search(/Firefox/) > 0) {
        if (browserWidth > 820) {
            pos1 = track1.value * 0.92;

            block1.style.left = pos1 + 'px';
            p1.innerHTML = track1.value; 
        }

        if (browserWidth <= 820 && browserWidth >= 400) {
            if (track1.value >= 0) pos1 = track1.value * 1 - 2;
            if (track1.value >= 10) pos1 = track1.value * 1 - 3;
            if (track1.value >= 20) pos1 = track1.value * 1 - 4;
            if (track1.value >= 30) pos1 = track1.value * 1 - 5;
            if (track1.value >= 40) pos1 = track1.value * 1 - 6;
            if (track1.value >= 50) pos1 = track1.value * 1 - 7;
            if (track1.value >= 60) pos1 = track1.value * 1 - 9;
            if (track1.value >= 70) pos1 = track1.value * 1 - 11;
            if (track1.value >= 80) pos1 = track1.value * 1 - 13;
            if (track1.value >= 95) pos1 = track1.value * 1 - 14;
        }

        if (browserWidth <= 399) {
            pos1 = track1.value * 0.8;
        }

        block1.style.left = pos1 + '%';
        p1.innerHTML = track1.value; 
    }  
}

block1.style.position = 'relative'; // for free moving
track1.value = 0;                   // reset position

track1.onclick = positionTrackBar1;
track1.mouseenter = positionTrackBar1;
track1.onmousemove = positionTrackBar1;
track1.mousedown = positionTrackBar1;
track1.mouseup = positionTrackBar1;