let a = prompt("a giin utga oruul");
let b = prompt(" b giin utga oruul");
let c = prompt("c giin utga oruulna uu");
let d = prompt("d giin utga oruul");
let message;
if(a<b && a<c && a<d){
    message = a;
}else if(b<a && b<c && b<d){
    message = b;
}else if(c<a && c<b && c<d){
    message = c;
}else if (d<a && d<c && d<b){
    message = d;
}else if(a==b && a==c && a==d){
   message = "bugd tentsuu";
}else if(a==b && a==c && a==d){
    message = a;
}else if(b==c && b==d){
    message = b;
}else if(c==d){
    message = d;
}
console.log("hamgiin baga utga" , message);