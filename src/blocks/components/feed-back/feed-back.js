/* jshint esversion: 6 */

class FeedBack {
    constructor(id) {
        this.initId(id);
        this.beginEvent();
    }

    initId(id) {
        this.feedBackId = id;
        this.feedBackId = this.feedBackId.replace(/[^0-9]/g, "");

        if (this.feedBackId.length === 0) {
            this.feedBackId = 0;
        } else {
            this.feedBackId = this.feedBackId.substr(0, 1)
        }
    }

    initDOMElements() {
        this.name =
            document.getElementsByClassName(
                'feed-back__input-name')[this.feedBackId];

        this.email =
            document.getElementsByClassName(
                'feed-back__input-email')[this.feedBackId];

        this.message =
            document.getElementsByClassName(
                'feed-back__message')[this.feedBackId];

        this.nameTip =
            document.getElementsByClassName(
                'feed-back__tip-name')[this.feedBackId];

        this.nameTipTriangle =
            document.getElementsByClassName(
                'feed-back__tip_triangle-name')[this.feedBackId];

        this.nameTipLabel =
            document.getElementsByClassName(
                'feed-back__label-name')[this.feedBackId];

        this.emailTip =
            document.getElementsByClassName(
                'feed-back__tip-email')[this.feedBackId];

        this.emailTipTriangle =
            document.getElementsByClassName(
                'feed-back__tip_triangle-email')[this.feedBackId];

        this.emailTipLabel =
            document.getElementsByClassName(
                'feed-back__label-email')[this.feedBackId];

        this.button =
            document.getElementsByClassName(
                'button-standard__extension-feedback')[this.feedBackId];
    }

    setEmailValue(value) {
        this.email.value = value;
    }

    setTipColor(name, color) {
        switch (name) {
            case 'nameTip':
                if (/#\w\w\w\w\w\w/.test(color)) {
                    this.nameTip.style.background = color;
                    this.nameTipTriangle.style.borderRight = '12px solid ' + color;
                } else {
                    this.nameTip.style.background = '#E75735';
                    this.nameTipTriangle.style.borderRight = '12px solid #E75735';
                }

            case 'emailTip':
                if (/#\w\w\w\w\w\w/.test(color)) {
                    this.emailTip.style.background = color;
                    this.emailTipTriangle.style.borderRight = '12px solid ' + color;
                } else {
                    this.emailTip.style.background = '#E75735';
                    this.emailTipTriangle.style.borderRight = '12px solid #E75735';
                }
        }
    }

    setTipLabel(name, caption) {
        switch (name) {
            case 'nameTip':
                this.nameTipLabel.innerHTML = caption;

            case 'emailTip':
                this.emailTipLabel.innerHTML = caption;
        }
    }

    getNameCheck() {
        if (this.name.value == '') {
            this.setTipColor('nameTip', '#E75735');
            this.setTipLabel('nameTip', 'error');
        } else {
            this.setTipColor('nameTip', '#4EB7A8');
            this.setTipLabel('nameTip', 'thanks!');
        }
    }

    getEmailCheck() {
        if (this.email.value == '') {
            this.setTipColor('emailTip', '#E75735');
            this.setTipLabel('emailTip', 'error');
        } else {
            this.setTipColor('emailTip', '#4EB7A8');
            this.setTipLabel('emailTip', 'thanks!');
        }
    }

    getCheck() {
        this.getNameCheck();
        this.getEmailCheck();
    }

    getEventButton() {
        if (this.name.value != '' && this.email.value != '') {
            alert('Success fields ☺');
        } else {
            alert('Empty fields ☹');
        }
    }

    beginEvent() {
        this.initDOMElements();

        this.name.onblur = () => {
            this.getCheck();
        };

        this.email.onblur = () => {
            this.getCheck();
        };

        this.button.onclick = () => {
            this.getEventButton();
        };

        this.setEmailValue('elelion@yandex.ru');
        this.getCheck();
    }
}

new FeedBack('0');

// /* default */
// document.getElementsByClassName('feed-back__input-name')[0].onblur = feedbackEditsCheck;
// document.getElementsByClassName('feed-back__input-email')[0].onblur = feedbackEditsCheck;

// email.value = 'elelion@yandex.ru';
// feedbackEditsCheck();

// ---

// const editName = document.getElementsByClassName('feed-back__input-name')[0];
// const editEmail = document.getElementsByClassName('feed-back__input-email')[0];
// const memo = document.getElementsByClassName('feed-back__message')[0];

// const nameTip = document.getElementsByClassName('feed-back__tip-name')[0];
// const nameTipTriangle = document.getElementsByClassName('feed-back__tip_triangle-name')[0];
// const nameTipLabel = document.getElementsByClassName('feed-back__label-name')[0];

// const emailTip = document.getElementsByClassName('feed-back__tip-email')[0];
// const emailTipTriangle = document.getElementsByClassName('feed-back__tip_triangle-email')[0];
// const emailTipLabel = document.getElementsByClassName('feed-back__label-email')[0];

/* event for edits */
// function feedbackEditsCheck() {
//     /* name check */
//     if (editName.value == '') {        
//         nameTip.style.background = '#E75735';
//         nameTipTriangle.style.borderRight = '12px solid #E75735';
//         nameTipLabel.innerHTML = 'error';
//     } else {
//         nameTip.style.background = '#4EB7A8';
//         nameTipTriangle.style.borderRight = '12px solid #4EB7A8';
//         nameTipLabel.innerHTML = 'thanks!';
//     }


//     /* email check */
//     if (editEmail.value == '') {        
//         emailTip.style.background = '#E75735';
//         emailTipTriangle.style.borderRight = '12px solid #E75735';
//         emailTipLabel.innerHTML = 'error';
//     } else {
//         emailTip.style.background = '#4EB7A8';
//         emailTipTriangle.style.borderRight = '12px solid #4EB7A8';
//         emailTipLabel.innerHTML = 'thanks!';
//     }

// }


/* event for button */
// function feedbackButton() {
//     if (editName.value != '' && editEmail.value != '') {
//         alert('Success fields');
//     } else {
//         alert('Empty fields :-[');
//     }
// }


/* default */
// document.getElementsByClassName('feed-back__input-name')[0].onblur = feedbackEditsCheck;
// document.getElementsByClassName('feed-back__input-email')[0].onblur = feedbackEditsCheck;
// document.getElementsByClassName('button-standard__extension-feedback')[0].onclick = feedbackButton;

// editEmail.value = 'elelion@yandex.ru';
// feedbackEditsCheck();