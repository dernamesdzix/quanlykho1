const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Environment
// const JWTSecret = process.env.JWT_SECRET;

// Generate token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" })
};

// Register user
    const registerUser = asyncHandler ( async (req, res) => {
    const {name, email, password} = req.body;

// validation
    if(!name || !email || !password) {
        res.status(400)
      throw new Error("Please fill in all required fields");
    }
    if(password.Length < 6 ){
        res.status(400)
      throw new Error("Password must be up to 6 character");
    }
// check if user email already exists
    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400);
        throw new Error("User email already existed")
    }
// encrypt/hash password before saving to DB, must add before register,change & reset password
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(password, salt);

// create new user
    const user = await User.create ({
        name,
        email,
        password, hashedPassword,
    });
    
// generate token
    const token = generateToken(user._id)
// send HTTP cookie token to user
    res.cookie("token", token,{
         path: "/",
         httpOnly: true,
         expires: new Date(Date.now() + 1000 * 86400), //1day
         sameSite: "none",
         secure: true
    });
    
    if (user) {
        const { _id, name, email, phone, bio} = user
        res.status(201).json({
            _id, 
            name, 
            email,
            phone,
            bio,
            token,
        });

    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
});

// log in
const login = asyncHandler(async (req, res) => {
    
    const { email, password } = req.body;
  
    // Validate request
    if (!email || !password) {
      res.status(400);
      throw new Error("Please add email and password");
    }
  
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400);
      throw new Error("Please sign up, user not found");
    }
  
    // Check if password is correct
    const passwordIsCorrect = await bcrypt.compare(password, user.password);
  
    // Generate token
    const token = generateToken(user._id);
  
    // Send HTTP cookie token to user
    if (passwordIsCorrect) {
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400), // 1 day
            sameSite: "none",
            secure: true,
          });
    }
       
    if (user && passwordIsCorrect) {
      const { _id, name, email, photo, phone, bio } = user;
      res.status(200).json({
        _id,
        name,
        email,
        photo,
        phone,
        bio,
        token,
      });
    } else {
        res.status(404).json({
            message: "Invalid email address or password",
        });
    }
    
});
  
// Logout
    const logout = asyncHandler(async (req, res) => {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    });
    return res.status(200).json({ message: "Successfully Logged Out" });
  });

// Get Login Status
const loginStatus = asyncHandler(async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
      return res.json(false);
    }
    // Verify Token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (verified) {
      return res.json(true);
    }
    return res.json(false);
  });





module.exports = {
    registerUser,
    login,
    logout,
    loginStatus,
  
    
};