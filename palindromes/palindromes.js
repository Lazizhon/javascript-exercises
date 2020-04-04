function palindromes (inputString) {
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
    let noCharString = inputString.toLowerCase().replace(re, '');
    let splitString = noCharString.split("").reverse().join("")
    if (noCharString == splitString){
      return true
    }
    else{
      return false
    }
}

module.exports = palindromes
