const counter = document.getElementById("counter");
const btn = document.getElementById("incrementBtn");

btn.addEventListener("click", function () {
    alert(counter.textContent);

    counter.textContent = Number(counter.textContent) + 1;
});