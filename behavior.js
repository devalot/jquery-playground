function ExampleBehavior () {
  this.initialize();
}

ExampleBehavior.prototype = {
  initialize: function () {
    var self = this;
    this.sayHello();

    $("#bands li").click(function () {
      self.removeArtist(this);
    });

    $("#add-band").submit (function () {
      self.addArtistFromForm();
      return false;
    });
  },
  sayHello: function () {
    console.log("Here I am, come find me.");
  },
  removeArtist: function (li) {
    var e = $(li);
    e.addClass("deleted");
    e.fadeOut();
  },
  addArtistFromForm: function () {
    var self = this;
    var artist = $("#add-band input[name='band']").val();
    console.log("new artist is: " + artist);
    var li = $(document.createElement('li'));
    li.text(artist);
    li.addClass("new");
    $("#bands").append(li);

    li.click(function () {
      self.removeArtist(this);
    });

    window.setTimeout(function () {
      li.removeClass("new");
    }, 2000);
  }
};

$(document).ready(function () {
  new ExampleBehavior();
});
