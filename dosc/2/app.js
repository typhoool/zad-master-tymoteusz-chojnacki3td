document.addEventListener('DOMContentLoaded', function() {

    let teams = [];
    let scores = {};

    function updateTeamSelects() {
        const team1Select = document.getElementById('team1');
        const team2Select = document.getElementById('team2');

        team1Select.innerHTML = '';
        team2Select.innerHTML = '';

        teams.forEach(team => {
            const option1 = document.createElement('option');

            option1.value = team;
            option1.textContent = team;
            team1Select.appendChild(option1);

            const option2 = document.createElement('option');

            option2.value = team;
            option2.textContent = team;
            team2Select.appendChild(option2);
        });
    }

    function addTeam(event) {
        event.preventDefault();

        const teamNameInput = document.getElementById('teamName');
        const teamName = teamNameInput.value.trim();

        if (teamName && !teams.includes(teamName)) {

            teams.push(teamName);
            updateTeamSelects();
            updateTeamList();

        }

        teamNameInput.value = '';
    }

    function updateTeamList() {
        const teamList = document.getElementById('teamList');
        teamList.innerHTML = '';

        teams.forEach(team => {

            const li = document.createElement('li');
            li.textContent = team;
            teamList.appendChild(li);
        });
    }

    function addScore(event) {
        event.preventDefault();

        const team1 = document.getElementById('team1').value;
        const team2 = document.getElementById('team2').value;

        const score1 = parseInt(document.getElementById('score1').value);
        const score2 = parseInt(document.getElementById('score2').value);
if (team1 !== team2) {
            if (!scores[team1]) {

                scores[team1] = { points: 0, matches: 0 };

            }

            if (!scores[team2]) {

                scores[team2] = { points: 0, matches: 0 };

            }

            scores[team1].matches++;
            scores[team2].matches++;

            if (score1 > score2) {

                scores[team1].points += 3;

            } else if (score1 < score2) {

                scores[team2].points += 3;

            } else {

                scores[team1].points += 1;
                scores[team2].points += 1;

            }

            updateScoreTable();
        }
    }

    function updateScoreTable() {
        const tableBody = document.querySelector('#scoreTable tbody');
        tableBody.innerHTML = '';

        teams.forEach(team => {
            const row = document.createElement('tr');
            const teamCell = document.createElement('td');

            const matchesCell = document.createElement('td');
            const pointsCell = document.createElement('td');

            teamCell.textContent = team;

            matchesCell.textContent = scores[team] ? scores[team].matches : 0;
            pointsCell.textContent = scores[team] ? scores[team].points : 0;

            row.appendChild(teamCell);
            row.appendChild(matchesCell);
            row.appendChild(pointsCell);

            tableBody.appendChild(row);
        });
    }

    document.getElementById('teamForm').addEventListener('submit', addTeam);
    document.getElementById('scoreForm').addEventListener('submit', addScore);
    
});
