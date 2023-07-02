function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Agrega un 0 inicial si los minutos o segundos son menores a 10
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = time;

    setTimeout(updateClock, 1000);
}

function updateDonationAmount(amount) {
    document.getElementById("donation-amount").innerHTML = "$" + amount;
}

updateClock();

document.getElementById("donation-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var amount = document.getElementsByName("amount")[0].value;
    updateDonationAmount(amount);
    document.getElementById("donation-form").submit();
});



