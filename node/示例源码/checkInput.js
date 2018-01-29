var casper = require("casper").create();
var x = require("casper").selectXPath;
casper.start("file:///D:/mooc_algorithm/node/index.html");

//input框赋值
casper.then(function() {
  this.evaluate(function() {
    $("input")
      .val("hello world")
      .keyup();
  });
});
//校验 输入框后面的span中的文本 是否输入的值
casper.then(function() {
  var result = this.evaluate(function() {
    return $(".tip .tips").html() === "hello world";
  });
  this.echo(result);
});

casper.then(function() {
  this.capture("2.png");
});
casper.run();


