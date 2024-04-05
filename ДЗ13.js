var ShortStringChecker = {
    string: "",

    setString: function(value) {
        this.string = value;
    },

    isShort: function() {
        return this.string.length < 10;
    }
};

ShortStringChecker.setString("Hello");
console.log(ShortStringChecker.isShort());

const checkType = (input) => typeof input === 'string';

console.log(checkType("Hello"));
console.log(checkType(42));