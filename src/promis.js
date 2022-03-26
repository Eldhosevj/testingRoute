Object.prototype.MyPromise=function( ){
var k=0

    Object.prototype.MyThen=function( callBack){

k= callBack(k)
//k=c
//console.log(k)
return k
}

        Object.prototype.MyCatch=function( ){
           
            return false
            }
            

    
    
        }


let hi=new MyPromise()


hi.MyThen((result)=>{
//console.log(result)
return 400
}).MyThen((result)=>{
    console.log(result)
    
    return 500

    }).MyThen((result)=>{

        console.log(result)
    
        return 5
    

    })