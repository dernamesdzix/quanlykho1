const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema ({
    name: {
        type: String,
        required: [true, "please add a name"]

    },
    email: {
        type: String,
        required: [true, "please add an email"],
        unique: true,
        trim: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please add a valid email"
        ],
    },
    password: {
        type: String,
        required: [true, "please add a password"],
        minLength: [6, "Password must be up to 6 characters"],
        // maxLength: [23, "Password must not be more than 22 characters"],

    },
    photo: {
        type: String,
        required: [true, "please add a photo"],
        default: "default.jpg"
        
    },
    phone: {
        type: String,
        default: "000"
        
    },
    bio: {
        type: String,
        maxLength: [250, "Bio must not be more than 250 characters"],
        default: "bio"
        
    },

},  
// {
//     timestamps: true,
// }
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});


const User = mongoose.model("User", UserSchema);
module.exports = User;