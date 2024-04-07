import './extensions';

class Point {
  x
  y

  constructor() {
    if (arguments.hasTypes()) {
      // default constructor
      this.x = 0;
      this.y = 0;
    } else {
      // set/copy constructor
      let [x, y] = fromArgs(arguments, 0);

      this.x = x;
      this.y = y;
    }
  }
  
  add(other) {
    return new Point(this.x + other.x, this.y + other.y);
  }

  sub(other) {
    return new Point(this.x - other.x, this.y - other.y);
  }

  // helper function for functions that are overloaded on Point and (x, y)
  // it will look for Point (x, y) af index 'pos', and if found they will be removed from 'args'
  static fromArgs(args, pos) {
    if (pos < args.length && typeof args[pos] === 'object' && args[pos] instanceof Point) {
      let p = args[pos];
      args.splice(pos, 1); // remove Point from args
      return [p.x, p.y];
    } else if (pos+1 < args.length && typeof args[pos] === 'number' && typeof args[pos+1] === 'number') {
      let x = args[pos];
      let y = args[pos+1];
      args.splice(pos, 2);
      return [x, y]
    } else
      throw new Error('Neither Point nor (x, y)');
  }

  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
}

export default Point;