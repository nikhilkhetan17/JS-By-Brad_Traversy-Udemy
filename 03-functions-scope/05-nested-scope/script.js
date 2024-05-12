function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y); // child can access parent variable
  }

  // console.log(y); // parent can't access child variable

  second();
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }

  console.log(y); // parent can't access child variable
}
