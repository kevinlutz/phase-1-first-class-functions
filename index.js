function receivesAFunction(exercise) {
  exercise();
}

function returnsANamedFunction() {
  return function named() {
    a + b;
  };
}

function returnsAnAnonymousFunction() {
  return function () {};
}
