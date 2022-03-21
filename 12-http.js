// http module - to setup a web server -

const http = require("http");

// const server = http.createServer((req, res)=>{
// res.write("welcome to our home page");
// res.end();
// })

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`<h1>Oops!</h1>
  <p>Page not found</p>
  <a href="/">back home</a>
  `);
});

server.listen(5000);
