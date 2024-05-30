// skip this (tricky)

// Constructor Function
function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  Object.defineProperty(this, 'firstName', {
    get: function () {
      return this.capitalizeFirst(this._firstName);
    },
    set: function (value) {
      this._firstName = value;
    },
  });

  Object.defineProperty(this, 'lastName', {
    get: function () {
      return this.capitalizeFirst(this._lastName);
    },
    set: function (value) {
      this._lastName = value;
    },
  });

  Object.defineProperty(this, 'fullName', {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
  });
}

Person.prototype.capitalizeFirst = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const person1 = new Person('john', 'doe');
console.log(person1.firstName); //getter
console.log(person1.lastName);
console.log(person1.fullName);

person1.firstName = 'nikhil'; //setter
person1.lastName = 'khetan';
console.log(person1.fullName);

// Object Literal
const personObj = {
  _firstName: 'jane',
  _lastName: 'doe',

  get firstName() {
    return Person.prototype.capitalizeFirst(this._firstName);
  },

  set firstName(value) {
    this._firstName = value;
  },

  get lastName() {
    return Person.prototype.capitalizeFirst(this._lastName);
  },

  set lastName(value) {
    this._lastName = value;
  },

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

const person2 = Object.create(personObj);
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.fullName);
