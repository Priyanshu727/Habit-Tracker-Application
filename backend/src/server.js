const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('../config/db');
const authRoutes = require('../routes/authRoutes');
const habitRoutes = require('../routes/habitRouters');
const adminRoutes = require('../routes/adminRoutes');
dotenv.config();
connectDB();

const corsOptions = {
    origin: 'http://localhost:5173', // specify the exact origin
    credentials: true, // allow credentials
};



const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello World!!!!!");
});


app.listen(PORT, (err) => {
    if (err) {
        console.log(err, 'Server Failed to start');
    } else {
        console.log(`Listening on port: http://localhost:${PORT}`);
    }
});