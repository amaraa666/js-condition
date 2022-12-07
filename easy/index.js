//1
let x = prompt("garaas utga oruul");
if(x<50){
    console.log("F");
}else if(x>=50 && x<70){
    console.log("D");
}else if(x>=70 && x<80){
    console.log("C");
}else if(x>=80 && x<90){
    console.log("B");
}else if(x>=90 && x<=100){
    console.log("A");
}else{
    console.log("zuv utga oruulna uu");
}
//2
let month = prompt("Ta ymar neg sar oruulna uu?");
if(0<month && month<=12){
    if(month==2){
        console.log("28 udurtei");
    }else if(month == 4 || month == 11 || month == 9 || month == 6){
        console.log("30 udurtei");
    }else{
        console.log("31 udurtei");
    }
}else{
    console.log("zuv utga oruulna uu!");
}
//3
let number = prompt("garaas eyreg too oruulna uu?");
let z = 0;
if(number>0){
    if(number%3==0 && number%7==0){
        z=number/3;
        zz=number/7;
        console.log("7 bolon 3 t zereg huvaagddag too baina" , z , "bolon 3 iin urjver" ,zz , "bolon 7 giin urjver");
    }else if(number%3==0){
        z=number/3;
        console.log("3t huvaagddag too baina" , z , "bolon 3 iin urjver baina");
    }else if(number%7==0){
        z=number/7;
        console.log("7t huvaagddag too baina" , z , "bolon 7 giin urjver baina");
    }else{
        console.log("3 bolon 7 giin alind ch huvaagddaggui too baina");
    }
}else{
    console.log("Zuv utga oruulna uu bayrlalaa!");
}
//4
let n = prompt("Garaas eyreg surug utga oruulna uu?");
if(n < 0){
    console.log("Negative");
}else if(n > 0){
    console.log("Positive");
}else{
    console.log("Zuv utga oruulna uu!");
}
//5
let ner = prompt("Neree oruulna uu?");
let height = prompt("Unduruu oruulna uu? m eer");
let weight = prompt("Jingee oruulna uu? kg");
if(height >0 && weight > 0){
    let BJI = weight/Math.pow(height , 2);
    if(BJI<=18){
        console.log( ner , "ci turaaltai ym baina hooloo sain ideece");
    }else if(BJI>18 && BJI<=24){
        console.log(ner , "ci Eruul ym bnshde bro mundag huuhed");
    }else if(BJI>25 && BJI<29){
        console.log(ner ," ci Iluudel jintei baina hoolondoo anhaarahgui bolch")
    }else if(BJI>29 && BJI<=39){
        console.log(ner ,"ci targalalttai baina odoonos ch bolov dasgal sain hiigeerei bro");
    }else{
        console.log(ner , " ci Het targalalttai baina hooloo zuv tohiruulj heregleerei hu");
    }
}else{
    console.log(ner , "ci odoo Zuv utga oruulaldaa bro?");
}
//6
let aa = prompt("Ymar neg too oruulna uu?");
if(aa%2==0){
    console.log("Tegsh");
}else if(aa%2==1){
    console.log("Sondgoi");
}else{
    console.log("Zuv utga orul!");
}
//7 adilhan daalgavar bsn tul algassan bolno
//8
let yearOfBirth = prompt("Tursun onoo bicne uu?");
let old;
if(yearOfBirth>0){
    old=2022-yearOfBirth;
    if(old>=0 && old<=1){
        console.log(old , "infant");
    }else if(old>1 && old<=3){
        console.log(old , "Toddler");
    }else if(old>3 && old<=5){
        console.log(old , "Preschooler");
    }else if(old>5 && old<=12){
        console.log(old , "Gradeschooler");
    }else if(old>12 && old<=18){
        console.log(old , "Teen");
    }else if(old>18 && old<=21){
        console.log(old , "Young Adult");
    }else{
        console.log(old , "Adult");
    }
}else{
    console.log("Zuv utga oruulna uu?");
}
