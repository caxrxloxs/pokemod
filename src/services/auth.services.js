import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import jwt from 'jsonwebtoken';

const saltNumber = 10;

export const AuthService = {

  async register({ username, email, password }) {
    const hashed = await bcrypt.hash(password, saltNumber) // al recibir la password la encritasmos
    await User.create({ username, email, password: hashed })
    return;
  },

  async login({email, password}) {
    
    const user = await  User.findOne({ email });
    console.log(user);
    if (!user) return null;
    const compare = bcrypt.compare(password, user.password);
   
    if (!compare) return null;

    const token = jwt.sign({
      sub: user._id, username: user.username // contenido
    },
      "JWT_XXX_2025", // SECRETO llave privada para poder firmar
      {
        expiresIn: '2h'
      })


    return {
      token,
      user: {
        id: user._id,
        username: user.username
      }
    };
  },

};