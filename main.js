const minusBtn = document.querySelector(".minus.button");
const plusBtn = document.querySelector(".plus.button");
const flexBar = document.querySelector(".flex-bar");
const valuePercent = document.querySelector(".value");
const volumeBar = document.querySelector(".volume-bar");
const preview = document.querySelector(".preview");

minusBtn.addEventListener("click",function(){
    if (parseInt(flexBar.style.width) > 0){
        flexBar.style.width = parseInt(flexBar.style.width) - 1 + "%";
        valuePercent.innerText = flexBar.style.width;
    }
});

plusBtn.addEventListener("click",function(){
    if (parseInt(flexBar.style.width) < 100){
        flexBar.style.width = parseInt(flexBar.style.width) + 1 + "%";
        valuePercent.innerText = flexBar.style.width;
    }
});

volumeBar.addEventListener("click",function(e){
    const selectedWidth = e.offsetX * 100 / volumeBar.clientWidth;
    flexBar.style.width = Math.round(selectedWidth) + "%";
    valuePercent.innerText = flexBar.style.width;
});

volumeBar.addEventListener("mousemove",function(e){
    const selectedWidth = e.offsetX * 100 / volumeBar.clientWidth;
    preview.style.width = Math.round(selectedWidth) + "%";
    valuePercent.innerText = preview.style.width;
});

volumeBar.addEventListener("mouseleave",function(){
    preview.style.width = "0%";
    valuePercent.innerText = flexBar.style.width;
});

let minusInterval;

minusBtn.addEventListener("mousedown",function(){
    minusInterval = setInterval(function(){
         if (parseInt(flexBar.style.width) > 0){
        flexBar.style.width = parseInt(flexBar.style.width) - 1 + "%";
        valuePercent.innerText = flexBar.style.width;
    } else {
        clearInterval(minusInterval);
    }
    },100)
});

plusBtn.addEventListener("mousedown",function(){
    minusInterval = setInterval(function(){
         if (parseInt(flexBar.style.width) < 100){
        flexBar.style.width = parseInt(flexBar.style.width) + 1 + "%";
        valuePercent.innerText = flexBar.style.width;
    } else {
        clearInterval(minusInterval);
    }
    },100)
});

document.body.addEventListener("mouseup",function(){
    if (minusInterval){
        clearInterval(minusInterval);
    }
});