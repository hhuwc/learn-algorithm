var casper = require("casper").create();
var x = require("casper").selectXPath;
casper.start("file:///D:/mooc_algorithm/node/index.html");

var button =require("./button");

button.click(['1','5','7']);


casper.then(function() {
  this.capture("1.png");
});
casper.run();
