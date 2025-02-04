  import Category from "../models/category.model.js"

export const getCategories = async (req, res) => {
    const categories = await Category.find({
        user: req.user.id
    }).populate('user')
    res.json(categories)
}

export const createCategory = async (req, res) => {
    const { title, description, date } = req.body
    const newCategory = new Category({
        title,
        description,
        date,
        user: req.user.id
    })
    const saveCategory = await newCategory.save()

    res.json(saveCategory)

}

export const getCategory = async (req, res) => {
    const category = await Category.findById(req.params.id).populate('user')
    if (!category) return res.status(404).json({ message: "GET category no found" })
    res.json(category)
}

export const deleteCategory = async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id)
    if (!category) return res.status(404).json({ message: "DELETE category no found" })
    return res.sendStatus(204)
}

export const updateCategory = async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!category) return res.status(404).json({ message: "UPDATE category no found" })
    res.json(category)
}

