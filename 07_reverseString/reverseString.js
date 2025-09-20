const reverseString = function(s) {
    ans=""

    for(let ch of s){
        ans=ch+ans
    }
    return ans
};

// Do not edit below this line
module.exports = reverseString;
