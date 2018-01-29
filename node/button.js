function button() {}
button.click = function(arr) {
  casper.then(function() {
    var tt;
    for (var i in arr) {
      tt = x('//div[text()="' + arr[i] + '"]');
      (function(tt, key) {
        casper.waitForSelector(tt, function() {
          this.click(tt);
          this.echo("click\t" + key + "\tbutton");
        });
      })(tt, arr[i]);
    }
  });
};

button.hello = function name(params) {
    //TODO
}
module.exports= button;
