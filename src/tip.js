/* jshint esversion: 6 */

const editName = document.getElementById('editName');
const editEmail = document.getElementById('editEmail');
const memo = document.getElementById('memo');

const nameTip = document.getElementById('nameTip');
const nameTipTriangle = document.getElementById('nameTipTriangle');
const nameTipLabel = document.getElementById('nameTipLabel');

const emailTip = document.getElementById('emailTip');
const emailTipTriangle = document.getElementById('emailTipTriangle');
const emailTipLabel = document.getElementById('emailTipLabel');


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

editEmail.value = 'elelion@yandex.ru';
feedbackEditsCheck();
