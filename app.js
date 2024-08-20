console.log('app loaded')


let teamOne = 0
let teamTwo = 0

function teamOneBtn() {
  teamOne++
  console.log('TEAM ONE +1 PTS!:', teamOne);

  let scoreTeamOne = document.getElementById('team-one-score')
  console.log(scoreTeamOne);
  scoreTeamOne.innerText = teamOne.toString()

}

function teamTwoBtn() {
  teamTwo++
  console.log('TEAM TWO - SCORE', teamTwo);

  let scoreTeamTwo = document.getElementById('team-two-score')
  console.log(scoreTeamTwo);
  scoreTeamTwo.innerText = teamTwo.toString()

}

function teamOneBtnTwo() {
  teamOne = teamOne + 10;
  console.log('TEAM ONE +10 PTS!', teamOne);

  let scoreTenTeamOne = document.getElementById('team-one-score')
  console.log(scoreTenTeamOne);
  scoreTenTeamOne.innerText = teamOne.toString()

}

function teamTwoBtnTwo() {
  teamTwo = teamTwo + 10
  console.log('TEAM TWO +10 PTS!', teamTwo);

  let scoreTenTeamTwo = document.getElementById('team-two-score')
  console.log(scoreTenTeamTwo);
  scoreTenTeamTwo.innerText = teamTwo.toString()

}

function resetBtn() {
  teamOne = 0
  teamTwo = 0

}
