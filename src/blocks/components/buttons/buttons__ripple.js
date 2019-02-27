/*jshint esversion: 6 */

const buttons = document.querySelectorAll('.button-standard, .button-arrow');
const SPAN = document.createElement('span');
let xPos;
let yPos;

for (let i = 0; i < buttons.length; i += 1) {
	buttons[i].addEventListener('click', function (event) {
		event.preventDefault();

		// NOTE: create element for a zone for the effect
		let rippleWidth = this.offsetWidth;
		let rippleHeight = this.offsetHeight;
		let rippleEffect = SPAN.style;

		// NOTE: make it round. Effect stayed on the borders button
		function rippleFrame() {
			if (rippleWidth >= rippleHeight) {
				rippleHeight = rippleWidth;
			} else {
				rippleWidth = rippleHeight;
			}
		}

		// NOTE: get the center of the element, for current coordinates
		const rippleDefineHorizonralCoordinates = () => {
			if (event.offsetX === undefined) {
				xPos = event.layerX;
			} else {
				xPos = event.offsetX - rippleWidth / 2;
			}
		}

		const rippleDefineVerticalCoordinates = () => {
			if (event.offsetY === undefined) {
				yPos = event.layerY;
			} else {
				yPos = event.offsetY - rippleHeight / 2;
			}
		}

		// NOTE: 
		// the starting point from which the effect begins 
		// and set its distribution
		const rippleBeginEffect = () => {
			rippleEffect.width = rippleWidth + 'px';
			rippleEffect.height = rippleHeight + 'px';
			rippleEffect.top = yPos + 'px';
			rippleEffect.left = xPos + 'px';
		}
		
		const rippleApplyCssEffect = () => {
			SPAN.className = 'ripple';
		}

		rippleFrame();
		rippleDefineHorizonralCoordinates();
		rippleDefineVerticalCoordinates();
		rippleBeginEffect();
		rippleApplyCssEffect();

		this.appendChild(SPAN);
	});
}