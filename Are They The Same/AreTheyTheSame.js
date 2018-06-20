/*Description
Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements,
with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared,
regardless of the order.
*/




function comp(array1, array2){
  
    if(!Boolean(array1) || !Boolean(array2)){
      return false;
    }
    
    array1.sort(ordenar);
    array2.sort(ordenar);
    var array3= array2.map(Math.sqrt);
      
    if (array1.toString()===array3.toString()){
      return true;
    }else {
      return false;
    }
  }
  function ordenar(a,b){
    return a-b;
  }