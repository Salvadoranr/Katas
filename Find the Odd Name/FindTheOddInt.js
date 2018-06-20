/*Description:
Given an array, find the int that appears an odd number of times.
There will always be only one integer that appears an odd number of times.*/


function findOdd(arr) {
    //happy coding!
    
    var indices = [];
   for(i=0; i<arr.length;i++){
    var element = arr[i];
    var idx = arr.indexOf(element);
  while (idx != -1) {
    indices.push(idx);
    idx = arr.indexOf(element, idx +1);
  }
    if(indices.length%2!==0){
      return element;
    }else{indices=[]}
  }}