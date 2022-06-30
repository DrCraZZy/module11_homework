function outputNumbers(min, max){
   let i = min;
   max++;

   const intervalId = setInterval(function(){
      if(i === max){
         clearInterval(intervalId);
      } else {
         console.log(i);
         i++;
      }      
   }, 1000);
}

outputNumbers(5, 15);