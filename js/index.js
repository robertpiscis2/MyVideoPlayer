const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", () => {
  $play.hidden = true;
  $pause.hidden = false;
  $video.play();
});

$pause.addEventListener("click", () => {
  $pause.hidden = true;
  $play.hidden = false;
  $video.pause();
});

$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);

function handleBackward() {
  $video.currentTime = $video.currentTime - 10;
}

function handleForward() {
  $video.currentTime = $video.currentTime + 10;
}

const $progress = document.querySelector("#progress");
$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoaded() {
  $progress.max = $video.duration;
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
}

$progress.addEventListener("input", handleInput);

function handleInput() {
  $video.currentTime = $progress.value;
}
