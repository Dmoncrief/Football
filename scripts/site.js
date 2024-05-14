"use strict"

let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
   
];


// Function to display team info
function showTeamInfo() {
    const teamSelect = document.getElementById("teamSelect");
    const selectedTeamName = teamSelect.options[teamSelect.selectedIndex].text;
    const selectedTeamNameCode = teamSelect.value;
    const teamInfoPara = document.getElementById("teamInfo");
    teamInfoPara.textContent = `You selected: ${selectedTeamName} (${selectedTeamNameCode})`;
}



