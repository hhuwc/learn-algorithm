function deepCopy(original, target) {
  var c = target || {};
  for (var key in original) {
    if (typeof original[key] === "object") {
      c[key] = original[key] instanceof Array ? [] : {};
      arguments.callee(original[key], c[key]);
    } else {
      c[key] = original[key];
    }
  }
  return c;
}

/**
 * 改进版的对象复制方法,
 * @param {Object} original 
 */
function deepCopy1(original) {
  if (typeof original !== "object") {
    return undefined;
  }
  var c = original instanceof Array ? [] : {};
  for (var key in original) {
    if (typeof original[key] === "object") {
      c[key] = arguments.callee(original[key]);
    } else {
      c[key] = original[key];
    }
  }
  return c;
}

function shallowCopy(obj) {}
var obj = {
  name: "wangchen",
  age: 22,
  friends: ["hu", "tang", "wu"],
  dream: {
    love: "xxx",
    job: "阿里"
  }
};

/* console.log(typeof obj.name);
console.log(typeof obj.age);
console.log(typeof obj.friends);
console.log(typeof obj.dream);
console.log( obj.friends instanceof Array);
console.log(obj.dream instanceof Array); */

var newObj = deepCopy1(obj);
newObj.age = 25;
newObj.friends.push("pangmiao");
newObj.dream.salary = "10k";

/* var newObj1 = deepCopy(obj);
newObj1.age = 26;
newObj1.friends.push("zhuangbi");
newObj1.dream.salary = "12k";
console.log(newObj);
console.log("---------------------------------");
console.log(newObj1);
console.log("---------------------------------");
console.log(obj);

var a = 0;
var b = deepCopy1(a);

console.log(b); */

console.log(JSON.stringify(newObj));
