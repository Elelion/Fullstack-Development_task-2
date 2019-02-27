/*jshint esversion: 6 */


// client browser width:
var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// client browser:
var browser = navigator.userAgent;

// event for moving

// const stage = document.getElementById('stage');
// const stageFill = document.getElementById('stageRangeFill');
const stage = document.getElementsByClassName('stage__track')[0];
const stageFill = document.getElementsByClassName('stage__range-fill')[0];

const point1 = document.getElementById('stagePoint1');
const point2 = document.getElementById('stagePoint2');
const point3 = document.getElementById('stagePoint3');
const point4 = document.getElementById('stagePoint4');
const point5 = document.getElementById('stagePoint5');


// func for filling point

var pos = 0;

function eventPoint1() {
    point1.style.backgroundColor = '#E75735';

    point2.style.backgroundColor = '#E5E5E5';
    point3.style.backgroundColor = '#E5E5E5';
    point4.style.backgroundColor = '#E5E5E5';
    point5.style.backgroundColor = '#E5E5E5';

    point1.style.color = 'white';
    point2.style.color = '#6F6F6F';
    point3.style.color = '#6F6F6F';
    point4.style.color = '#6F6F6F';
    point5.style.color = '#6F6F6F';
    
    pos = 0;
    stageFill.style.width = 0 + '%';    
    console.log('function eventPoint1()  / 0');
}

function eventPoint2() {
    point1.style.backgroundColor = '#E75735';
    point2.style.backgroundColor = '#E75735';

    point3.style.backgroundColor = '#E5E5E5';
    point4.style.backgroundColor = '#E5E5E5';
    point5.style.backgroundColor = '#E5E5E5';

    point2.style.color = 'white';
    point3.style.color = '#6F6F6F';
    point4.style.color = '#6F6F6F';
    point5.style.color = '#6F6F6F';

    pos = 23;
    stageFill.style.width = pos + '%';
    console.log('function eventPoint2() / 25');
}

function eventPoint3() {
    point1.style.backgroundColor = '#E75735';
    point2.style.backgroundColor = '#E75735'; 
    point3.style.backgroundColor = '#E75735';

    point4.style.backgroundColor = '#E5E5E5';
    point5.style.backgroundColor = '#E5E5E5';

    point2.style.color = 'white';
    point3.style.color = 'white';
    point4.style.color = '#6F6F6F';
    point5.style.color = '#6F6F6F';

    pos = 42;
    if (browserWidth < 601) pos = 46;

    stageFill.style.width = pos + '%';
    console.log('function eventPoint3() / 50');
}

function eventPoint4() {
    point1.style.backgroundColor = '#E75735';
    point2.style.backgroundColor = '#E75735'; 
    point3.style.backgroundColor = '#E75735'; 
    point4.style.backgroundColor = '#E75735';

    point5.style.backgroundColor = '#E5E5E5';

    point2.style.color = 'white';
    point3.style.color = 'white';
    point4.style.color = 'white';
    point5.style.color = '#6F6F6F';

    pos = 65;
    if (browserWidth < 601) pos = 66;

    stageFill.style.width = pos + '%';
    console.log('function eventPoint4() / 75');
}

function eventPoint5() {
    point1.style.backgroundColor = '#E75735';
    point2.style.backgroundColor = '#E75735'; 
    point3.style.backgroundColor = '#E75735'; 
    point4.style.backgroundColor = '#E75735'; 
    point5.style.backgroundColor = '#E75735';
    
    point2.style.color = 'white';
    point3.style.color = 'white';
    point4.style.color = 'white';
    point5.style.color = 'white';

    pos = 85;
    if (browserWidth < 601) pos = 87;

    stageFill.style.width = pos + '%';
    console.log('function eventPoint5() / 100');
}


// call events

stage.value = 0; 
eventPoint1();

point1.onclick = eventPoint1;
point2.onclick = eventPoint2;
point3.onclick = eventPoint3;
point4.onclick = eventPoint4;
point5.onclick = eventPoint5;
