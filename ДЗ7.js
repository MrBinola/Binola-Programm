var myObject = {
    name: "Vitalii",
    age: 14,
    city: "UKRAINE"
  };
  
  var json = JSON.stringify(myObject);
  
  console.log(json);

  function areEqual(param1, param2) {
    if (param1 === param2) {
      return true;
    } else {
      return false;
    }
  }
  

  console.log(areEqual(7, 7));
  console.log(areEqual(8, "6"));
  console.log(areEqual("hello", "hello"));