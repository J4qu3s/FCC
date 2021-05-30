function checkCashRegister(price, cash, cid) {

  let answer = {
    status : "",
    change : []
  };
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
  
  
  let register = [];
  let originalRegister = [...cid].reverse();
  //originalRegister.forEach(e => e[1] * 100)
  cid.forEach(element => {
    let ele = element[1] * 100;
    ele = ele.toFixed(2);
    register.unshift(

      [element[0], ele]
    );
  });
  console.log(register)
  
  
  //tempReg.forEach(e => originalRegister.push(e));
  

  //Make a copy of the register for evaluation
  //console.log(register);

  //What to return
  //Check if "fits" in value
  //Check if current "money" left 
  //
  register.forEach((element, index) => {
    while(values[index][1] <= returnSum && element[1] >= returnSum){
      returnSum -= values[index][1];
      element[1] -=values[index][1];
      //console.log(returnSum, element[1])
    }
  });

  register.forEach((element) => {
    element[1] = element[1] / 100;
  })

  console.log("register");
  console.log(register);
  console.log("originalRegister");
  console.log(originalRegister);
  
  register.forEach((element, index) => {
    if(element[1] !== originalRegister[index][1]){
      answer.change.push([element[0], originalRegister[index][1] - element[1]])
    }
  });

  if(answer.change && returnSum === 0){
    answer.status = "OPEN";
  }
  else if(2 == 6){

  } else {
    
  }

  
  console.log(answer);
  return answer;
  //No enough cash in register
  //transaction
  //message
}
  
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])