
    

    function findTottalDayToMarriage() {

        var date = new Date()
    
    
        var month = date.getMonth() + 1
        let array = [31,29,31, 30, 30]
    
        
    
        array.splice(0,month-1)
    
    let totalDay=0
    
        var todaysDate=date.getDate() 
    
    let thisMonthRemainingDay=array[0]-todaysDate
    
    let totalDayLeftForMarriage=0

    for(var i=1;i<array.length;i++){
        totalDayLeftForMarriage=totalDayLeftForMarriage+array[i]

    }
    
    totalDayLeftForMarriage=totalDayLeftForMarriage+thisMonthRemainingDay
    return totalDayLeftForMarriage
    }
    
    export default findTottalDayToMarriage
    
    
