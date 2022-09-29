let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");


let hrs = 0;
let min = 0;
let sec = 0;
let msec = 0;

let interval;

function stopwatch(){
msec++;
if(msec / 99 == 1){
 sec++;
 msec = 0;
 if(sec / 60 == 1){
  min++;
  sec = 0;
  if(min / 60 == 1){
  hrs++;
  min = 0;
  }
 }
 
 
}


timer.innerHTML = hrs + ":" + min + ":" + sec + ":" + msec;
}


start.addEventListener("click", function(){
interval = setInterval(stopwatch, 10);
start.setAttribute("disabled", true);
stop.removeAttribute("disabled");
reset.removeAttribute("disabled");

});


stop.addEventListener("click", function(){
clearInterval(interval);
stop.setAttribute("disabled", true);
start.removeAttribute("disabled");
reset.removeAttribute("disabled");
});


reset.addEventListener("click", function(){
clearInterval(interval);
timer.innerHTML = "0:0:0:0";
hrs = 0;
min = 0;
sec = 0;
msec = 0;

start.removeAttribute("disabled");
stop.setAttribute("disabled",true);
reset.setAttribute("disabled",true);
})
