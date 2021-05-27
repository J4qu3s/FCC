function smallestCommons(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    console.log(min,max)
    let nums = [];
    let i = min;
    let passed = false;
    while(i <= max){
        nums.push(i);
        i++
    }

    for(var i = 1; passed === true; i++){
        nums.forEach((i) => {
            
        })
    }

    console.log(nums)
    return arr;
  }
  
  
  console.log(smallestCommons([1,5]));