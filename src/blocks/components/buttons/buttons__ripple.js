/*jshint esversion: 6 */

class Ripple {
    constructor(id) {
        this.xPos = 0;
        this.yPos = 0;
        this.rippleTarget = 'ripple_standard';

        this.initId(id);
        this.beginEvent();
    }

    initId(id) {
        this.rippleId = id;
        this.rippleId = this.rippleId.replace(/[^0-9]/g, "");

        this.rippleId = this.rippleId.length === 0
            ? 0
            : this.rippleId.substr(0, 1);
    }

    initDOMElements() {
        // , .button-arrow
        this.span = document.createElement('span');
        this.buttons = document.querySelectorAll('.button-standard');
    }

    getRippleEffect() {
        for (let i = 0; i < this.buttons.length; i += 1) {
            this.buttons[i].addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();

                // NOTE: create element for a zone for the effect
                let rippleWidth = this.buttons[i].clientWidth;
                let rippleHeight = this.buttons[i].clientHeight;
                let rippleEffect = this.span.style;

                // NOTE: make it round. Effect stayed on the borders button
                function rippleFrame() {
                    if (rippleWidth >= rippleHeight) {
                        rippleHeight = rippleWidth;
                    } else {
                        rippleWidth = rippleHeight;
                    }
                }

                // const rippleDefineCoordinates = () => {
                //     let targetCoorinates = event.target.getBoundingClientRect();
                //     let xCoordinate = event.clientX - targetCoorinates.left;
                //     let yCoordinate = event.clientY - targetCoorinates.top;

                //     this.xPos = xCoordinate;
                //     this.yPos = yCoordinate;
                //     console.log('xPos: ' + this.xPos + ' | yPos: ' + this.yPos);
                // }

                // NOTE: get the center of the element, for current coordinates
                const rippleDefineHorizonralCoordinates = () => {
                    this.xPos = event.layerX -  rippleWidth / 2;
                    // this.xPos = event.offsetX === undefined
                    //     ? event.layerX
                    //     : event.offsetX - rippleWidth / 2;
                }

                const rippleDefineVerticalCoordinates = () => {
                    this.yPos = event.layerY - rippleHeight / 2;
                    // this.yPos = event.offsetY === undefined
                    //     ? event.layerY
                    //     : event.offsetY - rippleHeight / 2;

                    console.log('POS (y | x): ' + this.yPos + ' | ' + this.xPos);
                }

                // NOTE:
                // the starting point from which the effect begins
                // and set its distribution
                const rippleBeginEffect = () => {
                    rippleEffect.width = rippleWidth + 'px';
                    rippleEffect.height = rippleHeight + 'px';
                    rippleEffect.top = this.yPos + 'px';
                    rippleEffect.left = this.xPos + 'px';
                }

                const rippleApplyCssEffect = () => {
                    this.span.className = this.rippleTarget;
                }

                rippleFrame();
                rippleDefineHorizonralCoordinates();
                rippleDefineVerticalCoordinates();
                rippleBeginEffect();
                rippleApplyCssEffect();
                this.buttons[i].appendChild(this.span);
            });
        }
    }

    beginEvent() {
        this.initDOMElements();
        this.getRippleEffect();
    }
}

new Ripple('0');

// ---

// const buttons = document.querySelectorAll('.button-standard, .button-arrow');
// const SPAN = document.createElement('span');
// let xPos;
// let yPos;

// for (let i = 0; i < buttons.length; i += 1) {
//     buttons[i].addEventListener('click', function(event) {
//         event.preventDefault();

//         // NOTE: create element for a zone for the effect
//         let rippleWidth = this.offsetWidth;
//         let rippleHeight = this.offsetHeight;
//         let rippleEffect = SPAN.style;

//         // NOTE: make it round. Effect stayed on the borders button
//         function rippleFrame() {
//             if (rippleWidth >= rippleHeight) {
//                 rippleHeight = rippleWidth;
//             } else {
//                 rippleWidth = rippleHeight;
//             }
//         }

//         // NOTE: get the center of the element, for current coordinates
//         const rippleDefineHorizonralCoordinates = () => {
//             if (event.offsetX === undefined) {
//                 xPos = event.layerX;
//             } else {
//                 xPos = event.offsetX - rippleWidth / 2;
//             }
//         }

//         const rippleDefineVerticalCoordinates = () => {
//             if (event.offsetY === undefined) {
//                 yPos = event.layerY;
//             } else {
//                 yPos = event.offsetY - rippleHeight / 2;
//             }
//         }

//         // NOTE:
//         // the starting point from which the effect begins
//         // and set its distribution
//         const rippleBeginEffect = () => {
//             rippleEffect.width = rippleWidth + 'px';
//             rippleEffect.height = rippleHeight + 'px';
//             rippleEffect.top = yPos + 'px';
//             rippleEffect.left = xPos + 'px';
//         }

//         const rippleApplyCssEffect = () => {
//             SPAN.className = 'ripple';
//         }

//         rippleFrame();
//         rippleDefineHorizonralCoordinates();
//         rippleDefineVerticalCoordinates();
//         rippleBeginEffect();
//         rippleApplyCssEffect();

//         this.appendChild(SPAN);
//     });
// }