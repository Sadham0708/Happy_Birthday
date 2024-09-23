


// Set the birthdate
const birthdate = new Date(1999, 1, 8);

// Variables to control timer and heart state
let timerInterval;
let isTimerRunning = true;
let isHeartBroken = false;

// Calculate the time spent on earth
function calculateTimeSpentOnEarth() {
    const now = new Date();
    
    let years = now.getFullYear() - birthdate.getFullYear();
    let months = now.getMonth() - birthdate.getMonth();
    let days = now.getDate() - birthdate.getDate();
    
    // Adjust if the current day is before the birthdate
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months = (months + 12) % 12;
    }
    
    if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days = lastMonth.getDate() - birthdate.getDate() + now.getDate();
    }

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update the countdown timer
    document.getElementById("years").innerHTML = years;
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

// Start the countdown timer
function startTimer() {
    calculateTimeSpentOnEarth(); // Initial calculation
    timerInterval = setInterval(calculateTimeSpentOnEarth, 1000);
}

// Stop the countdown timer
function stopTimer() {
    clearInterval(timerInterval);
}

// Initial start of the timer
startTimer();


// Set the known date (since 2005)
const knownDate = new Date(2005, 0, 1); // Adjust the month if it's different

// Function to calculate time since you've known her
function calculateTimeKnown() {
    const now = new Date();
    
    let years = now.getFullYear() - knownDate.getFullYear();
    let months = now.getMonth() - knownDate.getMonth();
    let days = now.getDate() - knownDate.getDate();
    
    // Adjust for months and days if needed
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months = (months + 12) % 12;
    }
    
    if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days = lastMonth.getDate() - knownDate.getDate() + now.getDate();
    }

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update the timer in the HTML
    document.getElementById("knownYears").innerHTML = years;
    document.getElementById("knownMonths").innerHTML = months;
    document.getElementById("knownDays").innerHTML = days;
    document.getElementById("knownHours").innerHTML = hours;
    document.getElementById("knownMinutes").innerHTML = minutes;
    document.getElementById("knownSeconds").innerHTML = seconds;
}

// Start the countdown timer for "Time Known"
function startKnownTimer() {
    calculateTimeKnown(); // Initial calculation
    setInterval(calculateTimeKnown, 1000);
}

// Start the "Time Known" timer when the page loads
startKnownTimer();


function toggleNav() {
    const sideNav = document.getElementById('sideNav');
    sideNav.classList.toggle('active'); // Toggle active class
}

// Heart button functionality
const heartButton = document.getElementById("heartButton");
const countdown = document.querySelector('.countdown');


// Add the heartbeat class initially
heartButton.classList.add('heartbeat');

heartButton.addEventListener("click", function() {
    if (isHeartBroken) {
        // Switch to normal heart and resume the timer
        heartButton.innerHTML = '❤️';
        isHeartBroken = false;
        isTimerRunning = true;
        startTimer(); // Resume timer

        // Add the heartbeat class
        heartButton.classList.add('heartbeat');
        countdown.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; // Or any color of your choice

    } else {
        // Switch to broken heart and stop the timer
        heartButton.innerHTML = '💔';
        isHeartBroken = true;
        isTimerRunning = false;
        stopTimer(); // Pause timer

        // Remove the heartbeat class
        heartButton.classList.remove('heartbeat');
        countdown.style.backgroundColor = '#ffe4e1'; // Or any color of your choice

    }
});

// Send wish button functionality
document.addEventListener('DOMContentLoaded', function() {
    const sendWishBtn = document.getElementById('send-wish-btn');
    const closePopupBtn = document.getElementById('close-popup-btn');
    
    // Check if the elements exist before adding the event listeners
    if (sendWishBtn && closePopupBtn) {
        sendWishBtn.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('popup-container').style.display = 'block';
        });

        closePopupBtn.addEventListener('click', function() {
            document.getElementById('popup-container').style.display = 'none';
        });
    } else {
        console.error("Button(s) not found in the DOM.");
    }
});
