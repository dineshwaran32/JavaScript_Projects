document.getElementById("agecalculator").addEventListener("submit", (event) => {
    event.preventDefault();
    calculateage();
});

function calculateage() {
    const today = new Date();
    const birthdatein = document.getElementById("birthdate").value;
    
    const birthdateparts = birthdatein.split("-");
    const birthyear =birthdateparts[0];
    const birthmonth = birthdateparts[1] - 1; 
    const birthday = birthdateparts[2];
    
    const birthdate = new Date(birthyear, birthmonth, birthday);

    const isvaliddata = (date) => {
        return date instanceof Date && !isNaN(date);
    }

    if (!isvaliddata(birthdate)) {
        alert("Invalid date format. Please enter date in YYYY-MM-DD format.");
        return;
    }

    const agemilliseconds = today - birthdate;
    const ageinseconds = Math.floor(agemilliseconds / 1000);
    const ageinminutes = Math.floor(ageinseconds / 60);
    const ageinhours = Math.floor(ageinminutes / 60);
    const ageindays = Math.floor(ageinhours / 24);
    const ageinweeks = Math.floor(ageindays / 7);
    const ageinmonths = Math.floor(ageindays / 30.42);
    const ageinyears = Math.floor(ageinmonths / 12);

    const resultcontainer = document.getElementById("result-container");
    const result = document.getElementById("result");
    result.innerHTML = `
    <div id="result-item">
        <h3>Age : </h3>
        <p>${ageinyears} Years ${ageinmonths % 12} Months ${ageindays % 30} Days</p>
    </div>
    <div id="result-item">
        <h3>Months Passed : </h3>
        <p>${ageinmonths}</p>
    </div>
    <div id="result-item">
        <h3>Weeks Passed : </h3>
        <p>${ageinweeks}</p>
    </div>
    <div id="result-item">
        <h3>Days Passed : </h3>
        <p>${ageindays}</p>
    </div>
    <div id="result-item">
        <h3>Hours Passed : </h3>
        <p>${ageinhours}</p>
    </div>`;
}
