const http = require('http');

http.get('http://localhost:3001/api/test', (res) => {
  if (res.statusCode !== 200) {
    throw new Error("API Test Failed ❌");
  }
  console.log("API Test Passed ✅");
}).on('error', (err) => {
  throw err;
});