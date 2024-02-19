// 1. Повторити flex
// Глава 11. Flexbox   https://metanit.com/web/html5/
// Что такое Flexbox. Flex Container
// Направление flex-direction
// flex-wrap
// flex-flow. Порядок элементов
// Выравнивание элементов. justify-content
// Выравнивание элементов. align-items и align-self           !!!ВИКОНАНО!!!

                                                          


function createCounter() {
    let count = 0; // Змінна, яку ми хочемо заховати від зовнішнього доступу
  
    // Повертаємо об'єкт з методами, які можуть взаємодіяти з цією змінною
    return {
      increment: function() {
        count++;
      },
      decrement: function() {
        count--;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  // Створюємо екземпляр об'єкта замикання
  let counter = createCounter();
  
  // Зміна count захищена і не доступна напряму
  console.log(counter.count); // Результат буде undefined
  
  // Однак ми можемо маніпулювати count за допомогою методів, які ми створили
  counter.increment();
  counter.increment();
  counter.decrement();
  
  // Отримання значення count за допомогою методу getCount
  console.log(counter.getCount()); // Результат буде 1                      !!!ВИКОНАНО!!!



let number = 10;

// Інкремент - збільшення на 1
number++; // або number = number + 1; або number += 1;

console.log(number); // Виведе 11

// Декремент - зменшення на 1
number--; // або number = number - 1; або number -= 1;

console.log(number); // Виведе 10                              


//Використання операторів ++ та -- залежить від того, де в коді ви бажаєте виконати збільшення або зменшення значення змінної. Ці оператори можуть бути використані як перед змінною (prefix increment/decrement) так і після (postfix increment/decrement), що може впливати на їхню поведінку в коді.       !!!ВИКОНАНО!!!



let remainder = 100 % 7;
console.log(remainder); // Виведе 2

//Отримане значення 2 - це остача від ділення 100 на 7.     !!!ВИКОНАНО!!!!
