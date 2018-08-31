/* first trackBar */

var pos1 = 0;
var block1 = document.getElementById('pointerTrackBar1'); // block value
var p1 = document.getElementById('pointerValTrackBar1');  // value number in block
var track1 = document.getElementById('trackBar1');        // input range

function positionTrackBar1() {    
    pos1 = track1.value * 6.65;
    block1.style.left = pos1 + 'px';
    p1.innerHTML = track1.value;    
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
            sum = pos2 * 1 + 150;
            fill.style.width = sum + 'px';             
            break;

        case '50': 
            sum = pos2 * 1 + 300;
            fill.style.width = sum + 'px';             
            break;

        case '75': 
            sum = pos2 * 1 + 450;
            fill.style.width = sum + 'px';             
            break;

        case '100': 
            sum = pos2 * 1 + 600;
            fill.style.width = sum + 'px';             
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