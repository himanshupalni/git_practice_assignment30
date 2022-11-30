let num = 1221;
let str = "";
let a = (str+num);
let bag = "";
for(let i=a.length-1;i>=0;i--){
    bag = bag[i];
}
if(a==bag){
    console.log("Yes");
}else{
    console.log("No");
}
}