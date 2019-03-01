/* jshint esversion: 6 */

class VideoPlayer {

    constructor(id) {
        this.startDuration;
        this.VideoPlayerId = id;

        this.beginEvent();
        this.getVideoDuration = this.getVideoDuration.bind(this);
    }

    initDOMElements() {
        this.video =
            document.getElementsByClassName('video-player__source')[this.VideoPlayerId];

        this.duration =
            document.getElementsByClassName('video-player__slider')[this.VideoPlayerId];

        this.playPause =
            document.getElementsByClassName('video-player__play')[this.VideoPlayerId];

        this.posterText =
            document.getElementsByClassName('video-player__poster')[this.VideoPlayerId];

        this.buttonFullScreen =
            document.getElementsByClassName('video-player__fullscreen-video')[this.VideoPlayerId];
    }

    setDurationStartValue(durationValue) {
        this.startDuration = durationValue;
    }

    setDurationValue(durationValue) {
        this.duration.value = durationValue;
    }

    setVideoCurrentTime(currentTime) {
        this.video.currentTime = currentTime;
    }

    setDurationMin(durationMin) {
        this.duration.min = durationMin;
    }

    // NOTE: set the max value that will be played (...359)
    setDurationMax(durationMax) {
        this.duration.max = durationMax;
    }

    setPlayPauseImagePos(position) {
        this.playPause.style.backgroundPosition = position;
    }

    setPosterTextStyle(display) {
        this.posterText.style.display = display;
    }

    PlayPauseVideo() {
        if (this.video.paused) {
            this.video.play();
            this.setDurationStartValue(setInterval(this.getVideoDuration, 1000));
            this.setPlayPauseImagePos('-90px -14px');
            this.setPosterTextStyle('none');
            this.setDurationMax(Math.round(this.video.duration));
        } else {
            this.video.pause();
            clearInterval(this.startDuration);
            this.setPlayPauseImagePos('-46px -14px');

            if (browserWidth >= 450) {
                this.setPosterTextStyle('block');
            }
        }
    }

    // NOTE: to track the time elapsed video
    getVideoDuration() {
        this.setDurationValue(this.video.currentTime);

        console.log('video.currentTime: ' + this.video.currentTime);
        console.log('duration.value: ' + this.duration.value);
        console.log('video.duration: ' + this.video.duration);
    }

    // NOTE: to change the status of the slider
    clearAnimateRangeVideo() {
        clearInterval(this.startDuration);

        // NOTE: to start the video when rewinding
        if (!this.video.paused) {
            this.PlayPauseVideo();
        }
    }

    // NOTE: rewind video by slider
    movedRangeVideo() {
        this.setVideoCurrentTime(this.duration.value);
        this.PlayPauseVideo();
    }

    getFullScreenVideoMode() {
        if (this.video.requestFullscreen) {
            this.video.requestFullscreen();
        } else if (this.video.msRequestFullscreen) {
            this.video.msRequestFullscreen();
        } else if (this.video.mozRequestFullScreen) {
            this.video.mozRequestFullScreen();
        } else if (this.video.webkitRequestFullscreen) {
            this.video.webkitRequestFullscreen();
        }
    }

    beginEvent() {
        this.initDOMElements();
        this.setDurationValue(0);
        this.setDurationMin(0);

        this.video.onclick = () => { this.PlayPauseVideo() };
        this.playPause.onclick = () => { this.PlayPauseVideo() };

        this.duration.onmousedown = () => { this.clearAnimateRangeVideo() };
        this.duration.onmouseup = () => { this.movedRangeVideo() };
        this.buttonFullScreen.onclick = () => { this.getFullScreenVideoMode() };
    }
}

new VideoPlayer(0);

// ---

// var video = document.getElementsByClassName('video-player__source')[0];
// var duration = document.getElementsByClassName('video-player__slider')[0];
// var playPause = document.getElementsByClassName('video-player__play')[0];
// var posterText = document.getElementsByClassName('video-player__poster')[0];

// var startDuration;

// duration.value = 0;
// duration.min = 0;

// запустить видео / пауза видео
// function PlayPauseVideo() {
// 	if (video.paused) {
// 		video.play();
// 		startDuration = setInterval(initDuration, 1000);
// 		playPause.style.backgroundPosition = '-40px -246px';
// 		posterText.style.display = 'none';

// 		// задаем максимальное значение, которое будет для проигрывания (см. ниже)
// 		duration.max = Math.round(video.duration); // 359
// 	} else {
// 		video.pause();
// 		clearInterval(startDuration);
// 		playPause.style.backgroundPosition = '2px -246px';

// 		if (browserWidth >= 450) {
// 			posterText.style.display = 'block';
// 		}
// 	}	
// }

// полноэкранный режим
// function FullScreenVideo() {
// 	if (video.requestFullscreen) {
// 		video.requestFullscreen();
// 	} else if (video.msRequestFullscreen) {
// 		video.msRequestFullscreen();
// 	} else if (video.mozRequestFullScreen) {
// 		video.mozRequestFullScreen();
// 	} else if (video.webkitRequestFullscreen) {
// 		video.webkitRequestFullscreen();
// 	}
// }

// // для отслеживания пройденного времени видео
// function initDuration() {
// 	duration.value = video.currentTime;		
// 	// videoRange.style.width = duration.value * 3 + 'px';

// 	console.log("duration.value: " + duration.value);
// 	console.log("video.duration: " + Math.round(video.duration));
// }

// для изменения статуса бегунка
// function clearAnimateRangeVideo() {
// 	clearInterval(startDuration);

// что бы видео стартовало при перемотке
// 	if (!video.paused) {
// 		PlayPauseVideo();
// 	}
// }

// перемотка видео по бегунку
// function movedRangeVideo() {
// 	video.currentTime = duration.value;
// 	PlayPauseVideo();
// }


// document.getElementsByClassName('video-player__source')[0].onclick = PlayPauseVideo;
// document.getElementsByClassName('video-player__play')[0].onclick = PlayPauseVideo;

// document.getElementsByClassName('video-player__slider')[0].onmousedown = clearAnimateRangeVideo;
// document.getElementsByClassName('video-player__slider')[0].onmouseup = movedRangeVideo;

// document.getElementsByClassName('video-player__fullscreen-video')[0].onclick = FullScreenVideo;