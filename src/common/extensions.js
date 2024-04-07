import Point from './Point.js';

/*
 * class Image
 */
Image.prototype.getImageData = function() {
  if (!this.imageData) {
    // image data has not previously been requested
    let canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;

    let context = canvas.getContext('2d');
    context.drawImage(this, 0, 0);

    // cache for later requests
    this.imageData = context.getImageData(0, 0, this.width, this.height);
  }

  return this.imageData;
};

Image.prototype.componentIds = ['r', 'g', 'b', 'a'];

Image.prototype.getColorComponent = function() {
  let [x, y] = Point.fromArgs(arguments, 0);
  let componentId = arguments[0];

  // each color is four bytes: RGBA
  return this.getImageData().data[(y * this.width + x) * 4 + this.componentIds.indexOf(componentId)];
}

Image.prototype.isTransparent = function() {
  let [x, y] = Point.fromArgs(arguments, 0);

  // check the alpha component
  return this.getColorComponent(this, x, y, 'a') == 0;
}


/*
 * class Array
 */

// this function checks if the elements of the array have a given type.
// possible types are 'number', 'string', 'boolean' 'function' and 'array'
// a class is given as the class name: e.g., Point (not 'Point')
// this function is mostly used for function overloading.

Array.prototype.hasTypes = function(...types) {
  if (this.length !== types.length)
    return false;

  for (let i = 0; i < types.length; i++) {
    let expectedType = types[i];      
    let observedType = typeof this[i];

    if (expectedType === 'array' && Array.isArray(this[i]))
      continue;
    else if (observedType === 'object' && this[i] instanceof expectedType)
      continue;
    else if (observedType === expectedType)
      continue;

    return false;
  }

  return true;
};

module.exports = { };