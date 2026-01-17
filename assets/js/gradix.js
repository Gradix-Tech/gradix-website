
        const launchDate = new Date("Jan 19, 2026 00:00:00").getTime();

        const countdownFunction = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = days < 10 ? '0' + days : days;
            document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
            document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
            document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;

            if (distance < 0) {
                clearInterval(countdownFunction);
                document.querySelector(".countdown").innerHTML = "<h2>We are Live!</h2>";
            }
        }, 1000);

  
