import { z } from 'zod'

export const registerSchema = z.object({

    username: z.string({
        required_error: "Username is required"
    }),
    email: z.string({
        required_error: "email is required"
    })
        .email({
            required_error: "Invalid email"
        }),
    password: z.string({
        required_error: "Password is required"
    })
        .min(8, {
            required_error: "Password must be at least 8 characters"
        })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required"
    })
        .email({
            required_error: "Invalid email"
        }),
    password: z.string({
        required_error: "Password is required"
    })
        .min(8, {
            required_error: "Password must be at least 8 characters"
        })
})