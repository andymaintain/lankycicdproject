function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var yearinTheFuture = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="Interest: If you deposit <mark>" + principal + "</mark>,<br/>" +
        "At an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/>" +
        "In the Year <mark>" + yearinTheFuture + "</mark>;<br/>"
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validateAmount()
{
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 1;
    if (!biggerThanZero){
        alert("Enter a positive Number");
        document.getElementById("principal").focus;
    }
}