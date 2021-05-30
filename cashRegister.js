function checkCashRegister(price, cash, cid) {

  let answer = {
    status : "",
    change : []
  };

  let handed = cash;
  let returnSum = (cash - price) * 100;
  console.log(returnSum)
  const values = [
    ["ONE HUNDRED", 10000],
    ["TWENTY", 2000], 
    ["TEN", 1000],
    ["FIVE", 500],
    ["ONE", 100],
    ["QUARTER", 25],
    ["DIME", 10], 
    ["NICKEL", 5], 
    ["PENNY", 1], 
  ];

  //console.log(values)
  //Add items to register, reverse it and turn into pennies
  let total;
  let register = [];
  let originalRegister = [...cid].reverse();
  //originalRegister.forEach(e => e[1] * 100)
  cid.forEach(element => {
    total += element[1];
    let x = element[1] * 100;
    x = parseFloat(x.toFixed(2));
    register.unshift(
      [element[0], x]
    );
  });

  //What to return
  //Check if "fits" in value
  //Check if current "money" left 
  //
  register.forEach((element, index) => {
    /* Laske kuinka monta kertaa  */
  
    /* let e = element[1];
    if(element[1] < )
    for(element[1]; element[1] >= returnSum; returnSum - values[index][1]){
      element[1] -= values[index][1];
    } */
    console.log("hop!");

    cursum:
    while(returnSum >= values[index][1]){
      //break the loop if the current register value is lesser than current cointype value.
      if(values[index][1] > element[1]){
        break cursum;
      }
      element[1] -= values[index][1];
      returnSum -=values[index][1];
      
    } 
      
  });

  let leftInRegister = 0;
  register.forEach((element) => {
    element[1] = element[1] / 100;
    leftInRegister += element[1];
  })

  console.log("register");
  console.log(register);
  console.log("originalRegister");
  console.log(originalRegister);
  
  register.forEach((element, index) => {
    if(element[1] !== originalRegister[index][1]){
      let x = originalRegister[index][1] - element[1];

      /* PYÖRISTYKSET TÄHÄN VÄLIIN FUNKTIONA KIITOS! */
      if(element[0] === "PENNY"){
        x = parseFloat(x).toFixed(2);
      }
      if(element[0] === "DIME" || element[0] === "QUATER"){
        x = parseFloat(x).toFixed(2);
      }
      

      answer.change.push([element[0], parseFloat(x)])
      
    }
  });


  if(answer.change.length > 0 && returnSum === 0){
    answer.status = "OPEN";
  }
  else if(leftInRegister === 0){
    return {
      status : "CLOSED", 
      change : []
    }
  } 
  else if(returnSum > total){
    answer.status = "INSUFFICIENT_FUNDS";
  }
  else {    
      answer.status = "INSUFFICIENT_FUNDS";
      console.log(returnSum);
  }
  console.log(answer);
  return answer;
  //No enough cash in register
  //transaction
  //message
}

console.log("FIRST run!!! 19.5, 20 ");
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log("should return {status: \"OPEN\", change: [[\"QUARTER\", 0.5]]}");

console.log("SECOND run!!! 3.26, 100 ");
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

console.log(`Should return : {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}`);

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); 
console.log(`should return {status: "INSUFFICIENT_FUNDS", change: []}`);