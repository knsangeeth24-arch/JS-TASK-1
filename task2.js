

let num=Number(prompt("Enter the Number"));
if(numb%2==0){
    alert("Even");
}
else{
    alert("Odd");
}


function table(){
    let numb = Number(prompt("Enter the number"));
    for (let i=1; i<=10; i++){
        alert(numb + "x" + i + " = " + (numb*i));
    }
}
table();


let Nnum=Number(prompt("Enter the number"));
function natural(Nnum){
    var tnumb=0;
    for(let i=0;i<=numb;i++){
        tnumb+=i
    }
    alert(tnumb);
}
natural(Nnum)


function repeat(){
    var num=Number(prompt("Enter a Number To Analyise:"))
    if(num%2==0){
        square(num);
    }
    else{  
        tristar(num); 
    }
    function tristar(num){
        for(let i=0;i<=num;i++){
            var tri="";
            for(let j=1;j<=i;j++){
                tri+="* ";
            }
            console.log(tri);
        }
    }
    function square(num){
        for(let i=0;i<num;i++){
            let sqar="";
            for(let j=0;j<num;j++){
                sqar+="* ";
            }
            console.log("row " + (i+1) + ":" + sqar);
        }
    }
    
    function tables(num){
        for(let i=1;i<=10;i++){
            var multi=i*num;
            console.log(i + "x" + num + "=" + multi);
        }
    }
    tables(num)
    function natural(num){
        var tnum=0;
        for(let i=0;i<=num;i++){
            tnum+=i
        }
        alert("Sum of Natural num:" + tnum);
    }
    natural(num)
    var Srepeat=confirm("do You Want to Calculate another Student's Result?")
    if(Srepeat){
        repeat()
    }
    else{
        alert("Student's Result Calculation Completed");
    }
}
repeat()






