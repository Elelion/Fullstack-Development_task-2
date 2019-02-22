/*jshint esversion: 6 */

var nowDate = new Date();                   // тукущая дата
var today = nowDate.getDate();              // текущий день (1...31)
var currentMonth = nowDate.getMonth() + 1;  // текущий месяц (т.к. нумерация с 0...11, то +1)
var currentYear = nowDate.getFullYear();    // текущий год (2018...)
var temp = new Date(currentYear, currentMonth, 0);
var CURRENT_MONTH = currentMonth;

var dayClassTitle = 'calendar__day-title';
var monthClassTitle = 'calendar__month-title';
var calendarClassDisabledDay = 'calendar__disabled-day';
var calendarClassListYear = 'calendar__list-year';
var calendarClassListMonth = 'calendar__list-month';


/* ___main func___ */

var table; // для построения таблици
var currentStatus = 0; // для статуса кнопки current

function createCalendar(id, year, month) {
    let elem = document.getElementById(id); // calendar
    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);
    table = 
        '<table class='+ calendarClassListYear + '>' +
            '<tr>' +
                '<th class=' + calendarClassListMonth + '>MON</th>' +
                '<th class=' + calendarClassListMonth + '>TUE</th>' +
                '<th class=' + calendarClassListMonth + '>WED</th>' +
                '<th class=' + calendarClassListMonth + '>THU</th>' +
                '<th class=' + calendarClassListMonth + '>FRI</th>' +
                '<th class=' + calendarClassListMonth + '>SAT</th>' +
                '<th class=' + calendarClassListMonth + '>SUM</th>' +
            '</tr><tr>';

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    /*
    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }
    */
    let daysBefore = getDay(d);
    let lastDays = daysInMonth(UserMonth,UserYear);

    console.log('lastDays: ' + lastDays);
    console.log('daysBefore: ' + daysBefore);
    switch(daysBefore) {
        case 6:
            fillEmptyDaysBefore(6);
            break;

        case 5:
            fillEmptyDaysBefore(5);
            break;

        case 4:
            fillEmptyDaysBefore(4);
            break;

        case 3:
            fillEmptyDaysBefore(3);
            break;

        case 2:
            fillEmptyDaysBefore(2);
            break;

        case 1:
            fillEmptyDaysBefore(1);
            break;
    }

    // ячейки календаря с датами
    while (d.getMonth() == mon) {

        // задаем id для ячейки, где будет текущая дата
        if (d.getDate() == today) {
            table += '<td id=currentDate class=calendar__cell>' + d.getDate() + '</td>';
            console.log("today: " + today);
        } else {
            table += '<td class=calendar__cell>' + d.getDate() + '</td>';
        }

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
          table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }
    
    if (getDay(d) != 0) {
        let daysAfter = getDay(d);

        switch (daysAfter) {
            case 6:
                fillEmptyDaysAfter(1);
                break;

            case 5:
                fillEmptyDaysAfter(2);
                break;

            case 4:
                fillEmptyDaysAfter(3);
                break;

            case 3:
                fillEmptyDaysAfter(4);
                break;

            case 2:
                fillEmptyDaysAfter(5);
                break;

            case 1:
                fillEmptyDaysAfter(6);
                break;
        }

        console.log('getDay (fill): ' + getDay(d));
    }

    // закрыть таблицу
    table += '</tr></table>';

    // только одно присваивание innerHTML
    elem.innerHTML = table;
}


/* ___supprt functions___ */

// заполнение 'пустых' дней в НАЧАЛЕ
function fillEmptyDaysBefore(step) {    
    let lastDays = daysInMonth(UserMonth - 1, UserYear); // последний день предыдущего месяца
    let sum; // для вычита прошедших дней
    let temp; // для реверсии массива с прошедшими днями месяца
    let arr = []; // тут будем хранить прошедшие дни

    // заполняем массив, прошедшими днями, например: 31, 30, 29...
    for (let i = 0; i <= step; i++) {
        sum = lastDays - i;
        arr[i] = sum;           
    }

    // меняем значения задом наперед, т.е. было 31, 30, 29 а станет: 29, 30, 31...
    temp = arr.reverse(); 
    console.log(temp);

    // заносим реверсные значения в таблицу
    for (let i = 1; i <= step; i++) {
        table += '<td class=calendar__disabled><div class='+ calendarClassDisabledDay +'>' + temp[i] + '</div></td>';
    }
}

// заполнение 'пустых' дней в КОНЦЕ
function fillEmptyDaysAfter(step) {     
    for (let i = 1; i <= step; i++) {
        table += '<td class=calendar__disabled><div class='+ calendarClassDisabledDay +'>' + i + '</div></td>'; 
    }
}

// получить номер дня недели, от 0(пн) до 6(вс)
function getDay(date) {
    let day = date.getDay();
    
    if (day == 0) {
        day = 7; 
    }

    return day - 1;
}

// получить кол-во дней взаданном месяце года
function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

// заносим текущую дату в блок
function currentDayForBlock() {
    let currentDay = document.getElementById('currentDay');    
    currentDay.innerHTML = '<div class='+ dayClassTitle +'>' + today + '</div>';
}

// месяци для блока
function currentMonthForBlock(month) {
    // let curMnt = document.getElementById('currentMonth');
    let curMnt = document.getElementsByClassName('calendar__month')[0];

    switch (month) {
        case 1:
            curMnt.innerHTML = '<div class='+ monthClassTitle +'>January</div>'; 
            break;

        case 2:
            curMnt.innerHTML = '<div class='+ monthClassTitle +'>February</div>'; 
            break;

        case 3:
            curMnt.innerHTML = '<div class='+ monthClassTitle +'>March</div>'; 
            break;

        case 4:
            curMnt.innerHTML = '<div class='+ monthClassTitle +'>April</div>'; 
            break;

        case 5:
            curMnt.innerHTML = '<div class='+ monthClassTitle +'>May</div>'; 
            break;

        case 6:
            curMnt.innerHTML = '<div class='+ monthClassTitle +'>June</div>'; 
            break;

        case 7:
            curMnt.innerHTML = '<div class='+ monthClassTitle +'>July</div>'; 
            break;

        case 8:
            curMnt.innerHTML = '<div class='+ monthClassTitle +'>August</div>'; 
            break;

        case 9:
            curMnt.innerHTML = '<div class='+ monthClassTitle +'>September</div>'; 
            break;

        case 10:
            curMnt.innerHTML = '<div class='+ monthClassTitle +'>October</div>'; 
            break;

        case 11:
            curMnt.innerHTML = '<div class='+ monthClassTitle +'>November</div>'; 
            break;

        case 12:
            curMnt.innerHTML = '<div class='+ monthClassTitle +'>December</div>'; 
            break;
    }
}

// клик по дате в календаре
function select() {
    var tds = document.getElementsByClassName('calendar__cell'); // выбираем все td с классом cell
    
    // перебираем их
    for (let i = 0; i < tds.length; i++) {
        // добавляем каждой td с классом cell - событие event (где будет наш click по ячейке)
        tds[i].addEventListener('click', function() {
            let temp = i + 1;
            currentDay.innerHTML = '<div class='+ dayClassTitle +'>' + temp + '</div>';
            console.log(i + 1);
        });
    }
}

// кнопка назад
function back() {
    if (currentMonth > 1) {
        currentMonth--; 
        currentMonthForBlock(currentMonth);

        createCalendar('calendar', UserYear, currentMonth); 
        select();
    }
}

// кнопка вперед
function next() {
    if (currentMonth < 12) {
        currentMonth++; 
        currentMonthForBlock(currentMonth);

        createCalendar('calendar', UserYear, currentMonth); 
        select();
    }
}

// событие при клике кнопки, выделаем текущую дату которой присвоин ID
function current() {
    currentDayForBlock();
    currentMonthForBlock(CURRENT_MONTH);
    createCalendar('calendar', UserYear, CURRENT_MONTH); 

    let currentDay = document.getElementById('currentDate');
    // let currentDay = document.getElementsByClassName('calendar__cell');    

    switch (currentStatus) {
     case 0:
        currentDay.style.background = '#E75735';
        currentDay.style.color = 'white';
        currentStatus = 1;
        break; 

    case 1:
        currentDay.style.background = '#F2F2F2';
        currentDay.style.color = 'black';
        currentStatus = 0; 
        break;
    }

    select();
}


/* ___others___ */

let UserYear = currentYear;
let UserMonth = CURRENT_MONTH;

console.log('currentMonth: ' + currentMonth);
console.log('currentYear: ' + currentYear);
console.log('daysInMonth:' + daysInMonth(UserMonth,UserYear));

currentDayForBlock();
currentMonthForBlock(currentMonth);
createCalendar('calendar', UserYear, UserMonth); 
select();


document.getElementsByClassName('calendar__button-month')[0].onclick = back;
document.getElementsByClassName('calendar__button-month')[1].onclick = next;

document.getElementsByClassName('calendar__content')[0].onclick = select;
document.getElementsByClassName('button-standard__extension-calendar')[0].onclick = current;