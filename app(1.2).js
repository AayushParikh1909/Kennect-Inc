function getValue()
{
    var a = document.getElementById('number').value
    if(a=='' || a==null || a==undefined)
    {
        alert("Please enter any number");
    }
    else if(a>=50)
    {
        alert("Number is greater than or equal to 50");
    }
    else
    {
        alert("Number is less than 50");
    }
}