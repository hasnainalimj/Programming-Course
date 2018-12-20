function sleepFor(sleepDuration) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}

var yourTeam = "Pakistan";
var opponentTeam = "India";
var noOfOvers = 2;
var tossWinner = null;
var tossLooser = null;
var yourTeamTotal = null;
var yourTeamRuns = null;
var yourTeamWickets = null;
var opponentTeamTotal = null;
var opponentTeamRuns = null;
var opponentTeamWickets = null;
var target = null;
var chaseYourTeam = null;
var chaseOpponentTeam = null;


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
console.log(tossWinner, " won the toss and choose to bat");
sleepFor(1000);
console.log("Opners ready to bat");
sleepFor(2000);
console.log(noOfOvers, "overs match");
sleepFor(1000);

//First Inning
if (tossWinner == yourTeam) {
  for (var over = 1; over <= noOfOvers; over++) {
    console.log("Over : " + over + " Started");
    sleepFor(2000);

    for (var balls = 1; balls <= 6; balls++) {

      console.log("Over : " + over + "." + balls)
      var scoring = Math.random() * 7;
      var generate_shots = Math.round(scoring);

      if (yourTeamWickets == 10) {
        break;
      }
      else {
        if (generate_shots == 7 || generate_shots == 5) {
          ++yourTeamWickets;
          console.log("It's out!");
          sleepFor(2000);
        }
        else if (generate_shots == 6) {
          yourTeamRuns += generate_shots;
          console.log("It's a Six");
          sleepFor(1000);
        }
        else if (generate_shots == 4) {
          yourTeamRuns += generate_shots;
          console.log("It's a four");
          sleepFor(1000);
        }
        else if (generate_shots == 3) {
          yourTeamRuns += generate_shots;
          console.log("It's a three runs");
          sleepFor(1000);
        }
        else if (generate_shots == 2) {
          yourTeamRuns += generate_shots;
          console.log("It's a double runs");
          sleepFor(1000);
        }
        else if (generate_shots == 1) {
          yourTeamRuns += generate_shots;
          console.log("its a single run!");
          sleepFor(1000);
        }
        else {
          yourTeamRuns += generate_shots;
          console.log("It's a dot ball!");
          sleepFor(1000);
        }
      }
    }
    console.log("At the end of over : " + over + tossWinner + " Scores : " + yourTeamRuns + "-" + yourTeamWickets);
  }
  target = yourTeamRuns + 1;
}
else if (tossWinner == opponentTeam) {
  for (var over = 1; over <= noOfOvers; over++) {
    console.log("Over : " + over + " Started");
    sleepFor(2000);

    for (var balls = 1; balls <= 6; balls++) {

      console.log("Over : " + over + "." + balls)
      var scoring = Math.random() * 7;
      var generate_shots = Math.round(scoring);

      if (opponentTeamWickets == 10) {
        break;
      }
      else {
        if (generate_shots == 7 || generate_shots == 5) {
          ++opponentTeamWickets;
          console.log("It's out!");
          sleepFor(2000);
        }
        else if (generate_shots == 6) {
          opponentTeamRuns += generate_shots;
          console.log("It's a Six");
          sleepFor(1000);
        }
        else if (generate_shots == 4) {
          opponentTeamRuns += generate_shots;
          console.log("It's a four");
          sleepFor(1000);
        }
        else if (generate_shots == 3) {
          opponentTeamRuns += generate_shots;
          console.log("It's a three runs");
          sleepFor(1000);
        }
        else if (generate_shots == 2) {
          opponentTeamRuns += generate_shots;
          console.log("It's a double runs");
          sleepFor(1000);
        }
        else if (generate_shots == 1) {
          opponentTeamRuns += generate_shots;
          console.log("its a single run!");
          sleepFor(1000);
        }
        else {
          opponentTeamRuns += generate_shots;
          console.log("It's a dot ball!");
          sleepFor(1000);
        }
      }
    }
    console.log("At the end of over : " + over + tossWinner + " Scores : " + opponentTeamRuns + "-" + opponentTeamWickets);
  }
  target = opponentTeamRuns + 1;
}

sleepFor(2000);
console.log(tossLooser + " need " + target + " in " + noOfOvers);
sleepFor(2000);

//Second Inning
if (tossLooser == yourTeam) {
  for (var over = 1; over <= noOfOvers; over++) {
    console.log("Over : " + over + " Started");
    sleepFor(2000);

    for (var balls = 1; balls <= 6; balls++) {

      console.log("Over : " + over + "." + balls)
      var scoring = Math.random() * 7;
      var generate_shots = Math.round(scoring);

      if (yourTeamWickets == 10) {
        break;
      }
      else {
        if (generate_shots == 7 || generate_shots == 5) {
          ++yourTeamWickets;
          console.log("It's out!");
          sleepFor(2000);
        }
        else if (generate_shots == 6) {
          yourTeamRuns += generate_shots;
          console.log("It's a Six");
          sleepFor(1000);
        }
        else if (generate_shots == 4) {
          yourTeamRuns += generate_shots;
          console.log("It's a four");
          sleepFor(1000);
        }
        else if (generate_shots == 3) {
          yourTeamRuns += generate_shots;
          console.log("It's a three runs");
          sleepFor(1000);
        }
        else if (generate_shots == 2) {
          yourTeamRuns += generate_shots;
          console.log("It's a double runs");
          sleepFor(1000);
        }
        else if (generate_shots == 1) {
          yourTeamRuns += generate_shots;
          console.log("its a single run!");
          sleepFor(1000);
        }
        else {
          yourTeamRuns += generate_shots;
          console.log("It's a dot ball!");
          sleepFor(1000);
        }
      }
    }
    console.log("At the end of over : " + over + tossWinner + " Scores : " + yourTeamRuns + "-" + yourTeamWickets);
  }
  chaseYourTeam = yourTeamRuns ;
}
else if (tossLooser == opponentTeam) {
  for (var over = 1; over <= noOfOvers; over++) {
    console.log("Over : " + over + " Started");
    sleepFor(2000);

    for (var balls = 1; balls <= 6; balls++) {

      console.log("Over : " + over + "." + balls)
      var scoring = Math.random() * 7;
      var generate_shots = Math.round(scoring);

      if (opponentTeamWickets == 10) {
        break;
      }
      else {
        if (generate_shots == 7 || generate_shots == 5) {
          ++opponentTeamWickets;
          console.log("It's out!");
          sleepFor(2000);
        }
        else if (generate_shots == 6) {
          opponentTeamRuns += generate_shots;
          console.log("It's a Six");
          sleepFor(1000);
        }
        else if (generate_shots == 4) {
          opponentTeamRuns += generate_shots;
          console.log("It's a four");
          sleepFor(1000);
        }
        else if (generate_shots == 3) {
          opponentTeamRuns += generate_shots;
          console.log("It's a three runs");
          sleepFor(1000);
        }
        else if (generate_shots == 2) {
          opponentTeamRuns += generate_shots;
          console.log("It's a double runs");
          sleepFor(1000);
        }
        else if (generate_shots == 1) {
          opponentTeamRuns += generate_shots;
          console.log("its a single run!");
          sleepFor(1000);
        }
        else {
          opponentTeamRuns += generate_shots;
          console.log("It's a dot ball!");
          sleepFor(1000);
        }
      }
    }
    console.log("At the end of over : " + over + tossWinner + " Scores : " + opponentTeamRuns + "-" + opponentTeamWickets);
  }
  chaseOpponentTeam = opponentTeamRuns;
}

sleepFor(1000);
// console.log("Waiting For Result");
console.log(yourTeamRuns , "-> yourteamruns");
console.log(opponentTeamRuns , "-> opponentteamruns");
console.log(target , "-> target");
console.log(chaseYourTeam , "-> chaseyourteam");
console.log(chaseOpponentTeam, "-> chaseOpponentTeam");

