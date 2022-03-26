var date=new Date()
var day=date.getMinutes()
console.log(typeof day)

function hi(time){
if(time%2===0){
console.log(time)
}
else{
    console.log('i am out of service')
}


}



setInterval(()=>{

hi(new Date().getHours())
},3600000)