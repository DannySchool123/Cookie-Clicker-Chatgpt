let cookieCount = 0;
let upgradeCost = 10;
let cookiesPerClick = 1;

document.getElementById("cookie").addEventListener("click", function() {
    cookieCount += cookiesPerClick;
    updateCounter();
});

function updateCounter() {
    document.getElementById("counter").innerText = `Cookies: ${cookieCount}`;
}

function buyUpgrade() {
    if (cookieCount >= upgradeCost) {
        cookieCount -= upgradeCost;
        cookiesPerClick++;
        upgradeCost *= 2; // Increase cost of next upgrade
        updateCounter();
    } else {
        alert("Not enough cookies!");
    }
}

updateCounter();
