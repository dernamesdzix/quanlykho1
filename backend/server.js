const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const errorHandler = require("./middleWare/errorMiddleware");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const path = require("path");





const app = express();

// middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use( cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );
  
app.use("/uploads", express.static(path.join(__dirname, "uploads")));



// routes middleware
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);


// routes
app.get("/", (req, res) => {
    res.send("Home page!");
});

// error Middleware
app.use(errorHandler);

//connect DB
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`)
            })
        })
        .catch((err) => console.log(err));
       

