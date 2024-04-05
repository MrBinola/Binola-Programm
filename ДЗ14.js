function getNamePromise() {
    return new Promise((resolve, reject) => {
      const name = 'John';
      
      resolve(name);
    });
  }
  
  getNamePromise()
    .then(name => {
      console.log('Ім\'я:', name);
    })
    .catch(error => {
      console.error('Сталася помилка:', error);
    });

    const myObject = {
        name: 'John',
        age: 30,
        city: 'New York'
      };
      
      const jsonString = JSON.stringify(myObject);
      
      console.log(jsonString);


      var множина = new Set();


множина.add("3");
множина.add("4");
множина.add("5");
множина.add("6");
множина.add("7");

console.log(множина);

var масивСтрок = ["яблуко", "банан", "апельсин", "вишня", "груша"];

масивСтрок.sort();

console.log(масивСтрок);
