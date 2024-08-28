function detectchar()
{
    const input = document.getElementById("input").value;
    const result = document.getElementById("result");
    console.log(input);
    if(input)
    {
        const unicodevalue = input.charCodeAt(0);
        result.textContent = `The unicode value for the ${input} is ${unicodevalue}`;
    } else {
    result.textContent = 'Please enter a character.';
}
}