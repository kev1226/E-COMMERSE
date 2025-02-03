import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import {createAccessToken} from "../libs/jwt.js";

export const register = async (req, res) => {
    const { email, password, username } = req.body
    try {
        // encriptando contraseña
        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });

        // usando token
        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id })

        res.cookie('token', token)

        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAT: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        })

    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body
    try {

        const UserFound = await User.findOne({email})
        if (!UserFound) return res.status(400).json({message: 
            "User not fount"})

        // comparando contraseña
        const isMatch = await bcrypt.compare(password, UserFound.password)
        
        if (!isMatch) return register.status(400).json({
            message: "Incorrect Password"
        })

        // usando token
        const token = await createAccessToken({ id: UserFound._id })

        res.cookie('token', token)

        res.json({
            id: UserFound._id,
            username: UserFound.username,
            email: UserFound.email,
            createdAT: UserFound.createdAt,
            updatedAt: UserFound.updatedAt,
        })

    } catch (error) {
        res.status(500).json({message: error.message})
    }
};


