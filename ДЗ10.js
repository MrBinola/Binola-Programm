function checkIfEven(number) {
    return new Promise((resolve, reject) => {
      if (typeof number !== 'number') {
        reject('Пердане число');
      } else {
        if (number % 2 === 0) {
          resolve(`${number} - парне число`);
        } else {
          reject(`${number} - не парне число`);
        }
      }
    });
  }
  
  const numberToCheck = 15;
  
  checkIfEven(numberToCheck)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });

    