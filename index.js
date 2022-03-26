function sortName(arrays){

for(var i=0;i<arrays.length-1;i++){
     
for(var j=i+1;j< arrays.length;j++){
var b=arrays[i].length<arrays[j].length?arrays[i].length:arrays[j].length
   
for(var k=0;k<b;k++ ){

if(arrays[i][k]===arrays[j][k]){

continue

}
else if(arrays[i][k]>arrays[j][k]){
let m=arrays[i]
arrays[i]=arrays[j]
arrays[j]=m
break

}
 
else{
    break
}

}

}


}

return arrays

}
let v=sortName([[10,2,3],[20,30,3],[20,2,400,600]])
console.log(v)