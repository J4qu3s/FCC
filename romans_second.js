let nums = {
    ones = function (){
        
    },
    ones : ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IV'],
    tens : ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'CV', 'C'],
    hundreds : ['C', 'CX', 'CXX', 'CXXX', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    thousands : ['M', 'MM', 'MMM']
}

function printOnes (callback){
    let ones = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IV'];
    console.log(ones[callback]);
    return ones[callback];
}

function printTens (callback){
    let tens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'CV', 'C'];
    console.log(tens[callback]);
    return tens[callback];
}

function printHundreds (callback){
    let hundreds = ['C', 'CX', 'CXX', 'CXXX', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    console.log(hundreds[callback]);
    return hundreds[callback];
}

function printThousands (callback){
    let thousands = ['M', 'MM', 'MMM'];
    console.log(thousands[callback]);
    return thousands[callback];
}



 printOnes(5);

function convertToRoman(num) {
    
    let answer = [];
    console.log(num);
    let toFix = num;
    
    let splitted = toFix.toString().split("");
    console.log(splitted[0]);
    console.log(nums.tens[2]);


    //laske alaspäin numerot ja käytä funktioiden kutsumiseen
    for(let key of splitted){
        console.log(key);
    }

    /*
    for(var i = splitted.length; i = 0; i--){

        if(i == 0){
            console.log("0")
            answer.push(nums.ones[splitted[i - 1]]);
        }
        else if(i == 1){
            console.log("1")
            answer.push(nums.tens[splitted[i- 1]]);
        }
        else if(i == 2){
            console.log("2")
            answer.push(nums.hundreds[splitted[i- 1]]);
        }
        else if(i == 3){
            console.log("3")
            answer.push(nums.thousands[splitted[i- 1]]);
        }
    }
    */
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

