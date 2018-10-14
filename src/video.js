/* jshint esversion: 6 */

var video = document.getElementById('video');
var duration = document.getElementById('ratioVideo');
var playPause = document.getElementById('playPauseVideo');
var posterText = document.getElementById('videoPoster');
var startDuration;

duration.value = 0;
duration.min = 0;

// запустить видео / пауза видео
function PlayPauseVideo() {
	if (video.paused) {
		video.play();
		startDuration = setInterval(initDuration, 1000);
		playPause.style.backgroundPosition = '-40px -246px';
		posterText.style.display = 'none';

		// задаем максимальное значение, которое будет для проигрывания (см. ниже)
		duration.max = Math.round(video.duration); // 359
	} else {
		video.pause();
		clearInterval(startDuration);
		playPause.style.backgroundPosition = '2px -246px';
		posterText.style.display = 'block';
	}	
}

// полноэкранный режим
function FullScreenVideo() {
	if (video.requestFullscreen) {
		VIDEO.requestFullscreen();
	} else if (video.msRequestFullscreen) {
		video.msRequestFullscreen();
	} else if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen();
	} else if (video.webkitRequestFullscreen) {
		video.webkitRequestFullscreen();
	}
}

// для отслеживания пройденного времени видео
function initDuration() {
	duration.value = video.currentTime;		
	// videoRange.style.width = duration.value * 3 + 'px';

	console.log("duration.value: " + duration.value);
	console.log("video.duration: " + Math.round(video.duration));
}

// для изменения статуса бегунка
function clearAnimateRangeVideo() {
	clearInterval(startDuration);

	// что бы видео стартовало при перемотке
	if (!video.paused) {
		PlayPauseVideo();
	}
}

// перемотка видео по бегунку
function movedRangeVideo() {
	video.currentTime = duration.value;
	PlayPauseVideo();
}