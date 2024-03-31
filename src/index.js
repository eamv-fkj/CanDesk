import generate from './generate'
import Fullscreen from './fullscreen'

const toggleFullscreenButton = document.getElementById('toggleFullscreenButtonID');

if (Fullscreen.isSupported()) {
  // fullscreen starts off
  toggleFullscreenButton.textContent = 'Enter Fullscreen' + ': ' + generate();

  toggleFullscreenButton.addEventListener('click', function() {
    Fullscreen.toggle();
  });

  Fullscreen.addEventListener(function(enabled) {
    toggleFullscreenButton.textContent = (enabled ? 'Exit' : 'Enter') + ' Fullscreen';
  });

} else
  // fullscreen not supported
  toggleFullscreenButton.remove();
