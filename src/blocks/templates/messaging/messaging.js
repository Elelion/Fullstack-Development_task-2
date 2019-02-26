/* jshint esversion: 6 */

const MSG_CHAT = document.getElementsByClassName('messaging__input-form')[0];
const TXT_INPUT = document.getElementsByClassName('messaging__letter-send')[0];
const PARENT = document.getElementsByClassName('messaging__chat')[0];
const CHAT_BTN = document.getElementsByClassName('messaging__button-chat')[0];

// 1 - enabled, 0 - disabled
var msgBtnStatus = 0;

function msg() {
    if (msgBtnStatus == 0) {
        MSG_CHAT.style.display = 'block';
        CHAT_BTN.style.backgroundPosition = '-132px 8px';

        msgBtnStatus = 1;
    } else {
        MSG_CHAT.style.display = 'none';
        CHAT_BTN.style.backgroundPosition = '6px 8px';

        msgBtnStatus = 0;
    }

    TXT_INPUT.value = '';
}

function msgAdd() {
    if (msgBtnStatus == 1 && TXT_INPUT.value != '') {
        let clear = document.createElement('div');
        clear.className = 'messaging__clear';

        let div = document.createElement('div');
        div.className = 'messaging__send';
        div.innerHTML = '<p class=messaging__letter>' + TXT_INPUT.value + '</p>';

        PARENT.insertBefore(clear, PARENT.firstChild);
        PARENT.insertBefore(div, PARENT.firstChild);

        TXT_INPUT.value = '';
    }
}

function overMsg() {
    if (msgBtnStatus == 0) {
        CHAT_BTN.style.backgroundPosition = '-61px 8px';
    }
}

function leaveMsg() {
    if (msgBtnStatus == 0) {
        CHAT_BTN.style.backgroundPosition = '6px 8px';
    }
}

document.getElementsByClassName('messaging__button-chat')[0].onclick = msg;
document.getElementsByClassName('messaging__button-chat')[0].onmouseover = overMsg;
document.getElementsByClassName('messaging__button-chat')[0].onmouseleave = leaveMsg;

document.getElementsByClassName('button-standard__extension-messaging')[0].onclick = msgAdd;