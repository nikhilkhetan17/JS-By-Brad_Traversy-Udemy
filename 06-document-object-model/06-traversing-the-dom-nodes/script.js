let output;

// General Node - not used much just for reference

// Get child nodes

const parent = document.querySelector('.parent');

output = parent.childNodes;
console.log(output);
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
console.log(output);
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;
console.log(output);

parent.lastChild.textContent = 'Hello';

// Get parent node

const child = document.querySelector('.child');
console.log(child);

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Get sibling nodes
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
