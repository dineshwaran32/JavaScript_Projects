document.getElementById('checkbutton').addEventListener('click',checkpalindrome);
function checkpalindrome()
{
    const inputtext = document.getElementById("inputtext").value;
    console.log(inputtext);
    const result = document.getElementById("result");

    const cleanstr = inputtext.toLowerCase().replace(/[^a-z0-9]/g,'');

    const reversestr = cleanstr.split('').reverse().join('');

    let resultmsg ='';

    if(cleanstr == reversestr)
    {
        resultmsg = "It is palindrome";
    }else{
        resultmsg = "It is not a palindrome";
    }

    result.innerHTML = resultmsg;

}