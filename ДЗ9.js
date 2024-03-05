function printNumbers(start, end) {
    if (start < 0 || end > 20 || start > end) {
        console.log("Діапазон чисел повинен бути від 0 до 20");
        return;
    }
    
    let current = start;
    const interval = setInterval(() => {
        console.log(current);
        if (current === end) {
            clearInterval(interval);
        }
        current++;
    }, 1000);
}

printNumbers(0, 20);

function displayCurrentTime() {
    var currentTime = new Date();
    console.log('Поточний час: ' + currentTime.toLocaleTimeString());
}

setInterval(displayCurrentTime, 100);


function printName() {
    setTimeout(function() {
        console.log("Моє ім'я: Ваше_Ім'я");
    }, 7000);
}

function printAge(callback) {
    const age = 25;
    callback(age);
}
function ageCallback(age) {
    console.log("Мій вік: " + age + " років");
}

printName();
printAge(ageCallback);