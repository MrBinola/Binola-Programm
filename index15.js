function checkName() {
    var inputValue = document.getElementById('searchInput').value;
  
    if (inputValue.toLowerCase() === 'мирослав' || inputValue.toLowerCase() === 'віталій') {
      alert('True');
    } else {

      alert('False');
    }
  }