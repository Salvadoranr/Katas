/*Description
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment,
so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- 
everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
You always walk only a single block in a direction and you know it takes you one minute to traverse one city block,
so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!)
and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
 It will never give you an empty array (that's not a walk, that's standing still!).
*/

function isValidWalk(walk){
  var indicesN=[];
  var indicesS=[];
  var indicesE=[];
  var indicesW=[];
  
  var idxN = walk.indexOf('n');
while (idxN != -1) {
  indicesN.push(idxN);
  idxN = walk.indexOf('n', idxN + 1);}
  
  console.log(indicesN);
  var idxS = walk.indexOf('s');
while (idxS != -1) {
  indicesS.push(idxS);
  idxS = walk.indexOf('s', idxS + 1)}
  console.log(indicesS);
  
  var idxE = walk.indexOf('e');
while (idxE != -1) {
  indicesE.push(idxE);
  idxE = walk.indexOf('e', idxE + 1)}
  console.log(indicesE);
  
  var idxW = walk.indexOf('w');
while (idxW != -1) {
  indicesW.push(idxW);
  idxW = walk.indexOf('w', idxW + 1)}
  console.log(indicesW);

  
  if((walk.length==10 )&&
  (indicesN.length===indicesS.length) &&
  (indicesE.length===indicesW.length)){
    return true;
  }else{
    return false;
  }

}