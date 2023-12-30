const clock = document.getElementById('clock');

setInterval(() => {
    const date = new Date();
    // console.log(date.toLocaleTimeString());

    clock.innerHTML = date.toLocaleTimeString();

}, 1000);