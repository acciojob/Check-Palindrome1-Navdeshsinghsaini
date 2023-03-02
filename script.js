// complete the given function

function palindrome(str){
   let m = str.toLowerCase();
    m.trim();
    let arr = m.split("");
    // console.log(arr);
     let k = arr.reverse();
    // console.log(arr);
    if(k == arr ){
        return true
    }else {return false}


}
// module.exports = palindrome
