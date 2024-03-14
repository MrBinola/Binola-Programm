function delayPrint(number, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(number);
        resolve();
      }, delay);
    });
  }
  
  Promise.all([
    delayPrint(998, 5000),
    delayPrint(999, 5000),
    delayPrint(1000, 5000)
  ]).then(() => {
    console.log('ЧТО И ТРЕБОВАЛОСЬ ДОКАЗАТЬ!!!');
  });


  