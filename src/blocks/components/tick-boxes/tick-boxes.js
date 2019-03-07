/* jshint esversion: 6 */

class TickBoxes {
    constructor() {
        this.beginEvent();
    }

    initDOMElements() {
        this.tick1 = document.getElementById('tick1');
        this.tick2 = document.getElementById('tick2');
        this.tickLabel1 = document.getElementById('tickLabel1');
        this.tickLabel2 = document.getElementById('tickLabel2');
    }

    consoleLog() {
        console.log('tick1 value: ' + tick1.value);
        console.log('tick2 value: ' + `${tick2.value}`);
    }

    setTickCheck(name, check) {
        name.checked = check;
    }

    tickStatus(name) {
        if (name === 'tick1') {
            if (tick1.checked === true) {
                console.log('tick1: true');
            } else {
                console.log('tick1: false');
            }
        } else {
            if (this.tick2.checked === true) {
                console.log('tick2: true');
            } else {
                console.log('tick2: false');
            }
        }
    }

    beginEvent() {
        this.initDOMElements();
        this.consoleLog();

        this.setTickCheck(this.tick1, false);
        this.setTickCheck(this.tick2, true);

        this.tick1.onclick = () => { this.tickStatus('tick1'); }
        this.tick2.onclick = () => { this.tickStatus('tick2'); }
    }
}

new TickBoxes();

// ---

// function tickEventClick() {
//     const TICK1 = document.getElementById('tick1');
//     const TICK2 = document.getElementById('tick2');
//     const TICK_LABEL1 = document.getElementById('tickLabel1');
//     const TICK_LABEL2 = document.getElementById('tickLabel2');

//     function tickLog() {
//         console.log('tick1 value: ' + TICK1.value);
//         console.log('tick2 value: ' + `${TICK2.value}`);
//     }

//     function tickStatus() {
//         function tickStatusFirst() {
//             if (TICK1.checked === true) {
//                 console.log('tick1: true');
//             } else {
//                 console.log('tick1: false');
//             }
//         }

//         function tickStatusSecond() {
//             if (TICK2.checked === true) {
//                 console.log('tick2: true');
//             } else {
//                 console.log('tick2: false');
//             }
//         }

//         tickStatusFirst();
//         tickStatusSecond();
//     }

//     function tickCheckDefault() {
//         TICK1.checked = false;
//         TICK2.checked = true;
//         TICK1.onclick = tickStatus;
//         TICK2.onclick = tickStatus;
//     }

//     tickLog();
//     tickCheckDefault();
// }

// tickEventClick();

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