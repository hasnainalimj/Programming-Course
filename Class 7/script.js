function sleepFor(sleepDuration) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}

var yourTeam = "Pakistan";
var opponentTeam = "India";
var noOfOvers = 2;
var tossWinner = null;
var tossLooser = null;
var yourTeamTotal = 0;
var teamARuns = 0;
var teamAWickets = 0;
var teamBTotal = 0;
var teamBRuns = 0;
var teamBWickets = 0;
var target = 0;

console.log(yourTeam, " VS ", opponentTeam);
sleepFor(1000);
console.log("Toss");
sleepFor(1000);

var toss = Math.random() * 2;
var coin = Math.ceil(toss);

if (coin == 1) {
  tossWinner = yourTeam;
  tossLooser = opponentTeam;
}
else {
  tossWinner = opponentTeam;
  tossLooser = yourTeam;
}

sleepFor(3000);
console.log(tossWinner + " won the toss and choose to bat");
sleepFor(1000);
console.log("Opners ready to bat");
sleepFor(2000);
console.log(noOfOvers + "overs match");
sleepFor(1000);

//First Inning
for (var over = 1; over <= noOfOvers; over++) {
  console.log("Over : " + over + " Started");
  sleepFor(2000);

  for (var balls = 1; balls <= 6; balls++) {

    console.log("Over : " + over + "." + balls)
    var scoring = Math.random() * 7;
    var generate_shots = Math.round(scoring);

    if (teamAWickets == 10) {
      break;
    }
    else {
      if (generate_shots == 7 || generate_shots == 5) {
        ++teamAWickets;
        console.log("It's out!");
        sleepFor(2000);
      }
      else if (generate_shots == 6) {
        teamARuns += generate_shots;
        console.log("It's a Six");
        sleepFor(1000);
      }
      else if (generate_shots == 4) {
        teamARuns += generate_shots;
        console.log("It's a four");
        sleepFor(1000);
      }
      else if (generate_shots == 3) {
        teamARuns += generate_shots;
        console.log("It's a three runs");
        sleepFor(1000);
      }
      else if (generate_shots == 2) {
        teamARuns += generate_shots;
        console.log("It's a double runs");
        sleepFor(1000);
      }
      else if (generate_shots == 1) {
        teamARuns += generate_shots;
        console.log("its a single run!");
        sleepFor(1000);
      }
      else {
        teamARuns += generate_shots;
        console.log("It's a dot ball!");
        sleepFor(1000);
      }
    }
  }
  console.log("At the end of over : " + over + tossWinner + " Scores : " + teamARuns + "-" + teamAWickets);
}

target = teamARuns + 1;

sleepFor(2000);
console.log(tossLooser + " need " + target + " in " + noOfOvers + " overs.");
sleepFor(1000);

//Second Inning
for (var over = 1; over <= noOfOvers; over++) {
  console.log("Over : " + over + " Started");
  sleepFor(2000);
  console.log(tossLooser + " ready to bat.");
  sleepFor(1000);

  for (var balls = 1; balls <= 6; balls++) {

    console.log("Over : " + over + "." + balls)
    var scoring = Math.random() * 7;
    var generate_shots = Math.round(scoring);

    if (teamBWickets == 10) {
      break;
    }
    else {
      if (generate_shots == 7 || generate_shots == 5) {
        ++teamBWickets;
        console.log("It's out!");
        sleepFor(2000);
      }
      else if (generate_shots == 6) {
        teamBRuns += generate_shots;
        console.log("It's a Six");
        sleepFor(1000);
      }
      else if (generate_shots == 4) {
        teamBRuns += generate_shots;
        console.log("It's a four");
        sleepFor(1000);
      }
      else if (generate_shots == 3) {
        teamBRuns += generate_shots;
        console.log("It's a three runs");
        sleepFor(1000);
      }
      else if (generate_shots == 2) {
        teamBRuns += generate_shots;
        console.log("It's a double runs");
        sleepFor(1000);
      }
      else if (generate_shots == 1) {
        teamBRuns += generate_shots;
        console.log("its a single run!");
        sleepFor(1000);
      }
      else {
        teamBRuns += generate_shots;
        console.log("It's a dot ball!");
        sleepFor(1000);
      }
    }
  }
  console.log("At the end of over : " + over + " " + tossLooser + " Scores : " + teamBRuns + "-" + teamBWickets);
}


//Result
sleepFor(1000);
console.log("Waiting for result");
sleepFor(1000);
if(teamARuns>teamBRuns){
  console.log(tossWinner + " won the match.");
}
else if(teamBRuns>teamARuns){
  console.log(tossLooser + " won the match.");
}
else{
  console.log("Match Tied");
}


