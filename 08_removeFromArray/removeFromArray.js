const removeFromArray = function(arr,...valuesToRemove) {
    const ans=arr.filter((num)=> !(valuesToRemove.includes(num)))
    return ans
};

// Do not edit below this line
module.exports = removeFromArray;
