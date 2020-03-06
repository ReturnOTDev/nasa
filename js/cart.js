const rocketCount = document.getElementById("rocket_count");
const total = document.getElementById("total");
const addBtn = document.querySelector("#add_btn");
const delBtn = document.querySelector("#del_btn");
const checkoutBtn = document.getElementById("checkout_btn");
let count = 1;

addBtn.addEventListener("click", () => {
    if (count < 10) {
        count++;
        rocketCount.innerText = count;
        total.innerText = "$" + 1200000 * count;
    }
});

delBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        rocketCount.innerText = count;
        total.innerText = "$" + 1200000 * count;
    }
});

checkoutBtn.addEventListener("click", () => {
    alert("Coming Soon :)");
});
