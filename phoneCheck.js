function telephoneCheck(str) {
    console.log(str);
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let strArr = [];
    let answerArr = [];

    for(var i=0; i < str.length; i++){
        if(numbers.indexOf(str[i]) > 0){ 
        strArr.push(str[i]);
        }
      }

      strArr.forEach((ele, index) => {
          if(strArr.length === 11){
              
          }
        console.log(ele, index);
      })


    console.log(answerArr);
  
    
  }
  
  telephoneCheck("555-555-5555");