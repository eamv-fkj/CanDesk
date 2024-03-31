
const Fullscreen = {
  isSupported: function() {
    return document.fullscreenEnabled;
  },

  isEnabled: function() {
    return !!document.fullscreenElement;
  },

  isDisabled: function() {
    return !this.isEnabled();
  },

  enable: function() {
    document.documentElement.requestFullscreen();

    this.fire(true);
  },

  disable: function() {
    document.exitFullscreen();

    this.fire(false);
  },

  toggle: function() {
    if (this.isEnabled())
      this.disable();
    else
      this.enable();
  },

  listeners: [],

  addEventListener: function(listener) {
    if (!this.listeners.includes(listener))
      this.listeners.push(listener);
  },

  removeEventListener: function(listener) {
    if (this.listeners.includes(listener))
      this.listeners.splice(this.listeners.indexOf(listener), 1);
  },

  fire: function(eventArg) {
    this.listeners.forEach(function(listener) {
      listener.call(this, eventArg);
    }, this);
  }
}

export default Fullscreen;