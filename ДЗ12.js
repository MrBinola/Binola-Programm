const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/data', (req, res) => {
    const { FOL1, FOL2, FOL3 } = req.body;

    const jsonData = JSON.stringify({ FOL1, FOL2, FOL3 });

    res.json(jsonData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`WeStEr WiLdEr ${PORT}`);
});
 

let a = 'Hello'

let res = a[a.length - 1 ] + a + a[0]

for(let i = 0; i <res.length; i++){
    console.log(res[i])
}

let myString = "привіт світ";

if (myString.length > 8 && myString.length < 20) {
    console.log("+");
} else {
    console.log("-");
}

