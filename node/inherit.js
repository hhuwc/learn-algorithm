/**
 * 寄生组合式继承
 */

 //等同于 Object.create(),只传一个参数的情况
 function object(obj){
     function F(){}
     F.prototype = obj;
     return new F();
 }

 function inheritPrototype(SubType,SuperType){
     //以父类的原型对象 为蓝本 创建一个 新的对象
     var prototype = Object.create(SuperType.prototype);
     prototype.constructor = SubType;
     SubType.prototype = prototype;
 }

 function SuperType(name){
     this.name= name;
     this.colors=["red","blue","green"];
 } 

 SuperType.prototype.sayName = function(){
     console.log(this.name);
 }

 function SubType(name,age){
     //复制父类的实例属性
     SuperType.call(this,name);
     this.age = age;
 }

 inheritPrototype(SubType,SuperType);

 SubType.prototype.sayAge = function(){
     console.log(this.age);
 }

var sub = new SubType("wangchen",22);
sub.sayAge();
sub.sayName();


console.log(sub.colors);
console.log(sub instanceof SubType);
console.log(sub instanceof SuperType);
console.log(Object.entries(sub));



 