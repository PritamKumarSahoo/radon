const printDate=function() {
    let currentDate= new Date()
    console.log (currentDate)
}
const printMonth =function(){
    let currentDate= new Date()
    let currentMonth= currentDate.getMonth() +1
    console.log ("current month is" +currentMonth )
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth



