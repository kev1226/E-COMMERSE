import app from "./app.js"
import { connectDB } from "./db.js"

// Conexión a la base de datos
connectDB();

// servidor escuchando en
app.listen(4000)
console.log('Server on port', 4000)

