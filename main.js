let counter = 0
function increment() {
    counter=counter+1;
   document.getElementById('inc').innerHTML=counter;
 }
 function reset()
 {
    counter=0;
    document.getElementById('inc').innerHTML=counter;
 }