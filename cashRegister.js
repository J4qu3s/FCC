function checkCashRegister(price, cash, cid) {

  const returnSum = (cash - price) * 100;
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
  console.log(values)
  //Add items to register, reverse it and turn into pennies
  
  let tempReg = [];
  let register = [];
  cid.forEach(element => {
    tempReg.unshift([
      [element[0]], [element[1] * 100]
    ]);
  });
  tempReg.forEach(e => register.push(e));
  console.log(register);

  //What to return
  //Check if "fits" in value
  //Check if current "money" left 
  //
  register.forEach((element, index) => {
    while(element[1] >= values[index][1]){
      element[1] - values[index][1];
      
    }
    console.log(element[1])
  });

  console.log(register)
  //No enough cash in register

  //transaction


  //message

  
}
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);




  /* let values1 = [
    ["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1.00], ["FIVE", 5.00], ["TEN", 10.00], ["TWENTY", 20.00], ["ONE HUNDRED", 100.00]]; */














  
/*   

const values = {
    PENNY: 1, 
    NICKEL: 5, 
    DIME : 10,
    QUARTER : 25,
    ONE : 100,
    FIVE : 500,
    TEN : 1000,
    TWENTY : 2000,
    HUNDRED : 1000 
  }

let inRegister = 0;

  let countRegister = cid.forEach( e => {
    console.log(e[1])
    inRegister += e[1];
  })

  console.log('cash in register ' + inRegister)

    let register = {
      reg : function(){
        cid.forEach(e => {
          name = e[0],
          value = e[1]
      })

      }
    }
  
    

    const multipliers = () => {

    }

    var change = {
      status: '',
      change:[]
    };
  
    let total = 0;
  
    cid.forEach(e => {
      total += e[1];
    });
    
    if(total < cash){
      change.status = 'INSUFFICIENT_FUNDS';
      console.log(change);
      return change;
    }
  
    const ifFits = (arr) => {
      var toReturn = price - cash;
      console.log(toReturn);
    }
    
    return ifFits(cid);
  } */