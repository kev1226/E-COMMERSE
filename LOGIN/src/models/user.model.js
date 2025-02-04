import mongoose from "mongoose";

// Que es lo que voy a guardar
// Objeto que permite guardar los datos user
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        // Que sea obligatorio
        require: true,
        // obtener STRING espacios
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        // email único
        unique: true
    },
    password: {
        type: String,
        require: true,
    }

},{
    // fecha en que se creo y se actualizo
    timestamps: true
})

// Para interactuar con los métodos
// Guardar modelo, crea colección de usuarios, para consultas
export default mongoose.model('User', userSchema)
