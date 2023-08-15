const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Definir el esquema del usuario
const UsuarioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
},{ collection:'usuarios' });

// Crear el modelo de usuario
const Usuariosuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
