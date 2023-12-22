function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  return function hello() {
    return `Hello`;
  };
}

returnsANamedFunction();

function returnsAnAnonymousFunction() {
  return function () {
    return `anonymous`;
  };
}

returnsANamedFunction();
