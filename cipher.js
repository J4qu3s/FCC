/* fcc ceacars cipher task */

const input = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const output = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"]

function rot13(str) {

    let strArr = [];
    let answerArr = [];

    for(var i=0; i < str.length; i++){
      strArr.push(str[i]);
    }

    console.log(strArr);
    for(let ele of strArr){
        let cur = input.indexOf(ele);
        if(output.indexOf(ele) === -1){
            answerArr.push(ele);
        }
        else {
            answerArr.push(output[cur]);
        } 
    }
    
    let answer = answerArr.join('');
    return answer;
  }

  
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")