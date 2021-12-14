function receivesAFunction(postRunActivity) {
    postRunActivity();
  }

function returnsANamedFunction () {
    function namedFunction() {
        console.log("Named Function")
    }
    return namedFunction

}

function returnsAnAnonymousFunction () {
    return function() {
        console.log("Yet more razzling");
      }
}
