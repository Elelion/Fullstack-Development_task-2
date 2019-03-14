/* first trackBar */

class StepSlider {
    constructor(id) {
        this.pointPosition = 0;
        this.typeClientBrowser = navigator.userAgent;
        this.widthClientBrowser =
            window.innerWidth || document.documentElement.clientWidth ||
            document.body.clientWidth;

        this.initId(id);
        this.beginEvent();
    }

    initId(id) {
        this.stepSliderId = id;
        this.stepSliderId = this.stepSliderId.replace(/[^0-9]/g, "");

        this.stepSliderId = this.stepSliderId.length === 0
            ? 0
            : this.stepSliderId.substr(0, 1);
    }

    initDOMElements() {
        this.sliderTrackFill =
            document.getElementsByClassName(
                'step-slider__fill')[this.stepSliderId];

        this.sliderTrack =
            document.getElementsByClassName(
                'step-slider__range')[this.stepSliderId];
    }

    setTrackFill(value, unit) {
        this.sliderTrackFill.style.width = unit === 'px'
            ? Number(this.pointPosition) + Number(value) + 'px'
            : value + '%';
    }

    positionTrackBar() {
        this.pointPosition = this.sliderTrack.value;

        switch (this.pointPosition) {
            case '0':
                this.setTrackFill('0', 'px');
                break;

            case '25':
                if (this.widthClientBrowser > 820) {
                    this.setTrackFill('150', 'px');
                } else {
                    this.setTrackFill('15', '%');
                }

                break;

            case '50':
                if (this.widthClientBrowser > 820) {
                    this.setTrackFill('300', 'px');
                } else {
                    this.setTrackFill('30', '%');
                }

                break;

            case '75':
                if (this.widthClientBrowser > 820) {
                    this.setTrackFill('450', 'px');
                } else {
                    this.setTrackFill('45', '%');
                }

                break;

            case '100':
                if (this.widthClientBrowser > 820) {
                    this.setTrackFill('600', 'px');
                } else {
                    this.setTrackFill('60', '%');
                }

                break;
        }

        console.log('pointPosition: ' + this.pointPosition);
    }

    beginEvent() {
        this.initDOMElements();
        this.sliderTrack.value = 0;

        this.sliderTrack.onclick = () => {
            this.positionTrackBar();
        };

        this.sliderTrack.mouseenter = () => {
            this.positionTrackBar();
        };

        this.sliderTrack.onmousemove = () => {
            this.positionTrackBar();
        };

        this.sliderTrack.mousedown = () => {
            this.positionTrackBar();
        };

        this.sliderTrack.mouseup = () => {
            this.positionTrackBar();
        };
    }
}

new StepSlider('0');

// ---

// // client browser width:
// var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// // client browser:
// var browser = navigator.userAgent;

// var pos2 = 0;
// var sum = 0;

// // var fill = document.getElementById('sliderRangeFill');
// // var track2 = document.getElementById('trackBar2');
// var fill = document.getElementsByClassName('step-slider__fill')[0];
// var track2 = document.getElementsByClassName('step-slider__range')[0];

// function positionTrackBar2() {

//     pos2 = track2.value;

//     switch (pos2) {
//         case '0':
//             sum = pos2 * 1 + 0;
//             fill.style.width = sum + 'px';
//             break;

//         case '25':
//             if (browserWidth > 820) {
//                 sum = pos2 * 1 + 150;
//                 fill.style.width = sum + 'px';
//             } else {
//                 fill.style.width = 25 + '%';
//             }

//             break;

//         case '50':
//             if (browserWidth > 820) {
//                 sum = pos2 * 1 + 300;
//                 fill.style.width = sum + 'px';
//             } else {
//                 fill.style.width = 48 + '%';
//             }

//             break;

//         case '75':
//             if (browserWidth > 820) {
//                 sum = pos2 * 1 + 450;
//                 fill.style.width = sum + 'px';
//             } else {
//                 fill.style.width = 69 + '%';
//             }

//             break;

//         case '100':
//             if (browserWidth > 820) {
//                 sum = pos2 * 1 + 600;
//                 fill.style.width = sum + 'px';
//             } else {
//                 fill.style.width = 88 + '%';
//             }
//             break;
//     }

//     console.log('pos2: ' + pos2);
//     console.log('sum: ' + sum);
// }

// track2.value = 0;

// track2.onclick = positionTrackBar2;
// track2.mouseenter = positionTrackBar2;
// track2.onmousemove = positionTrackBar2;
// track2.mousedown = positionTrackBar2;
// track2.mouseup = positionTrackBar2;