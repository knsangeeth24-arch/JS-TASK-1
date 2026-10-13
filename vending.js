function menu(){
    alert(
        "0.Bingo" +"\n" +
        "1.Kit kat"+"\n"+
        "2.Milksheak" +"\n"+
        "3.Cup cake" +"\n"+
        "4.Diary milk"
    );

}
console.log(menu())


function repeat(){
    console.log("0.Bingo");
    console.log("1.Kit kat");
    console.log("2.Milksheak");
    console.log("3.Cup cake");
    console.log("4.Diary milk");

    var iteamname = ["Bingo","Kit kat","Milksheak","Cup cake","Diary milk"];
    var price = [20,40,50,30,100];

    var iteam = Number(prompt("Enter item number(1-4)"));
    var money = Number(prompt("Enter your amount"));

    if(money>0){
        alert("your iteams " + iteamname[iteam])
        balance(money);
    }
    else{
        alert(" Chosen wrong iteams");
    }
    function balance(money){
        if(money>=price[iteam]){
            var balancemoney = money-price[iteam]
            alert("Your balance is:" + balancemoney);
        }else{
            alert("insufficient balance")
        }
    }
    var nextime = confirm("do you want to buy again")
    if(nextime){
        repeat()
    }
    else{
        alert("iteam delevared succssfully")
    }

}
repeat()
