function entry()
{
  var p1=prompt("Please Enter your Lady Name");
  document.getElementById("demo").innerHTML="Your Lady's Name is " + p1;
}
function enterymen()
{
  var p2=prompt("Please Enter Your Man Name");
  document.getElementById("dem").innerHTML="Your Man Name is " + p2;
}
var percent=(Math.floor(Math.random()*100))+1;
document.getElementById("love").innerHTML=percent;
if(percent>=0 && percent<=25)
{
  document.getElementById("category").innerHTML="KATEGA"
}
else if (percent>=26 && percent<=49)
{
document.getElementById("category").innerHTML="Just Friends";
}
else if (percent==50) {
  document.getElementById("category").innerHTML="Kuch bhii ho skta hai";
}
else if (percent>=51 && percent<=70) {
  document.getElementById("category").innerHTML="Give a toast to your Friendship";
}
else if (percent>=71 && percent<=75) {
  document.getElementById("category").innerHTML="Start spending time with her/him";
}
else if (percent>=76 && percent<=80) {
  document.getElementById("category").innerHTML="Plan a Movie";
}
else if (percent>=81 && percent<=85) {
  document.getElementById("category").innerHTML="Go for late night calls";
}
else if (percent>=86 && 92) {
  document.getElementById("category").innerHTML="Go on Date all alone";
}
else if (percent>=93 && percent<=99) {
  document.getElementById("category").innerHTML="Look for an occasion like birthday or any other day and PROPOSE HER";
}
else if (percent==100) {
document.getElementById("category").innerHTML="Right Now go and PROPOSE HER/HIM";
}
