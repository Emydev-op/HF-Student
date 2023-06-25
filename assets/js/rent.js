// ======== Creating the rent duration count down timer ========

// Set the date we're counting down to
var countDownDate = new Date("April 30, 2024 23:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  let weeks = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
  let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Display the result in the element with idhours="demo"
  document.getElementById("rent-month").innerHTML = months ;
  document.getElementById("rent-week").innerHTML = weeks ;
  document.getElementById("rent-days").innerHTML = days;
  document.getElementById("rent-hour").innerHTML = hours;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// ======== End the rent duration count down timer ========
