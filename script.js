// complete the given function

function palindrome(str){
    str.trim();
    let arr = str.split("");
    // console.log(arr);
     let k = arr.reverse();
    // console.log(arr);
    if(k == arr ){
        return true
    }else {return false}


}
// module.exports = palindrome
