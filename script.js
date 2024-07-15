document.addEventListener("scroll", function() {
    var scrolled = window.scrollY;
    var objeSection = document.querySelector("#obje");
    var maxScroll = document.body.scrollHeight - window.innerHeight;
    var scrollFraction = scrolled / maxScroll;
    var backgroundPositionY = scrollFraction * 100; // Adjust the multiplier as needed
    objeSection.style.backgroundPosition = "0% " + backgroundPositionY + "%";
  });
  