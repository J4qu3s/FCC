function convertToRoman(num) {
    
    let theNum = num.toString().split("");
    let answerArr = [];

    if(theNum.length === 1){
        printOnes(theNum[0]);
    };

    if(theNum.length === 2){
        printTens(theNum[0]);
        printOnes(theNum[1]);
    };

    if(theNum.length === 3){

        printHundreds(theNum[0]);
        printTens(theNum[1]);
        printOnes(theNum[2]);
    };

    if(theNum.length === 4){
        printThousands(theNum[0]);
        printHundreds(theNum[1]);
        printTens(theNum[2]);
        printOnes(theNum[3]);
    };

         
        function printOnes (callback){
            let ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
            console.log(ones[callback]);
            answerArr.push(ones[callback]);
        };

        function printTens (callback){
            let tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C'];
            console.log(tens[callback]);
            answerArr.push(tens[callback]);
        };

        function printHundreds (callback){
            let hundreds = ['','C', 'CX', 'CXX', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
            console.log(hundreds[callback]);
            answerArr.push(hundreds[callback]);
        };

        function printThousands (callback){
            let thousands = ['','M', 'MM', 'MMM'];
            console.log(thousands[callback]);
            answerArr.push(thousands[callback]);
        };


        answer = answerArr.join("");
        console.log(answer);

    
    return answer;
}

convertToRoman(400);

