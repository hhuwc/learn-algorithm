rand = (function(){
    var today = new Date(); 
    var seed = today.getTime();
    function rnd(){
      seed = ( seed * 9301 + 49297 ) % 233280;
      return seed / ( 233280.0 );
    };
    return function rand(number){
      // return Math.ceil(rnd(seed) * number);
      return Math.ceil(rnd() * number);
    };
  })();
  for(let i = 0;i<1000;i++){
    myNum = (rand(100));
    console.log(myNum);
  }
 
 