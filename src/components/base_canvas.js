
class BaseCanvas {
  #canvas;
  #ctx;

  constructor() {
    this.#canvas = document.createElement('canvas');
    this.#canvas.id = 'baseCanvas';
    this.#canvas.style.position = 'absolute';
    this.#canvas.style.display = 'block';
    this.#canvas.style.width = '100%';
    this.#canvas.style.height = '100%';
    this.setLocation(0, 0);

    this.#ctx = this.#canvas.getContext('2d');

    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.overflow = 'hidden';
    document.body.appendChild(this.#canvas);

    window.addEventListener('resize', this.#resize.bind(this));
    window.dispatchEvent(new Event('resize'));
  }

  setLocation(x, y) {
    this.#canvas.style.top = x;
    this.#canvas.style.left = y;
  }

  #resize() {
    this.#canvas.width = window.innerWidth;
    this.#canvas.height = window.innerHeight;

    this.repaint();
  }

  #drawLine(startX, startY, endX, endY) {
    this.#ctx.moveTo(startX, startY);
    this.#ctx.lineTo(endX, endY);
    this.#ctx.stroke();
  }

  repaint() {
    this.#paint(this.#ctx, this.#canvas.width, this.#canvas.height);
  }

  #paint(ctx, width, height) {
    // background
    ctx.fillStyle = '#FFD'; // light yellow
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    this.#drawLine(0, 0, width, height);
    this.#drawLine(width, 0, 0, height);

    // border
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, width, height);
  }
}

export default BaseCanvas;