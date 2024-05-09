function filterSelection(category) {
    var cards = document.getElementsByClassName("event-card");
    
    if (category === "all") {
      for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = "inline-block";
      }
    } else {
      for (var i = 0; i < cards.length; i++) {
        var cardCategory = cards[i].classList;
        if (cardCategory.contains(category)) {
          cards[i].style.display = "inline-block";
        } else {
          cards[i].style.display = "none";
        }
      }
    }

    // Add or remove active class for category filter buttons
    var filterButtons = document.getElementsByClassName("filter-button");
    for (var i = 0; i < filterButtons.length; i++) {
      filterButtons[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");
  }


  // Set the event date and time
  var eventDate1 = new Date('July 8, 2023 12:00:00').getTime();
  var eventDate2 = new Date('July 10, 2023 14:30:00').getTime();

  // Update the timer every second
  var timer1 = setInterval(function() {
    updateTimer(eventDate1, 'timer1');
  }, 1000);

  var timer2 = setInterval(function() {
    updateTimer(eventDate2, 'timer2');
  }, 1000);

  function updateTimer(eventDate, timerId) {
    var now = new Date().getTime();
    var distance = eventDate - now;

    // Calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the timer
    var timerElement = document.getElementById(timerId);
    if (distance < 0) {
      timerElement.innerHTML = "Event started";
    } else {
      timerElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }
  }

  function register() {
    // Handle registration logic here
  }