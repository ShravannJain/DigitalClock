function run(){
    let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let second=document.getElementById("second");
let day=document.getElementById("day")

const month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


setInterval(() => {
    let currentTime= new Date();
    day.innerHTML=month[currentTime.getMonth()]
    hour.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
    minute.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    second.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
   
}, 1000);
}