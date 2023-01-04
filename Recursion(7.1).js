function factorial(n){
    if (n==1)
    {
        return n
    }
    else{
        return n*(factorial(n-1))
    }
    
}
const x = parseInt(prompt("Enter a number:"));
        
if(x==0){
    console.log("Factorial is equal to 1")
}
else if(x<0){
    console.log("Factorial does not exists for negative number")
}
else{
    console.log("Factorial is equal to",factorial(x))
}