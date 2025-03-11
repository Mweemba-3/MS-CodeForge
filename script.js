function comingSoon() {
    alert("Thank you for choosing MS CodeForge. This feature is coming soon. Stay tuned!");
}

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("emailInput").value;
    document.getElementById("subscriptionMessage").innerText = `Thank you, ${email}, for subscribing!`;
});

window.onscroll = function() {
    document.getElementById("backToTop").style.display = window.scrollY > 300 ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}