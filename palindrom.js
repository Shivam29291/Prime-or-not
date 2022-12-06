let string="naman"
function reverse(string){
let bag="";
for(let i=string.length-1;i>=0;i--){
bag+=string[i];
}
return bag;
}
let reversed=reversed(string);
if(string==reversed){
console.log("Palindrom");
}
else{
console.log("NA");
}
