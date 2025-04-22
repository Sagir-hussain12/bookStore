import User from "../model/user.model.js";

import bcrypt from "bcryptjs";


export const signup= async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const existingUser = await User.find({ email });
        if (existingUser.length) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            fullname,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(201).json({ message: "User created successfully",user:{
            _id:newUser._id,
            fullname:newUser.fullname,
            email:newUser.email,
        } });
    } catch (error) {
        res.status(500).json({ message: "Internal error" });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }); 
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!user || !isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        else{
            return res.status(200).json({ message: "Login successful",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email,
            }  });
        }
    }
     catch (error) {
        res.status(500).json({ message: "Internal error"});
    }
}

