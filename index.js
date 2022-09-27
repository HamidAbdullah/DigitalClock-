function displaytime() {

    let displaytime = new Date();
    let hrs = displaytime.getHours();
    let min = displaytime.getMinutes();
    let sec = displaytime.getSeconds();
    let session = document.getElementById('session');

    if (hrs >= 12) {
        session.innerHTML = 'PM';
    }

    else {
        session.innerHTML = 'AM';
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('mintues').innerHTML = min;
    document.getElementById('Second').innerHTML = sec;
    
}
setInterval(displaytime);