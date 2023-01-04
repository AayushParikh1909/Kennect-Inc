x = int(input("Enter any positive number "))

sum=0
for i in range(1,x+1):
  sum=sum+i

print("Summation of number from 1 to",x,"is",sum)

multiply=1
j=1
while(j<=x):
  multiply=multiply*j
  j=j+1

print("Multiplication of number from 1 to",x,"is",multiply)