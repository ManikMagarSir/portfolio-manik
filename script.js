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

let slider = document.getElementById('slider');
let value = document.getElementById('value');
let value1 = document.getElementById('value1');
let slider1 = document.getElementById('slider1');

slider.addEventListener('input', () => {
  value.textContent = slider.value;
  if (value.textContent < 30) {
    value.textContent = "🙄";
  }
    else if (value.textContent < 70) {
    value.textContent = "😃";
    }
    else {
    value.textContent = "🤩";
    }
});

slider1.addEventListener('input', () => {
  value1.textContent = slider1.value;
    if (value1.textContent < 30) {
    value1.textContent = "😞";
    }
    else if (value1.textContent < 70) {
    value1.textContent = "😐";
    }
    else {
    value1.textContent = "😁";
    }
});