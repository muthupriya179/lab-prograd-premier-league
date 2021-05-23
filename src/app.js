//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  var Manager=[managerName,managerAge,currentTeam,trophiesWon];
  return Manager;
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
  if (formation.length==0){
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
    var data =players.filter(player=>player.debut==year);
    return data;
  }

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var data =players.filter(player=>player.position==position);
  return data;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  let arr=[];
  for(let i=0; i<players.length;i++){
    for(let j=0; j<players[i].awards.length;j++){
      if(players[i].awards[j].name==awardName){
        arr.push(players[i]);
      }
    }
  }
  return arr;
}
//Progression 6 - Filter players that won ______ award ____ times
let filterByAwardxTimes=(Award,noOftimes)=>{
  var count=0;
  var notimes=0;
  var playerslist = [];
  for(let i=0;i<players.length;i++){
    for(let j=0;j<(players[i].awards).length;j++){
      if(players[i].awards[j].name==Award){
        notimes++;
      if(notimes==noOftimes){
        count++;
      playerslist.push(players[i]);  
      }
    }
  }
  notimes=0;
  }
  if(count==0)
    return [];
  else
    return playerslist;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
let filterByAwardxCountry=(Award,country)=>{
  var count=0;
  var playerslist = [];
  for(let i=0;i<players.length;i++){
    for(let j=0;j<(players[i].awards).length;j++){
      if(players[i].awards[j].name==Award&&players[i].country==country){
        count++;
        playerslist.push(players[i]);    
      }
    }
  }
  if(count==0)
    return [];
  else 
    return playerslist;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
let filterByNoOfAwardsxTeamxAge=(NoOfAwards,Team,Age)=>{
  var count=0;
  var playerslist = [];
  for(let i=0;i<players.length;i++){    
    if((players[i].awards).length>=NoOfAwards&&players[i].team==Team&&players[i].age<Age){
      count++;
      playerslist.push(players[i]);   
    }    
  }
  if(count==0)
    return [];
  else 
    return playerslist;
}
//Progression 9 - Sort players in descending order of their age
//Progression 10 - Sort players beloging to _____ team in descending order of awards won


//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
 
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
