document.getElementById("bmiform").addEventListener('submit',function(e)
{
    
    e.preventDefault();

    console.log("on");
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const heightfeet = parseInt(document.getElementById("height-feet").value);
    const heightinches = parseInt(document.getElementById("height-inches").value);
    const weight  = parseInt(document.getElementById("weight").value);

    const result = document.getElementById("result");

    if(gender && age && heightfeet && heightinches && weight)
    {
        const heightmeters = ((heightfeet * 12)+heightinches)*0.0254;
        const bmi = weight / (heightmeters * heightmeters);

        let category = ' ';
        if(bmi<18.5)
        {
            category = 'Under Weight';
        }else if(bmi>=18.5 && bmi < 24.9)
        {
            category = 'Normal Weight';
        }else if(bmi>=24.9 && bmi<29.9)
        {
            category = 'Over Weight';
        }else{
            category = 'obese';
        }
        result.innerHTML = `Your BMI : ${bmi.toFixed(2)} <br> Category : ${category}`;
    }
});