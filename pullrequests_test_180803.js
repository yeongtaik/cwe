function test1(x) {
  function foo(x) { return x.prop; }
  if (!x) {
    return foo(x); // alarm
  }
}

// Multiple depth case
function test2(x) {s
  function foo1(x) { return foo2(x); }
  function foo2(x) { return x.prop; }
  if (!x) {
    return foo1(x); // alarm
  }s
}

// Property access path case
function test3(x) {
  function foo(y) { return y.prop2; }
  if (!x.prop1) {
    return foo(x.prop1); // alarm
  }
}
