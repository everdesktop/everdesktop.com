(function() {

  $(function() {
    return (function() {
      return console.log(this);
    })();
  });

}).call(this);