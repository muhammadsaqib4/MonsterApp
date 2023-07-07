//side effect
let c = 4;
function sum(a,b){
    c=8;
    return a+b+c;
}

sum(2,3) //9
c = 5;
sum(2,3)//10