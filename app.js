const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// import routes
const categoryRoutes = require("./routes/category")
const newsRoutes = require("./routes/news")

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log('DB Connected'));

    // middlewares
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(cors());

    // routes middleware

app.use("/api", categoryRoutes)
app.use("/api", newsRoutes)



const port = process.env.PORT || 8000;

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
