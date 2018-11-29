function sumOfDigits(number){
    let arr = number.toString().split('');
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum = sum + Number(arr[i]);
    }

    return sum;
}



