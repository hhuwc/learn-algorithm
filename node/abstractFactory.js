var VehicleFactory = function(subType, superType) {
  if (typeof VehicleFactory[superType] === "function") {
    /* function F() {}
    F.prototype = new VehicleFactory[superType]();
    subType.prototype = new F(); */
    subType.prototype = new VehicleFactory[superType]();
    subType.constructor = subType;
  } else {
    throw new Error("未创建该抽象类");
  }
};

VehicleFactory.Car= function () {
    this.type = 'car';
}
VehicleFactory.Car.prototype= {
    getPrice:function () {
        throw new Error("抽象方法不能调用");
    },
    getSpeed:function () {
        throw new Error("抽象方法不能调用");
    }
};
var BMW = function (price,speed) {
    this.price = price;
    this.speed = speed;
}
VehicleFactory(BMW,'Car');

BMW.prototype.getPrice = function() {
  return this.price;
};

BMW.prototype.getSpeed = function() {
  return this.speed;
};

var bmw = new BMW(10000,100);
console.log(bmw.getPrice());
console.log(bmw.getSpeed());
console.log(bmw.type);
console.log(bmw instanceof VehicleFactory.Car);
console.log(bmw instanceof BMW);
