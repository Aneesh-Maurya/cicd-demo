const express = require('express');
const app = express(); 

app.get('/api/test', (req, res) => {
    res.send('Hello DK! server is running 2');
}
);

app.get('/', (req, res) => {
    res.send('Hello World! server is running 3');
}
);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
