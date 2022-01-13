require('dotenv').config();
require('express-async-errors');
const connectDB = require('./db/connect');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const express = require("express");
const app = express();

const userRoute = require("./routes/userRoute");
const routeRoute = require("./routes/routeRoute");

const auth = require("./middleware/authentication");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const { sequelize } = require("./database/database");
const User = require("./database/models");
const req = require('express/lib/request');

//Middleware
app.set("trust proxy", 1);
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000,
        max: 100,
    })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/route", auth, routeRoute);

// Error middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;
console.log("port variable", port);
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });

    } catch (err) {
        console.log(err);
    }
};

start();
