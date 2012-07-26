function ExampleBehavior () {
  this.initialize();
}

ExampleBehavior.prototype = {
  initialize: function () {
    this.sayHello();
  },
  sayHello: function () {
    console.log("Here I am, come find me.");
  }
};

$(document).ready(function () {
  new ExampleBehavior();
});
