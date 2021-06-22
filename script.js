function compute()
{
   p=document.getElementById("principal").value;
   if(isNaN(p)||p<1){
      alert("Enter a positive Number!");
      return p;
   }
   n=document.getElementById("years").value;
   r=document.getElementById("rate").value;
   amount=(p*n*r/100);
   year= new Date().getFullYear()+parseInt(n); 
   document.getElementById("result").innerHTML="If you deposit <mark>"+p+"</mark>,\<br\>at an interest rate of <mark>"+r+"%</mark>,\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>.\<br\>"

  
}
function updateRate()
{
 var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
 


        
