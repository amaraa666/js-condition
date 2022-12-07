let TeamA_A = 106;
let TeamA_B = 108;
let TeamA_C = 99;
let TeamB_A = 120;
let TeamB_B = 91;
let TeamB_C = 110;
let averageA = (TeamA_A+TeamA_B+TeamA_C)/3;
let averageB = (TeamB_A+TeamB_B+TeamB_C)/3;
if(averageA>100 && averageB>100){
    if(averageA>averageB){
        console.log("A team ylsan");
    }else if(averageA==averageB){
        console.log("tentssen");
    }else{
        console.log("B team ylagch");
    }
}else{
    console.log("Ylagch baihgu");
}