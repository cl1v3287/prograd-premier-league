//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
  var manager=[managerName,managerAge,currentTeam,trophiesWon];
  return manager;
  }
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  if(formation.length==0){
  return null;
  }
  var play={
  defender:formation[0],
  midfield:formation[1],
  forward:formation[2]
  }
  return play;
  }
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var data = players.filter(player=>player.debut==year);
  return data;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var data = players.filter(player=>player.position==position);
  return data;
}
// Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  let Array = [];
  for(let i = 0;i<players.length;i++){
    for(let j = 0;j<players[i].awards.length;j++){
      if(players[i].awards[j].name===awardName){
        Array.push(players[i]);
      }
    }
  }
  return Array;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  let arr = [];
  let count = 0, m = 0;
  let j;
  for (let i = 0;i<players.length;i++){
    for(j = 0;j<players[i].award.length;j++){
      if(players[i].awards[j].name=awardName){
        count++;
      }
    }
  }
}
//Progression 7 - Filter players that won ______ award and belong to ______ country

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
