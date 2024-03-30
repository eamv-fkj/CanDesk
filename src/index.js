import generate from './generate'

const toggleFullscreenButton = document.getElementById('toggleFullscreenButtonID');

if (document.fullscreenEnabled) {
  // fullscreen starts off
  toggleFullscreenButton.textContent = 'Enter Fullscreen' + ': ' + generate();

  toggleFullscreenButton.addEventListener('click', function() {
    let fullscreenIsOn = !!document.fullscreenElement;

    if (fullscreenIsOn) {
      // disable fullscreen
      document.exitFullscreen()

      toggleFullscreenButton.textContent = 'Enter Fullscreen';

    } else {
      // enable fullscreen
      document.documentElement.requestFullscreen();

      toggleFullscreenButton.textContent = 'Exit Fullscreen';
    }
  });

} else {
  toggleFullscreenButton.remove();
}
