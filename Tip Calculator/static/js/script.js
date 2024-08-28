document.getElementById('calculatebtn').addEventListener('click', calculatetip);

function calculatetip() {
    const amount = parseFloat(document.getElementById('billamount').value);
    const rating = parseInt(document.getElementById('servicerating').value);
    let noofpeople = parseInt(document.getElementById('splitcount').value);
    const mealtype = document.getElementById('mealtype').value;

    const tipamount = document.getElementById('tipamount');
    const totalamount = document.getElementById('totalamount');
    const amountperperson = document.getElementById('amountperperson');

    if (isNaN(amount) || isNaN(rating)) {
        alert("Please enter valid numbers for bill amount and service rating.");
        return;
    }

    if (isNaN(noofpeople) || noofpeople <= 0) {
        noofpeople = 1; // Default to 1 person if invalid or not provided
    }

    let tip;
    switch (rating) {
        case 1:
            tip = amount * 0.05;
            break;
        case 2:
            tip = amount * 0.10;
            break;
        case 3:
            tip = amount * 0.15;
            break;
        case 4:
            tip = amount * 0.20;
            break;
    }

    if (mealtype === "dinner") {
        tip += 5;
    }

    let total = amount + tip;
    let perperson = total / noofpeople;

    tipamount.textContent = `Tip: ${tip.toFixed(2)}`;
    totalamount.textContent = `Total Amount: ${total.toFixed(2)}`;
    amountperperson.textContent = `Amount per person: ${perperson.toFixed(2)}`;
}
