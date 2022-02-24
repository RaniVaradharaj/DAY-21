let cbl = document.getElementById("callbackhell");
cbl.classList.add("bg-success");
let i = 10;
function a(x){
   setTimeout(() => {
     if(i >= 1){
        cbl.innerHTML= i;
     }else{
         cbl.innerHTML = "Happy Independence Day";
     }
     i--;
     x(a);
     
   }, 1000);
}
function b(y){
    y(b);
}
a(b);