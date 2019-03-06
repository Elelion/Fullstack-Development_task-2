/*jshint esversion: 6 */

class Toggles {
    constructor() {
        this.beginEvent();
    }

    initDOMElements() {
        this.switcher1 = document.getElementById('switcher1');
        this.switcher2 = document.getElementById('switcher2');
        this.labelSwitcher1 = document.getElementById('labelSwitcher1');
        this.labelSwitcher2 = document.getElementById('labelSwitcher2');
    }

    setSwitcherCaption(id, caption) {
        switch (id) {
            case '1':
                this.labelSwitcher1.innerHTML = caption;

            default:
                this.labelSwitcher2.innerHTML = caption;
        }
    }

    setSwitcherPosition(id, position) {
        switch (id) {
            case '1':
                this.labelSwitcher1.style.left = position + 'px';

            default:
                this.labelSwitcher2.style.left = position + 'px';
        }
    }

    setSwitch(id, caption, position) {
        this.setSwitcherCaption(id, caption);
        this.setSwitcherPosition(id, position);
    }

    setSwitcherCheck(id, status) {
        switch (id) {
            case '1':
                this.switcher1.checked = status;
            default:
                this.switcher2.checked = status;
        }
    }

    status() {
        if (this.switcher1.checked == true) {
            this.setSwitch('1', 'ON', '10');
        } else {
            this.setSwitch('1', 'ON', '50');
        }

        if (switcher2.checked == true) {
            this.setSwitch('2', 'ON', '10');
        } else {
            this.setSwitch('2', 'ON', '50');
        }
    }

    beginEvent() {
        this.initDOMElements();

        this.setSwitcherCheck('1', false);
        this.setSwitcherCheck('2', true);
        this.setSwitcherPosition('2', '10');

        this.switcher1.onclick = () => {
            this.status();
        };

        this.switcher2.onclick = () => {
            this.status();
        };

        console.log('switcher1 value: ' + switcher1.value);
        console.log('switcher2 value: ' + switcher2.value);
    }
}

new Toggles();

// ---

// const switcher1 = document.getElementById('switcher1');
// const switcher2 = document.getElementById('switcher2');
// const labelSwitcher1 = document.getElementById('labelSwitcher1');
// const labelSwitcher2 = document.getElementById('labelSwitcher2');

// console.log('switcher1 value: ' + switcher1.value);
// console.log('switcher2 value: ' + switcher2.value);

// function status() {
//     if (switcher1.checked == true) {
//         labelSwitcher1.innerHTML = 'ON';
//         labelSwitcher1.style.left = 10 + 'px';

//         console.log('switcher1: true');
//     } else {
//         labelSwitcher1.innerHTML = 'OFF';
//         labelSwitcher1.style.left = 50 + 'px';

//         console.log('switcher1: false');
//     }

//     if (switcher2.checked == true) {
//         labelSwitcher2.innerHTML = 'ON';
//         labelSwitcher2.style.left = 10 + 'px';
//     } else {
//         labelSwitcher2.innerHTML = 'OFF';
//         labelSwitcher2.style.left = 50 + 'px';
//     }
// }

// switcher1.checked = false;
// switcher1.onclick = status;

// switcher2.checked = true;
// labelSwitcher2.style.left = 10 + 'px';
// switcher2.onclick = status;