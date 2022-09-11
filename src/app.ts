// Modules

import express, { Application } from "express";
import path from "path";
import morgan from 'morgan'
import cors from 'cors'

// Routes
import authRoutes from './routes/auth.routes'

import "./firebase";

// Iniciadores

const app: Application = express();

// Settings
app.set("port", process.env.NODE_PORT || 3500);
app.set("views", path.join("src", "views"));

// Middelwares
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))

app.use('/auth', authRoutes)

export default app;
