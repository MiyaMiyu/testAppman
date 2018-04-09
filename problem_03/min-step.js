const minStep = input => {
  // put your code here !!
  let count = 0;
  while(input!== 1){
    if(input % 2 === 0){
      input = isEven(input);
    }
    else{
      input = isOdd(input);
    } 
    count++;
  }
  function isEven(n) {
    return n/2;
  }
 
 function isOdd(n) {
   if(((n-1)/2)%2 === 0 || (n-1)/2 === 1)
    return n-1;
   else return n+1;
  }
    return count;
};
module.exports = { minStep };
