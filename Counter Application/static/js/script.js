document.getElementById("increment").addEventListener('click',incrementcounter);
document.getElementById("decrement").addEventListener('click',decrementcounter);
document.getElementById("reset").addEventListener('click',resetcounter);

let counterdisplay = document.getElementById("counterdisplay");
let cvalue;
function updatacounter()
{
    counterdisplay.textContent = cvalue;
}

function incrementcounter()
{
    cvalue+=1;
    updatacounter();
}

function decrementcounter()
{
    if(cvalue>0)
    {
        cvalue-=1;
    }
    updatacounter();
}

function resetcounter()
{
    cvalue = 0;
    updatacounter();
}