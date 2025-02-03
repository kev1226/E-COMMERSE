import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"


export const register = async (req, res) => {
    const { email, password, username } = req.body
    try {

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });

        const userSaved = await newUser.save();

        jwt.sign(
            {
                id: userSaved._id
            }, 
            "secret123",
            {
                expiresIn: "1d",
            },
            
        )

        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAT: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        })

    } catch (error) {
        console.log("Error saving")
    }


};

export const login = (req, res) => res.send("login");
