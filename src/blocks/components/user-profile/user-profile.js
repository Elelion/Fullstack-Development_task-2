/* jshint esversion: 6 */

class UserProfile {
    constructor(selector, colorOver, colorLeave) {
        this.selector = selector;
        this.beginEvent(colorOver, colorLeave);
    }

    setSelectors() {
        this.userInfo = this.selector.querySelector('.user-profile__info');
        this.userPhoto = this.selector.querySelector('.user-profile__photo');
    }

    setColorOver(color) {
        this.colorOver = /#\w\w\w\w\w\w/.test(color) ? color : '#4EB7A8';
    }

    setColorLeave(color) {
        this.colorLeave = /#\w\w\w\w\w\w/.test(color) ? color : '#E5E5E5';
    }

    setEvent(eventName, eventMethod) {
        this.userInfo.addEventListener(eventName, (event) => {
            event.preventDefault();
            this.userPhoto.style.borderColor = eventMethod;
            this.userInfo.style.borderColor = eventMethod;
        });
    }

    beginEvent(colorOver, colorLeave) {
        this.setSelectors();
        this.setColorOver(colorOver);
        this.setColorLeave(colorLeave);
        this.setEvent('mouseover', this.colorOver);
        this.setEvent('mouseout', this.colorLeave);
    }
}

const allUserProfiles = document.getElementsByClassName('user-profile');
const settings = [
    { colorOver: '', colorLeave: '#ИвановИван' },
    { colorOver: '#E75735', colorLeave: '123' }
];

for (let i = 0; i < allUserProfiles.length; i += 1) {
    new UserProfile(
        allUserProfiles[i],
        settings[i].colorOver,
        settings[i].colorLeave);
};

// ----------------------------------------------------------------------------

// class UserProfile {

//     constructor(colorOver, colorLeave) {

//         this.beginEvent(colorOver, colorLeave)
//     }

//     setSelector() {
//         this.userInfo = document.querySelectorAll('.user-profile__info');
//         this.userPhoto = document.querySelectorAll('.user-profile__photo');
//     }

//     setColorOver(color) {
//         if (/#\w\w\w\w\w\w/.test(color)) {
//             this.colorOver = color;
//         } else {
//             this.colorOver = '#4EB7A8';
//         }
//     }

//     setColorLeave(color) {
//         if (/#\w\w\w\w\w\w/.test(color)) {
//             this.colorLeave = color;
//         } else {
//             this.colorLeave = '#E5E5E5';
//         }
//     }

//     getLaunchOver() {
//         for (let i = 0; i < this.userInfo.length; i += 1) {
//             this.userInfo[i].addEventListener('mouseover', (event) => {
//                 event.preventDefault();
//                 this.userPhoto[i].style.borderColor = this.colorOver;
//             });
//         }
//     }

//     getLaunchLeave() {
//         for (let i = 0; i < this.userInfo.length; i += 1) {
//             this.userInfo[i].addEventListener('mouseout', (event) => {
//                 event.preventDefault();
//                 this.userPhoto[i].style.borderColor = this.colorLeave;
//             });
//         }
//     }

//     beginEvent(colorOver, colorLeave) {
//         this.setSelector();
//         this.setColorOver(colorOver);
//         this.setColorLeave(colorLeave);
//         this.getLaunchOver();
//         this.getLaunchLeave();
//     }
// }

// const allUserInfo = document.querySelectorAll('.user-profile__info');
// for (let i = 0; i < allUserInfo.length; i += 1) {
//     // NOTE: colorOver, colorLeave
//     new UserProfile('ИвановИван', '');
// };

// ----------------------------------------------------------------------------

// class UserProfile {
//     constructor() {
//         this.userPhoto = document.querySelectorAll('.user-profile__photo');
//         this.userInfo = document.querySelectorAll('.user-profile__info');

//         this.colorOver;
//         this.colorLeave;
//     }

//     setColorOver(color) {
//         this.colorOver = color;
//     }

//     setColorLeave(color) {
//         this.colorLeave = color;
//     }

//     setColorEvent(colorOver, colorLeave) {
//         this.setColorOver(colorOver);
//         this.setColorLeave(colorLeave);
//     }

//     getLaunchOver() {
//         for (let i = 0; i < this.userInfo.length; i += 1) {
//             this.userInfo[i].addEventListener('mouseover', (event) => {
//                 event.preventDefault();
//                 this.userPhoto[i].style.borderColor = this.colorOver;
//             });
//         }
//     }

//     getLaunchLeave() {
//         for (let i = 0; i < this.userInfo.length; i += 1) {
//             this.userInfo[i].addEventListener('mouseout', (event) => {
//                 event.preventDefault();
//                 this.userPhoto[i].style.borderColor = this.colorLeave;
//             });
//         }
//     }

//     getBeginEvent(colorOver, colorLeave) {
//         this.setColorEvent(colorOver, colorLeave)
//         this.getLaunchOver();
//         this.getLaunchLeave();
//     }
// }

// let user = new UserProfile();

// // NOTE: colorOver, colorLeave
// user.getBeginEvent('#4EB7A8', '#E5E5E5');

// ----------------------------------------------------------------------------

// const USER_PHOTO = document.querySelectorAll('.user__profile--photo');
// const USER_INFO = document.querySelectorAll('.user__profile--info');
// let colorOver;
// let colorLeave;

// let setColorOver = (colorName) => {
//     colorOver = colorName;
// }

// let setColorLeave = (colorName) => {
//     colorLeave = colorName;
// }

// setColorOver('#4EB7A8');
// setColorLeave('#E5E5E5');

// (function () {
//     for (let i = 0; i < USER_INFO.length; i += 1) {
//         USER_INFO[i].addEventListener('mouseover', function (event) {
//             event.preventDefault();
//             USER_PHOTO[i].style.borderColor = colorOver;
//         });
//     }
// }());

// (function () {
//     for (let i = 0; i < USER_INFO.length; i += 1) {
//         USER_INFO[i].addEventListener('transitionend', function (event) {
//             event.preventDefault();
//             USER_PHOTO[i].style.borderColor = colorLeave;
//         });
//     }
// }());

// ----------------------------------------------------------------------------

// const userPhoto1 = document.getElementsByClassName('user__profile--photo')[0];
// const userPhoto2 = document.getElementsByClassName('user__profile--photo')[1];

// function overProfile1() {    
//     userPhoto1.style.borderColor = '#4EB7A8';
// }

// function leaveProfile1() {    
//     userPhoto1.style.borderColor = '#E5E5E5';
// }

// function overProfile2() {    
//     userPhoto2.style.borderColor = '#4EB7A8';
// }

// function leaveProfile2() {    
//     userPhoto2.style.borderColor = '#E5E5E5';
// }


// document.getElementsByClassName('user__profile--info')[0].onmouseover = overProfile1;
// document.getElementsByClassName('user__profile--info')[0].onmouseleave = leaveProfile1;

// document.getElementsByClassName('user__profile--info')[1].onmouseover = overProfile2;
// document.getElementsByClassName('user__profile--info')[1].onmouseleave = leaveProfile2;