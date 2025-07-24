import { Request, Response } from "express";
import { IUser, User } from "../models/UserModel.js"


export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener los usuarios" })
  }
}

export const createUser = async (req: Request, res: Response) => {
  const { iddocument, name, email } = req.body;
  try {
    
    if(!iddocument){
      return res.status(500).json("Falta un numero de identificador");
    }
      const newUser: IUser = new User({ iddocument, name, email });
    await newUser.save();
    res.status(201).json(newUser)
  } catch (err) {
    res.status(500).json({ error: "No se pudo crear el usuario", detail: err });
  }
}
