const express = require('express');
const app = express(); 

app.get('/api/test', (req, res) => {
    res.send('Hello World! server is running 1');
}
);

app.get('/api/test1', (req, res) => {
    res.send('Hello World! server is running 3');
}
);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});