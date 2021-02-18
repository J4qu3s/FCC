let nums = {
    ones : ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IV'],
    tens : ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'CV', 'C'],
    hundreds : ['C', 'CX', 'CXX', 'CXXX', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    thousands : ['M', 'MM', 'MMM']
}


function convertToRoman(num) {
    
    let answer;
    console.log(num);
    let toFix = num;
    
    let splitted = toFix.toString().split("");
    console.log(splitted);

    for(var i = 0; i < splitted.length; i++){

        if(i = 0){
            answer.unshift(ones.splitted[i]);
        }
        else if(i = 1){
            answer.unshift(tens.splitted[i]);
        }
        else if(i = 2){
            answer.unshift(hundreds.splitted[i]);
        }
        else if(i = 3){
            answer.unshift(thousands.splitted[i]);
        }
    }

    console.log(answer);
    /*
    let toConvertArr = [];
    let numbers = num;
    console.log(numbers.length);
    for(var i = 0; i < numbers.lenght; i++){
        toConvertArr.push(numbers[i]);
    }
    console.log(toConvertArr);
    */
    
    return answer;
}

convertToRoman(36);

