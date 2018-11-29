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


function stringCompress(str){

    let strArr = str.split('');

    let obj = {};

    for(let i = 0;i<strArr.length;i++){
        obj.hasOwnProperty(strArr[i]) ? obj[strArr[i]]++ : obj[strArr[i]] = 1 ;
    }

    let res = Object.entries(obj).flat().join('');

    if(res.length < str.length)
        return res;
    else
        return str;
}



function reverseString(str){
    let strArr = str.split('.')
    let len = strArr.length;

    for(let i =0; i<len/2; i++){
        let temp = strArr[i];
        strArr[i] = strArr[len-1-i];
        strArr[len-1-i] = temp;
    }

    return strArr.join('.');
}