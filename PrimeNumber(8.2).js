const num = parseInt(prompt("Enter a positive number:"));
let flag=true;
if (num == 1) {
    console.log("1 is neither prime nor composite number.");
}
else if(num>1)
{
  getPrime(num);
  if (flag) 
  {
    console.log(`${num} is a prime number`);
    let num1=num;
    flag=true;
    while(flag)
    {
        num1++;
        getPrime(num1);
        if(flag)
        {
           console.log(`${num1} is the next prime number`);
           console.log(`Difference between ${num1} and ${num} is ${num1-num}`);
           break;
        }
        else
        {
            flag=true;
        }
    }
  }
  else
  {
    console.log(`${num} is not a prime number`);
  }
}
function getPrime(x)
{
    for(var j=2;j<x;j++)
    {
        if(x%j==0)
        {
            flag=false;
            break;
        } 
    }
}


