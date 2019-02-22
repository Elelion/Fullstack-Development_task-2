/*jshint esversion: 6 */


const switcher1 = document.getElementById('switcher1');
const switcher2 = document.getElementById('switcher2');
const labelSwitcher1 = document.getElementById('labelSwitcher1');
const labelSwitcher2 = document.getElementById('labelSwitcher2');

console.log('switcher1 value: ' + switcher1.value);
console.log('switcher2 value: ' + switcher2.value);

function status() {
    if (switcher1.checked == true) {
        labelSwitcher1.innerHTML = 'ON';
        labelSwitcher1.style.left = 10 + 'px';

        console.log('switcher1: true');
    } else {
        labelSwitcher1.innerHTML = 'OFF';
        labelSwitcher1.style.left = 50 + 'px';

        console.log('switcher1: false');
    }

    if (switcher2.checked == true) {
        labelSwitcher2.innerHTML = 'ON';
        labelSwitcher2.style.left = 10 + 'px';
    } else {
        labelSwitcher2.innerHTML = 'OFF';
        labelSwitcher2.style.left = 50 + 'px';
    }
}

switcher1.checked = false;
switcher1.onclick = status;

switcher2.checked = true;
labelSwitcher2.style.left = 10 + 'px';
switcher2.onclick = status;