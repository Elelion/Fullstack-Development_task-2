/* jshint esversion: 6 */

function tickEventClick() {
    const TICK1 = document.getElementById('tick1');
    const TICK2 = document.getElementById('tick2');
    const TICK_LABEL1 = document.getElementById('tickLabel1');
    const TICK_LABEL2 = document.getElementById('tickLabel2');

    function tickLog() {
        console.log('tick1 value: ' + TICK1.value);
        console.log('tick2 value: ' + `${TICK2.value}`);
    }

    function tickStatus() {
        function tickStatusFirst() {
            if (TICK1.checked === true) {
                console.log('tick1: true');
            } else {
                console.log('tick1: false');
            }
        }
    
        function tickStatusSecond() {
            if (TICK2.checked === true) {
                console.log('tick2: true');        
            } else {
                console.log('tick2: false');
            }
        }
        
        tickStatusFirst();
        tickStatusSecond();
    }
        
    function tickCheckDefault() {
        TICK1.checked = false;
        TICK2.checked = true;
        TICK1.onclick = tickStatus;
        TICK2.onclick = tickStatus;
    }

    tickLog();
    tickCheckDefault();
}

tickEventClick();

//   ----

// const tick1 = document.getElementById('tick1');
// const tick2 = document.getElementById('tick2');
// const tickLabel1 = document.getElementById('tickLabel1');
// const tickLabel2 = document.getElementById('tickLabel2');

// console.log('tick1 value: ' + tick1.value);
// console.log('tick2 value: ' + tick2.value);

// function status() {
//     if (tick1.checked == true) {
//         console.log('tick1: true');
//     } else {
//         console.log('tick1: false');
//     }

//     if (tick2.checked == true) {
//         console.log('tick2: true');        
//     } else {
//         console.log('tick2: false');
//     }
// }

// tick1.checked = true;
// tick1.onclick = status;

// tick2.checked = false;
// tick2.onclick = status;