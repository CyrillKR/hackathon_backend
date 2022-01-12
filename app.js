require('dotenv').config();
require('express-async-errors');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

const express = require('express');
const app = express();

const userRoute = require('./routes/userRoute');
const routeRoute = require('./routes/routeRoute');

const auth = require('./middleware/authentication');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//Middleware
app.set('trust proxy', 1);
app.use(rateLimiter(
    {
        windowMs: 15 * 60 * 1000,
        max: 100
    }
));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(express.json());

// Routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/route', auth, routeRoute);

// Error middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = +process.env.PORT;

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (err) {
        console.log(err);
    }
};

start();