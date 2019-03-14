/* jshint esversion: 6 */

class Messaging {
    constructor(id) {
        this.msgBtnStatus = false;

        this.initId(id);
        this.beginEvent();
    }

    initId(id) {
        this.idMessaging = id;
        this.idMessaging = this.idMessaging.replace(/[^0-9]/g, "");

        this.idMessaging = this.idMessaging.length === 0
            ? 0
            : this.idMessaging.substr(0, 1);
    }

    initDOMElements() {
        this.chatWindow =
            document.getElementsByClassName(
                'messaging__input-form')[this.idMessaging];

        this.sendMsg =
            document.getElementsByClassName(
                'messaging__letter-send')[this.idMessaging];

        this.parent =
            document.getElementsByClassName(
                'messaging__chat')[this.idMessaging];

        this.chatBtn =
            document.getElementsByClassName(
                'messaging__button-chat')[this.idMessaging];

        this.buttonMsg =
            document.getElementsByClassName(
                'button-standard__extension-messaging')[this.idMessaging];
    }

    setMsgShowInput(display, position) {
        this.chatWindow.style.display = display;
        this.chatBtn.style.backgroundPosition = position;
    }

    getMsgShowInput() {
        if (this.msgBtnStatus == false) {
            this.setMsgShowInput('block', '-132px 8px');
            this.msgBtnStatus = true;
        } else {
            this.setMsgShowInput('none', '6px 8px');
            this.msgBtnStatus = false;
        }

        this.sendMsg.value = '';
    }

    getCreateClearBlockMessage() {
        let clear = document.createElement('div');
        clear.className = 'messaging__clear';
        return clear;
    }

    getCreateBlockMessage() {
        let div = document.createElement('div');
        div.className = 'messaging__send';
        div.innerHTML = '<p class=messaging__letter>' + this.sendMsg.value + '</p>';
        return div;
    }

    getMsgAdd() {
        if (this.msgBtnStatus == true && this.sendMsg.value != '') {
            this.parent.insertBefore(this.getCreateClearBlockMessage(), this.parent.firstChild);
            this.parent.insertBefore(this.getCreateBlockMessage(), this.parent.firstChild);
            this.sendMsg.value = '';
        }
    }

    getMsgBtnOverMouse() {
        if (this.msgBtnStatus == false) {
            this.setMsgShowInput('none', '-61px 8px');
        }
    }

    msgBtnLeaveMouse() {
        if (this.msgBtnStatus == false) {
            this.setMsgShowInput('none', '6px 8px');
        }
    }

    beginEvent() {
        this.initDOMElements();

        this.chatBtn.onclick = () => {
            this.getMsgShowInput();
        }

        this.chatBtn.onmouseover = () => {
            this.getMsgBtnOverMouse();
        }

        this.chatBtn.onmouseleave = () => {
            this.msgBtnLeaveMouse();
        }

        this.buttonMsg.onclick = () => {
            this.getMsgAdd();
        }
    }
}

new Messaging('0');

// ---

// const MSG_CHAT = document.getElementsByClassName('messaging__input-form')[0];
// const TXT_INPUT = document.getElementsByClassName('messaging__letter-send')[0];
// const PARENT = document.getElementsByClassName('messaging__chat')[0];
// const CHAT_BTN = document.getElementsByClassName('messaging__button-chat')[0];

// // 1 - enabled, 0 - disabled
// var msgBtnStatus = 0;

// function msg() {
//     if (msgBtnStatus == 0) {
//         MSG_CHAT.style.display = 'block';
//         CHAT_BTN.style.backgroundPosition = '-132px 8px';

//         msgBtnStatus = 1;
//     } else {
//         MSG_CHAT.style.display = 'none';
//         CHAT_BTN.style.backgroundPosition = '6px 8px';

//         msgBtnStatus = 0;
//     }

//     TXT_INPUT.value = '';
// }

// function msgAdd() {
//     if (msgBtnStatus == 1 && TXT_INPUT.value != '') {
//         let clear = document.createElement('div');
//         clear.className = 'messaging__clear';

//         let div = document.createElement('div');
//         div.className = 'messaging__send';
//         div.innerHTML = '<p class=messaging__letter>' + TXT_INPUT.value + '</p>';

//         PARENT.insertBefore(clear, PARENT.firstChild);
//         PARENT.insertBefore(div, PARENT.firstChild);

//         TXT_INPUT.value = '';
//     }
// }

// function overMsg() {
//     if (msgBtnStatus == 0) {
//         CHAT_BTN.style.backgroundPosition = '-61px 8px';
//     }
// }

// function leaveMsg() {
//     if (msgBtnStatus == 0) {
//         CHAT_BTN.style.backgroundPosition = '6px 8px';
//     }
// }

// document.getElementsByClassName('messaging__button-chat')[0].onclick = msg;
// document.getElementsByClassName('messaging__button-chat')[0].onmouseover = overMsg;
// document.getElementsByClassName('messaging__button-chat')[0].onmouseleave = leaveMsg;

// document.getElementsByClassName('button-standard__extension-messaging')[0].onclick = msgAdd;