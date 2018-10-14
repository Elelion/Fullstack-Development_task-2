/* jshint esversion: 6 */

const MSG_CHAT = document.getElementById('msgChatInput');
const TXT_INPUT = document.getElementById('messagingTextarea');
const PARENT = document.getElementById('messagingChatBlock');
const CHAT_BTN = document.getElementById('msgChatBtn');

var msgBtnStatus = 0;

function msg() {
	if (msgBtnStatus == 0) {
		MSG_CHAT.style.display = 'block';
		CHAT_BTN.style.backgroundPosition = '-619px -152px';

		msgBtnStatus = 1;
	} else {
		MSG_CHAT.style.display = 'none';
		CHAT_BTN.style.backgroundPosition = '-482px -152px';

		msgBtnStatus = 0;
	}

	TXT_INPUT.value = '';
}

function msgAdd() {
	let clear = document.createElement('div');
	clear.className = 'clear';

	let div = document.createElement('div');
	div.className = 'messaging__chats--from';
	div.innerHTML = '<p class=messaging__chats--font to__font--color>' + TXT_INPUT.value + '</p>';
	
	PARENT.insertBefore(clear, PARENT.firstChild);
	PARENT.insertBefore(div, PARENT.firstChild);

	TXT_INPUT.value = '';
}

function overMsg() {
	if (msgBtnStatus == 0) {
		CHAT_BTN.style.backgroundPosition = '-549px -152px';
	}
}

function leaveMsg() {
	if (msgBtnStatus == 0) {
		CHAT_BTN.style.backgroundPosition = '-482px -152px';
	}
}