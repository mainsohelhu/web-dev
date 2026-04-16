const x = 'global';

function outer() {
  const x = 'outer';

  function inner() {
    const x = 'inner';
    console.log(x);      // 'inner'  — found in own context
  }

  function middle() {
    console.log(x);      // 'outer'  — not in middle, goes up to outer
  }

  inner();
  middle();
}

outer();
console.log(x);          // 'global' — only global scope here