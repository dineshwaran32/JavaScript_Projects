document.getElementById("calculateloan").addEventListener('click',calculateloan);
function calculateloan()
{
    const loanamount = document.getElementById('loanamount').value;
    const interestrate = document.getElementById('interestrate').value;
    const loanterm = document.getElementById('loanterm').value;

    const monthlyinterest = interestrate/100/12;
    const totalpayments = loanterm;
    const monthlypayment  = (loanamount * monthlyinterest)/(1-Math.pow(1+monthlyinterest,-totalpayments));
    const totalinterest = (monthlypayment * totalpayments) - loanamount;

    displayresult(monthlypayment,totalinterest);
}

function displayresult(monthlypayment,totalinterest)
{
    const result = document.getElementById("result");

    result.innerHTML = `
    <p><strong>Monthly Payment : ${monthlypayment.toFixed(2)}</strong></p>
    <p><strong>Total Interest : ${totalinterest.toFixed(2)}</strong></p>
    `;   
}