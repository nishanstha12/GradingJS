var res = document.getElementById("computer");


function total(){
var a =  parseInt(document.getElementById('eng').value);
var b = parseInt(document.getElementById('maths').value);
var c = parseInt(document.getElementById('nepali').value);
var d = parseInt(document.getElementById('computer').value);
var obtain = a+b+c+d;

if( a > 100|| b > 100||  c > 100|| d> 100){
  document.getElementById('nishan').innerText= 'Please Enter the marks less than or equal to 100.';
}
else
  {
    document.getElementById('obtained').innerText=obtain;
}
}
function per(){
  var a =  parseInt(document.getElementById('eng').value);
  var b = parseInt(document.getElementById('maths').value);
  var c = parseInt(document.getElementById('nepali').value);
  var d = parseInt(document.getElementById('computer').value);
  var obtain = a+b+c+d;

  var p = obtain/400*100;
  document.getElementById('percent').innerText=p;

}
function grade(){
  var a =  parseInt(document.getElementById('eng').value);
  var b = parseInt(document.getElementById('maths').value);
  var c = parseInt(document.getElementById('nepali').value);
  var d = parseInt(document.getElementById('computer').value);
  var obtain = a+b+c+d;
 var g = obtain/400*100;
  if (g>=90){
       
    document.getElementById('grades').innerText='A+';
}
else if(g>=80){
    document.getElementById('grades').innerText='A';
}
else if (g>=60){
    document.getElementById('grades').innerText='B';
}
else if (g>=40){
    document.getElementById('grades').innerText='C+';
}
else{

    document.getElementById('grades').innerText='*';

}
}


 









