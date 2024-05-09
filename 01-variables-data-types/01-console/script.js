// Log number
console.log(100);
console.log(200);

// Log string
console.log('Hello World');
console.log('Hello Nikhil');

// Log multiple values
console.log(20, 'Hello', true);
console.log(30, 'Nikhil', false);

// Log a variable
const x = 100;
console.log(x);

const y = 200;
console.log(y);

// Console error & warning
console.error('Alert');
console.warn('Warning');

console.error('error');
console.warn('warn');

// Log object as table
console.table({ name: 'Brad', email: 'brad@gmail.com' });

console.table({ name: 'Nikhil', email: 'nikhil@gai.com' });

// Group console commands
console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);

const style1 = 'padding: 5px; color:red';
console.log('%cNikhil Khetan', style1);
