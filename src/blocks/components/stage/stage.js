/*jshint esversion: 6 */

class Stage {
    constructor(id) {
        this.pos = 0;
        this.initId(id);
        this.beginEvent();
    }

    // **

    initId(id) {
        this.stageId = id;
        this.stageId = this.stageId.replace(/[^0-9]/g, "");

        if (this.stageId.length === 0) {
            this.stageId = 0;
        } else {
            this.stageId = this.stageId.substr(0, 1)
        }
    }

    initDOMElements() {
        this.browserWidth =
        window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;

        this.stage =
        document.getElementsByClassName('stage__track')[this.stageId];

        this.stageFill =
            document.getElementsByClassName('stage__range-fill')[this.stageId];

            this.points = document.querySelectorAll('.stage__track-point');
            // this.point1 = document.getElementsByClassName('stagePoint1')[this.stageId];
            // this.point2 = document.getElementsByClassName('stagePoint2')[this.stageId];
            // this.point3 = document.getElementsByClassName('stagePoint3')[this.stageId];
            // this.point4 = document.getElementsByClassName('stagePoint4')[this.stageId];
            // this.point5 = document.getElementsByClassName('stagePoint5')[this.stageId];
    }

    // **

    setFillPoints(emptyPoints, fillColor, fillFontColor) {
        let empty = 5 - emptyPoints;

        for (let i = 1; i <= empty; i += 1) {
            this.point = document.getElementsByClassName('stagePoint' + i)[this.stageId];
            this.point.style.backgroundColor = fillColor;
            this.point.style.color = fillFontColor;

            for (let j = 5; i < j; j -= 1) {
                this.point = document.getElementsByClassName('stagePoint' + j)[this.stageId];
                this.point.style.backgroundColor = '#E5E5E5';
                this.point.style.color = '#6F6F6F';
            }
        }
    }

    // **

    setPosition(pos) {
        // this.pos = (this.browserWidth < 601) ? minPosition : maxPosition;
        this.pos = pos;
    }

    getTrackPositionFill() {
        this.stageFill.style.width = this.pos + 'px';
    }

    setFillTrack(pos) {
        this.setPosition(pos);
        this.getTrackPositionFill();

        console.log('function setFillTrack / ' + pos);
    }

    // **

    setFillPointsTrack(key) {
        switch (key) {
            case 0: {
                this.setFillPoints('4', '#E75735', 'white');
                this.setFillTrack(0);
                break;
            }

            case 1: {
                this.setFillPoints('3', '#E75735', 'white');
                this.setFillTrack(this.browserWidth > 330 ? 80 : 80);
                this.setFillTrack(this.browserWidth > 420 ? 100 : '');
                this.setFillTrack(this.browserWidth > 560 ? 150 : '');
                this.setFillTrack(this.browserWidth > 1050 ? 220 : '');
                this.setFillTrack(this.browserWidth > 1430 ? 350 : '');
                this.setFillTrack(this.browserWidth > 1660 ? 400 : '');
                break;
            }

            case 2: {
                this.setFillPoints('2', '#E75735', 'white');
                this.setFillTrack(this.browserWidth > 330 ? 120 : 120);
                this.setFillTrack(this.browserWidth > 420 ? 150 : '');
                this.setFillTrack(this.browserWidth > 560 ? 250 : '');
                this.setFillTrack(this.browserWidth > 1050 ? 500 : '');
                this.setFillTrack(this.browserWidth > 1430 ? 650 : '');
                this.setFillTrack(this.browserWidth > 1660 ? 800 : '');
                break;
            }

            case 3: {
                this.setFillPoints('1', '#E75735', 'white');
                this.setFillTrack(this.browserWidth > 330 ? 150 : 150);
                this.setFillTrack(this.browserWidth > 420 ? 250 : '');
                this.setFillTrack(this.browserWidth > 560 ? 350 : '');
                this.setFillTrack(this.browserWidth > 1050 ? 720 : '');
                this.setFillTrack(this.browserWidth > 1430 ? 980 : '');
                this.setFillTrack(this.browserWidth > 1660 ? 1200 : '');
                break;
            }

            case 4: {
                this.setFillPoints('0', '#E75735', 'white');
                this.setFillTrack(this.browserWidth > 330 ? 250 : 250);
                this.setFillTrack(this.browserWidth > 420 ? 350 : '');
                this.setFillTrack(this.browserWidth > 560 ? 450 : '');
                this.setFillTrack(this.browserWidth > 1050 ? 900 : '');
                this.setFillTrack(this.browserWidth > 1430 ? 1300 : '');
                this.setFillTrack(this.browserWidth > 1660 ? 1560 : '');
                break;
            }
        }
    }

    // **

    beginEvent() {
        this.initDOMElements();

        this.stage.value = 0;
        this.setFillPointsTrack(0);

        for (let i = 0; i <= this.points.length; i += 1) {
            this.points[i].onclick = () => {
                this.setFillPointsTrack(i);
            }
        }
    }
}

new Stage('0');

// // client browser width:
// var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// // client browser:
// var browser = navigator.userAgent;

// // event for moving

// const stage = document.getElementsByClassName('stage__track')[0];
// const stageFill = document.getElementsByClassName('stage__range-fill')[0];

// const point1 = document.getElementById('stagePoint1');
// const point2 = document.getElementById('stagePoint2');
// const point3 = document.getElementById('stagePoint3');
// const point4 = document.getElementById('stagePoint4');
// const point5 = document.getElementById('stagePoint5');


// // func for filling point

// var pos = 0;

// function eventPoint1() {
//     point1.style.backgroundColor = '#E75735';

//     point2.style.backgroundColor = '#E5E5E5';
//     point3.style.backgroundColor = '#E5E5E5';
//     point4.style.backgroundColor = '#E5E5E5';
//     point5.style.backgroundColor = '#E5E5E5';

//     point1.style.color = 'white';
//     point2.style.color = '#6F6F6F';
//     point3.style.color = '#6F6F6F';
//     point4.style.color = '#6F6F6F';
//     point5.style.color = '#6F6F6F';

//     pos = 0;
//     stageFill.style.width = 0 + '%';
//     console.log('function eventPoint1()  / 0');
// }

// function eventPoint2() {
//     point1.style.backgroundColor = '#E75735';
//     point2.style.backgroundColor = '#E75735';

//     point3.style.backgroundColor = '#E5E5E5';
//     point4.style.backgroundColor = '#E5E5E5';
//     point5.style.backgroundColor = '#E5E5E5';

//     point2.style.color = 'white';
//     point3.style.color = '#6F6F6F';
//     point4.style.color = '#6F6F6F';
//     point5.style.color = '#6F6F6F';

//     pos = 23;
//     stageFill.style.width = pos + '%';
//     console.log('function eventPoint2() / 25');
// }

// function eventPoint3() {
//     point1.style.backgroundColor = '#E75735';
//     point2.style.backgroundColor = '#E75735';
//     point3.style.backgroundColor = '#E75735';

//     point4.style.backgroundColor = '#E5E5E5';
//     point5.style.backgroundColor = '#E5E5E5';

//     point2.style.color = 'white';
//     point3.style.color = 'white';
//     point4.style.color = '#6F6F6F';
//     point5.style.color = '#6F6F6F';

//     pos = 42;
//     if (browserWidth < 601) pos = 46;

//     stageFill.style.width = pos + '%';
//     console.log('function eventPoint3() / 50');
// }

// function eventPoint4() {
//     point1.style.backgroundColor = '#E75735';
//     point2.style.backgroundColor = '#E75735';
//     point3.style.backgroundColor = '#E75735';
//     point4.style.backgroundColor = '#E75735';

//     point5.style.backgroundColor = '#E5E5E5';

//     point2.style.color = 'white';
//     point3.style.color = 'white';
//     point4.style.color = 'white';
//     point5.style.color = '#6F6F6F';

//     pos = 65;
//     if (browserWidth < 601) pos = 66;

//     stageFill.style.width = pos + '%';
//     console.log('function eventPoint4() / 75');
// }

// function eventPoint5() {
//     point1.style.backgroundColor = '#E75735';
//     point2.style.backgroundColor = '#E75735';
//     point3.style.backgroundColor = '#E75735';
//     point4.style.backgroundColor = '#E75735';
//     point5.style.backgroundColor = '#E75735';

//     point2.style.color = 'white';
//     point3.style.color = 'white';
//     point4.style.color = 'white';
//     point5.style.color = 'white';

//     pos = 85;
//     if (browserWidth < 601) pos = 87;

//     stageFill.style.width = pos + '%';
//     console.log('function eventPoint5() / 100');
// }


// // call events

// stage.value = 0; 
// eventPoint1();

// point1.onclick = eventPoint1;
// point2.onclick = eventPoint2;
// point3.onclick = eventPoint3;
// point4.onclick = eventPoint4;
// point5.onclick = eventPoint5;
