let change = document.querySelector(".haha");
let header = document.querySelector("h1");
setInterval(() => {
    change.style.transform = "rotate(-20deg)";
    setTimeout(() => {
        change.style.transform = "rotate(20deg)";
    }, 1000);
        header.style.color = "red";
    setTimeout(() => {
        header.style.color = "white";
    }, 1000);
}, 2000);

setInterval(() => {

},2000);