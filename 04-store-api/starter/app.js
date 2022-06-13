require('dotenv').config();
// async errors

const express = require('express');
const app = express();

const connectDB = require("./db/connect");  // returns promise
const productsRouter = require("./routes/products");

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//middleware
// not using in this project - only for practice so I remember to use it in the other projects
app.use(express.json());

// routes

app.get('/', (req, res) => {
    res.send('<h1>STORE API</h1><a href="/api/v1/products">Products route</a>')
});

app.use('/api/v1/products', productsRouter)

//products routes



app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
       // connectDB
       await connectDB(process.env.MONGO_URI);
       app.listen(port, console.log(`Server is listening on port ${port} ...`)) 
    } catch (error) {
        console.log(error);
    }
};

start();


