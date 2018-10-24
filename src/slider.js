/* first trackBar */

var pos1 = 0;
var block1 = document.getElementById('pointerTrackBar1'); // block value
var p1 = document.getElementById('pointerValTrackBar1');  // value number in block
var track1 = document.getElementById('trackBar1');        // input range

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


/* second trackBar */

var pos2 = 0;
var sum = 0;
var fill = document.getElementById('sliderRangeFill');
var track2 = document.getElementById('trackBar2');

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