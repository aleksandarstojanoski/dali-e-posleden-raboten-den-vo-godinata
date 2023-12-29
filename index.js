function onMount(fn) {
  document.addEventListener("DOMContentLoaded", fn);
}

const abreVodenichare = "https://www.youtube.com/embed/_HshtJF1ABg?&autoplay=1";
const ranBelBosilok = "https://www.youtube.com/embed/hDWMwLJq_Y8?&autoplay=1";

function pickSong() {
  return Date.now() % 2 === 0 ? ranBelBosilok : abreVodenichare;
}

onMount(function () {
  const iframe = document.querySelector("iframe");

  if (!iframe) {
    return;
  }

  iframe.src = pickSong();
});
