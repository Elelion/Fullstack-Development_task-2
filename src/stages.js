/*jshint esversion: 6 */


// event for moving

const stage = document.getElementById('stage');
const stageFill = document.getElementById('stageRangeFill');

const point1 = document.getElementById('stagePoint1');
const point2 = document.getElementById('stagePoint2');
const point3 = document.getElementById('stagePoint3');
const point4 = document.getElementById('stagePoint4');
const point5 = document.getElementById('stagePoint5');


// func for filling point

var pos = 0;
var sum = 0;

pos = stage.value;

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

    sum = pos * 1 + 0;
    stageFill.style.width = sum + 'px';

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

    sum = pos * 1 + 380;
    stageFill.style.width = sum + 'px';

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

    sum = pos * 1 + 780;
    stageFill.style.width = sum + 'px';

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

    sum = pos * 1 + 1200;
    stageFill.style.width = sum + 'px';

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

    sum = pos * 1 + 1550;
    stageFill.style.width = sum + 'px';

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
