var prompt = require('sync-prompt').prompt;

//VARS
var bal = 1000;//balance
var sumD = 0;//total after all deposits
var sumW = 0;//total of all withdrawls

//ARRAYS
var dep = [];//stores every deposit
var wit = [];//stores every withdrawl

//PROMPT TRANSACTIONS
//var inCode;//initial declaration
var inCode = prompt('(d)eposit,(w)ithdrawl,(q)uit: ');

while(inCode!='q'){

switch(inCode)
{
  case 'd'://get '(R)esponse for deposits'
    var depR = prompt('enter deposit(s) then hit q : ');
    while(depR!='q')
    {
      depR = parseInt(depR);
  console.log(depR);
  console.log(typeof depR);
      dep.push(depR);
      depR = prompt('enter deposit(s) then hit q : ');
    }
  console.log(dep);
    for(var i=0; i<dep.length; i++)
    {
      sumD+=dep[i];
  console.log(sumD);
  console.log(typeof sumD);
    }
    bal+=sumD;
    break;
  case 'w':
    var witR = prompt('enter withdrawl(s) then hit q : ');
    while(witR!='q')
    {
      witR = parseInt(depR);
 // console.log(witR);
 // console.log(typeof witR);
      wit.push(witR);
      witR = prompt('enter withdrawl(s) then hit q : ');
    }
  console.log(wit);  
    for(var j=0; j<wit.length; j++)
    {
      sumW+=wit[j];
  console.log(sumW);
  console.log(typeof sumW);
    }
    bal+=sumW;
    break;
}
    inCode = prompt('(d)eposit,(w)ithdrawl,(q)uit: ');
}

console.log('----->' + bal);
