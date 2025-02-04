// Para crear un servidor
import express from 'express';
// Permite ver por consola las peticiones que van llegando
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';


// Inicializar el objeto en app 
const app = express();

// app utiliza el módulo morgan
app.use(morgan('dev'));
// covertir los requesbosy en json
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);


// Rxportar por defecto
export default app;
