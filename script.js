let str=document.querySelector(".display").innerText;
function doThis(a) {
  if(str==="0") str=String(a);
  else
  str+=String(a);
  document.querySelector(".display").innerText=str;
}
function calculate() {
   let exp= str.replace(/x/g,'*');
   try {
     str=eval(exp);
   } catch(e) {
    str = "lodu hai kya bhai";
   }
   document.querySelector(".display").innerText=str;
}
function clearScreen() {
  str=0;
  document.querySelector(".display").innerText=str;
}