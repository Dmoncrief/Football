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
    const selectedTeamCode = teamSelect.value;
    const teamInfoPara = document.getElementById("teamInfo");

    if (selectedTeamCode === "") {
        // Clear team info paragraph if "Select a team" is selected
        teamInfoPara.textContent = "";
    } else { 
        // Display team info if a team is selected
        teamInfoPara.textContent = `You selected: ${selectedTeamName} (${selectedTeamCode})`;
    }
}



//Function to handle click event of submit button
document.getElementById("submitButton").addEventListener("click", function(){
    const teamSelect = document.getElementById("teamSelect");
    const selectedTeamName = teamSelect.options[teamSelect.selectedIndex].text;
    const selectedTeamCode = teamSelect.value;
    const selectedTeamPlays = teamSelect.options[teamSelect.selectedIndex].getAttribute("data-plays");
    const teamInfoPara = document.getElementById("teamInfo");

    if (selectedTeamCode === "") {
        // Clear team info paragraph if "Select a team" is selected
        teamInfoPara.textContent = "";
    } else {
        // Check if data-plays is set
        const playsMessage = selectedTeamPlays ? ` who play in ${selectedTeamPlays}` : ''; 
        teamInfoPara.textContent = `You selected the ${selectedTeamName} (${selectedTeamCode}) who plays in ${playsMessage}`;
    }
});
