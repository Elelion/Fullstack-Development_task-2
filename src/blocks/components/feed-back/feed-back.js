/* jshint esversion: 6 */

// const editName = document.getElementById('editName');
// const editEmail = document.getElementById('editEmail');
// const memo = document.getElementById('memo');
const editName = document.getElementsByClassName('feed-back__input-name')[0];
const editEmail = document.getElementsByClassName('feed-back__input-email')[0];
const memo = document.getElementsByClassName('feed-back__message')[0];

// const nameTip = document.getElementById('nameTip');
// const nameTipTriangle = document.getElementById('nameTipTriangle');
// const nameTipLabel = document.getElementById('nameTipLabel');
const nameTip = document.getElementsByClassName('feed-back__tip-name')[0];
const nameTipTriangle = document.getElementsByClassName('feed-back__tip_triangle-name')[0];
const nameTipLabel = document.getElementsByClassName('feed-back__label-name')[0];

// const emailTip = document.getElementById('emailTip');
// const emailTipTriangle = document.getElementById('emailTipTriangle');
// const emailTipLabel = document.getElementById('emailTipLabel');
const emailTip = document.getElementsByClassName('feed-back__tip-email')[0];
const emailTipTriangle = document.getElementsByClassName('feed-back__tip_triangle-email')[0];
const emailTipLabel = document.getElementsByClassName('feed-back__label-email')[0];


/* event for edits */

function feedbackEditsCheck() {
    /* name check */
    if (editName.value == '') {        
        nameTip.style.background = '#E75735';
        nameTipTriangle.style.borderRight = '12px solid #E75735';
        nameTipLabel.innerHTML = 'error';
    } else {
        nameTip.style.background = '#4EB7A8';
        nameTipTriangle.style.borderRight = '12px solid #4EB7A8';
        nameTipLabel.innerHTML = 'thanks!';
    }


    /* email check */
    if (editEmail.value == '') {        
        emailTip.style.background = '#E75735';
        emailTipTriangle.style.borderRight = '12px solid #E75735';
        emailTipLabel.innerHTML = 'error';
    } else {
        emailTip.style.background = '#4EB7A8';
        emailTipTriangle.style.borderRight = '12px solid #4EB7A8';
        emailTipLabel.innerHTML = 'thanks!';
    }

}


/* event for button */

function feedbackButton() {
    if (editName.value != '' && editEmail.value != '') {
        alert('Success fields');
    } else {
        alert('Empty fields :-[');
    }
}


/* default */

document.getElementsByClassName('feed-back__input-name')[0].onblur = feedbackEditsCheck;
document.getElementsByClassName('feed-back__input-email')[0].onblur = feedbackEditsCheck;
document.getElementsByClassName('button-standard__extension-feedback')[0].onclick = feedbackButton;

editEmail.value = 'elelion@yandex.ru';
feedbackEditsCheck();