// behnamAI.js
while (playerOnField) {
  if (barg.alive()) {
    harass(barg);
    continue;
  }
  behnam.dashAttack();
}
if(stillAlive) {

 finishHim(powerAmount, character);
}
// insert the saltiest comment directed at Max below

var finishHim = function(powerAmount, character){
  if(character != "kingDedede" || character != "samus"){
    ripOutHisHeart(powerAmount);
  }
  else {
    //do not need to do anything
  }
}
