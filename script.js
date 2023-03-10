// complete the given function

function palindrome(str){
   let m = str.toLowerCase();
    m.trim();
    let arr = m.split("");
    // console.log(arr);
     let y = arr.reverse();
	let k = arr.join("")
    // console.log(arr);
    if(k == arr ){
        return true
    }else {return false}


}
// module.exports = palindrome
