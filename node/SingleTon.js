/**
 * 利用闭包 实现的 无法修改的静态 变量
 */
var Conf = (function() {
  var conf = {
    MAX_NUM: 100,
    MIN_NUM: 1,
    COUNT: 1000
  };
  return {
    get: function(name) {
      return conf[name] ? conf[name] : null;
    }
  };
})();

var count = Conf.get("COUNT");
console.log(count);

/**
 * 利用闭包实现的  惰性载入单例  只在 需要时 进行创建
 */
var LazySingle = (function() {
  var instance = null;

  function Single() {
    return {
      publicMethod: function() {},
      publicProperty: "1.0"
    };
  }
  return function() {
    if (!instance) {
      instance = Single();
    }
    return instance;
  };
})();
console.log(LazySingle().publicProperty);
console.log(LazySingle().publicProperty);