"use strict";
window.addEventListener('DOMContentLoaded', () => {
    const deadline = '2022-06-1'; // End of timer

    function getTimeRemaining(endtime) { 
        const total = Date.parse(endtime) - Date.parse(new Date()), // Calculating full time
              days = Math.floor(total / (1000 * 60 * 60 * 24)), // Calculating days
              hours = Math.floor((total / (1000 * 60 * 60) % 24)), // Calculating hours
              minutes = Math.floor((total / 1000 / 60) % 60), // Calculating minutes
              seconds = Math.floor((total / 1000) % 60); // Calculating seconds

        return { // Massive with units
            'total': total,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();
        
        function checkZero(num) {
            if(num < 10 && num >= 0) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        function updateClock() {
            const total = getTimeRemaining(endtime);

            days.innerHTML = checkZero(total.days);
            hours.innerHTML = checkZero(total.hours);
            minutes.innerHTML = checkZero(total.minutes);
            seconds.innerHTML = checkZero(total.seconds);

            if (total.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    
    setClock('.timecount', deadline);
});