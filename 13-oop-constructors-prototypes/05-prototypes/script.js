// A prototype is a special object where additional methods and properties can be attached and shared across all instances of its constructor function or class.

function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect = new Rectangle('Rect', 10, 10);
console.log(rect);

//  Rectangle.prototype inherits from Object.prototype. That's why we can use toString(), etc
console.log(rect.toString());
console.log(Rectangle.prototype);

// To get the prototype of an object
console.log(Object.getPrototypeOf(rect));
