function smallestCommons(arr) {
  
    console.log(arguments[0].[0]);
    const first = arguments[0].[0];
    const second = arguments[0].[1];
    let firstNumber = first;
    let secondNumber = second;
    let numberArr = [];
    
    let totalSum = Math.max(first, second);
    let bigger = totalSum;
    let enough = false;
  
    if(first > second){
      numberArr = [second];
      while(secondNumber < firstNumber){  
        
        secondNumber++;
        numberArr.push(secondNumber);
      }
    }else{
      numberArr = [first];
      while(firstNumber < second){
        
        firstNumber++;
        numberArr.push(firstNumber);
      }
    }
  
  
   while(!enough){
      
      
      enough = testIt(totalSum);
      console.log(testIt(totalSum));
      if(enough){     
        return totalSum;
      } else { 
        totalSum += bigger;
        enough = false;
        console.log(totalSum)
        
      }
      
      
   }
    
  
  
  function testIt(totalSum){
  
      let truthArr = [];
  
      for(let item of numberArr){
        if(totalSum % item == 0){
          truthArr.push(true);
        }
        else {
          truthArr.push(false);
        }
      }
  
      function testForTruth(e){
        return (e ? true : false);
      }
  
      return truthArr.every(testForTruth);
      console.log(truthArr.every(testForTruth))
    }
    
  
    
    /*
    while(!enough){
      totalSum++;
      for (let item of numberArr){
        if(totalSum % item == 0){
  
        };
  
    }}
    */
    console.log(totalSum);
    console.log(numberArr);
    return arr;
  
  }
  
  
  smallestCommons([1,5]);