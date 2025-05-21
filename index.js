// api/index.js

require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const serverless = require('serverless-http'); // 👈 necesario para Vercel
const cors = require('cors');
const userRoutes = require('./routes/usuariosRoutes'); // ajusta ruta relativa

const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL || '*';
app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());

app.use('/', userRoutes);

// 👇 Exporta como función para Vercel
module.exports = app;
module.exports.handler = serverless(app);
