const counter = document.getElementById("counter");
const btn = document.getElementById("incButton");

btn.addEventListener("click", function () {
    alert(counter.textContent);

    counter.textContent = Number(counter.textContent) + 1;
});