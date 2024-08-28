function Calculatelove()
{
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    if(name1 === "" || name2 === "")
    {
        alert("Please Enter the names");
    }else{
        const lovepercent = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");
        result.innerHTML = `${name1} and ${name2} Love Percentage : ${lovepercent} `;
        if(lovepercent<30){
            result.innerHTML += "<br> Not a great match. Keep Looking!"
        }else if(lovepercent>=30 && lovepercent<70){
            result.innerHTML += "<br> There is a potential. Give it a try."
        }else{
            result.innerHTML += "<br> Great Match! Love is in Air!"
        }  
    }
}