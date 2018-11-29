function sumOfDigits(number){
    let arr = number.toString().split('');
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum = sum + Number(arr[i]);
    }

    return sum;
}



function uniqueCharacters(str){

    let strArr = [];
    if(typeof(str) === "string"){
        strArr = str.split('');
    }else if(typeof(str) === "number"){
        strArr = str.toString().split('');
    }

	let unique = [...new Set(strArr)];

	if(strArr.length == unique.length)
		return true;
	else
		return false; 
    
}