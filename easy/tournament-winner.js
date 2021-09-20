/*
    * Thoughts:
        - Competitions: An Array of arrays where each inner array represents the two competing teams.
        - Results: An array of intergers, either 0(away team) or 1(Home Team) for ther respective team won.

    * Example:
        Competitions: [
            [HTML, C#],
            [C#, Python],
            [Python, HTML],
        ]
        Results: [0, 0, 1];

        Results[0] = C#
        Results[1] = Python
        Results[2] = Python

        Python = 2 wins

    * Space O(1) | Time Linear O(n)
    * Notes: Iterate over the results array and for each result up the count of the winning team of the corresponding competition in a hashmap called scoreboard.
        On each iteration compare the current winning teams score with the current highest scoring team from the scoreboard using a variable called winner. 
        If current the winning teams score is greater, than set winner variable to the current winner team.


*/

function tournamentWinner(competitions, results) {
    const homeTeam = 0;
    const awayTeam = 1;
    const scoreboard = {
        'none': 0
    };

    let winner = 'none';

    for (let i = 0; i < results.length; i++) {
        const result = results[i];
        const competition = competitions[i];
        const didAwayTeamWin = result === 0;
        let team = null;

        if (didAwayTeamWin) {
            team = competition[awayTeam];
        } else {
            team = competition[homeTeam];
        }

        scoreboard[team] = team in scoreboard ? scoreboard[team] + 1 : 1; 

        if (scoreboard[winner] < scoreboard[team]) {
            winner = team;
        }
    }


    return winner;
  }
  