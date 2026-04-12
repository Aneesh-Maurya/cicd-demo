const http = require('http');

http.get('http://localhost:3000/api/test', (res) => {
  if (res.statusCode !== 200) {
    throw new Error("API Test Failed ❌");
  }
  console.log("API Test Passed1 ✅",res);
}).on('error', (err) => {
  throw err;
});

http.get('http://localhost:3000/', (res) => {
  if (res.statusCode !== 200) {
    throw new Error("API Test Failed ❌");
  }
  console.log("API Test Passed2 ✅",res);
}).on('error', (err) => {
  throw err;
});
