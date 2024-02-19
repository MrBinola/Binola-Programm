function displayCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var formattedTime = hours + ":" + minutes + ":" + seconds;
    console.log("Поточний час: " + formattedTime);
}

displayCurrentTime();


function toUpperCaseAndDisplay(inputString) {
    var uppercasedString = inputString.toUpperCase();
    console.log("Рядок у верхньому регістрі: " + uppercasedString);
}

toUpperCaseAndDisplay("I'm MrBinola");

