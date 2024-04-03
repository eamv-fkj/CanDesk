import Fullscreen from './fullscreen'
import BaseCanvas from './components/base_canvas'

function testBaseCanvas() {
  let baseCanvas = new BaseCanvas();
}

function testFullscreen() {
  let toggleFullscreenButton = document.createElement('button');
  toggleFullscreenButton.id = 'toggleFullscreenButtonID';
  toggleFullscreenButton.style.position = 'absolute';
  toggleFullscreenButton.style.top = 0;
  toggleFullscreenButton.style.left = 0;
  toggleFullscreenButton.style.width = '200px';
  toggleFullscreenButton.style.height = '50px';
  toggleFullscreenButton.style.fontSize = '18px';
  document.body.appendChild(toggleFullscreenButton);

  if (Fullscreen.isSupported()) {
    // fullscreen starts off
    toggleFullscreenButton.textContent = 'Enter Fullscreen';
  
    toggleFullscreenButton.addEventListener('click', function() {
      Fullscreen.toggle();
    });
  
    Fullscreen.addEventListener(function(enabled) {
      toggleFullscreenButton.textContent = (enabled ? 'Exit' : 'Enter') + ' Fullscreen';
    });
  
  } else
    // fullscreen not supported
    toggleFullscreenButton.remove();
}

testBaseCanvas();
testFullscreen();