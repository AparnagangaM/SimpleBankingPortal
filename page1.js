var dep= new Map();
var deptotal=0;
var draw = new Map();
var drawtotal=0;
var bal=0.0;
var err = document.getElementById("err");
var dbal= document.getElementById("balance")
var deptable= document.getElementById("deposit");
var withtable= document.getElementById("withdraw");
var time = new Date();
var cdate=(time.getDate()+"/"+time.getMonth()+"/"+time.getUTCFullYear());
var ctime=(time.getHours()+":"+time.getUTCMinutes());
dbal.innerHTML=bal;
function operation() {
    let op = document.getElementById("option").value;
    let amt = Number(document.getElementById("amount").value);
    let dis= document.getElementById("discription").value;
    
    console.log(cdate+"-"+ctime)
    console.log(op)
    console.log(amt)
    console.log(dis);
    console.log("Button Pressed")
    let flag= false;
    if ((op == "Deposit" && (/[0-9]/.test(amt)) && amt>0) ) { 
        deposit(Math.abs(amt), dis);
    } else if ((op == "Withdraw" && (/[0-9]/.test(amt))) && amt>0) {
        withdraw(Math.abs(amt), dis);
    } else if (((/[0-9]/.test(amt))==false) || amt==0)
    {
        err.innerHTML = "*Please enter amount in digits"
    } 
    else{
        err.innerHTML = "*Please Select the transaction"
    }
    document.getElementById("amount").value="Enter amt in ₹";
    document.getElementById("discription").value="-Discription-"
}

function deposit(amt, dis) {
    console.log("Deposit")
    bal+=amt;
    deptotal+=amt;
    dbal.innerHTML=bal
    dep.set(amt,dis);    
    document.getElementById("totalDeposit").innerHTML=deptotal;   
    var row= deptable.insertRow(2);
    console.log(ctime, cdate)
    row.insertCell(0).innerHTML= ctime+"-"+cdate;
    row.insertCell(1).innerHTML="₹"+amt+ "/-";
    row.insertCell(2).innerHTML=dis;

}

function withdraw(amt,dis) {
    console.log("Withdraw")
    if(amt<=bal)
    {
        console.log("Amount< bal")
        bal-=amt;
        drawtotal+=amt;
        dbal.innerHTML=bal;
        draw.set(amt,dis);
        document.getElementById("totalWithdraw").innerHTML=drawtotal;
        var row= withtable.insertRow(2);
        console.log(ctime, cdate)
        row.insertCell(0).innerHTML= ctime+"-"+cdate;
        row.insertCell(1).innerHTML="₹"+amt+ "/-";
        row.insertCell(2).innerHTML=dis;

    }
    else
    {
        err.innerHTML="You Dont Have Sufficient Balance in your account"

    }
    console.log(draw)
}