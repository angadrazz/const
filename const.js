var a = 20;
//console.log(a);

a = 50;
console.log(a);

var a = 30;

if(a <= 20){
  var b = 80;
    
}else{
    var c = 100;
}

console.log(a,b,c);
function oddSum(n)
{
    let total = 0, 
    result=[]; 
    for(let x = 1; x <= n; x++) 
    { 
       let odd = 2*x-1; 
       total += odd;
       result.push(total);
    }
    return result;
}

var result = oddSum(5);
console.log(result);