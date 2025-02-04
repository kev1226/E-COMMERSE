import { z } from 'zod'

export const createCategorySchema = z.object({
    title: z.string({
        required_error: "Title es required"
    }),

    description: z.string({
        required_error: "Description must be a string"
    }),

    date: z.string().datetime().optional()
})