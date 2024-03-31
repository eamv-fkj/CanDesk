import generate from './generate'
import Fullscreen from './fullscreen'



function testFullscreen() {
  let toggleFullscreenButton = document.createElement('button');
  toggleFullscreenButton.id = 'toggleFullscreenButtonID';
  toggleFullscreenButton.style.width = '200px';
  toggleFullscreenButton.style.height = '50px';
  toggleFullscreenButton.style.fontSize = '18px';
  document.body.appendChild(toggleFullscreenButton);

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
}

testFullscreen();