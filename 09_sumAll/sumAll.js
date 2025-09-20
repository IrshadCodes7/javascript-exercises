const sumAll = function(start,end) {
    startType=typeof(start)
    endType=typeof(end)

    if(startType!="number" || endType!="number"){
        return "ERROR"
    }
    if(parseInt(start)!=start || parseInt(end)!=end){
        return "ERROR"
    }
    if(start<0 ||end<0){
        return "ERROR"
    }
    
    if(start>end){
        [start,end]=[end,start]
    }
    let sum=0
    for(let num=start;num<=end;num++){
        sum+=num
    }
    return sum
};


// Do not edit below this line
module.exports = sumAll;
