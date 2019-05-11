function myFunction() {
  n1=document.getElementById("N1").value;
  n2=document.getElementById("N2").value;
  var x=Number(n1)+Number(n2);
  document.getElementById("resul").innerHTML = x.toString();

}
