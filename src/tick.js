/* jshint esversion: 6 */


const tick1 = document.getElementById('tick1');
const tick2 = document.getElementById('tick2');
const tickLabel1 = document.getElementById('tickLabel1');
const tickLabel2 = document.getElementById('tickLabel2');

console.log('tick1 value: ' + tick1.value);
console.log('tick2 value: ' + tick2.value);

function status() {
    if (tick1.checked == true) {
        console.log('tick1: true');
    } else {
        console.log('tick1: false');
    }

    if (tick2.checked == true) {
        console.log('tick2: true');        
    } else {
        console.log('tick2: false');
    }
}

tick1.checked = true;
tick1.onclick = status;

tick2.checked = false;
tick2.onclick = status;