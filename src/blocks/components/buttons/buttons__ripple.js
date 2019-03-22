/*jshint esversion: 6 */

class Ripple {
    constructor(buttonName, rippleName) {
        this.xPos = 0;
        this.yPos = 0;
        this.rippleName = rippleName;
        this.buttonName = buttonName;

        this.beginEvent();
    }

    //'ripple_standard'; //.ripple_arrow
    // , .button-arrow + button-standard

    initDOMElements() {
        this.span = document.createElement('span');
        this.buttons = document.querySelectorAll('.' + this.buttonName);
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
                const rippleFrame = () => {
                    if (rippleWidth >= rippleHeight) {
                        rippleHeight = rippleWidth;
                    } else {
                        rippleWidth = rippleHeight;
                    }
                }

                // TODO: thing about this...
                // const rippleDefineCoordinates = () => {
                //     let targetCoorinates = event.target.getBoundingClientRect();
                //     let xCoordinate = event.clientX - targetCoorinates.left;
                //     let yCoordinate = event.clientY - targetCoorinates.top;

                //     this.xPos = xCoordinate;
                //     this.yPos = yCoordinate;
                //     console.log('xPos: ' + this.xPos + ' | yPos: ' + this.yPos);
                // }

                // NOTE: get the center of the cursor event click, for current coordinates
                const rippleDefineHorizonralCoordinates = () => {
                    this.xPos = event.layerX -  rippleWidth / 2;
                }

                const rippleDefineVerticalCoordinates = () => {
                    this.yPos = event.layerY - rippleHeight / 2;
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
                    this.span.className = this.rippleName;
                }

                rippleFrame();
                rippleDefineHorizonralCoordinates();
                rippleDefineVerticalCoordinates();
                rippleBeginEffect();
                rippleApplyCssEffect();
                this.buttons[i].appendChild(this.span);

                console.log('POS (y | x): ' + this.yPos + ' | ' + this.xPos);
            });
        }
    }

    beginEvent() {
        this.initDOMElements();
        this.getRippleEffect();
    }
}

new Ripple('button-standard', 'ripple_standard');
new Ripple('button-arrow', 'ripple_arrow');

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