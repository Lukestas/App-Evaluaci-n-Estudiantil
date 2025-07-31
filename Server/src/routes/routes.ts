import { Router } from "express";
import { IUserRepository, IUserService, User } from "../types/UsersTypes.js";
import { UserRepository } from "../repositories/userRepositories.js";
import { UserService } from "../services/userServices.js";

const router = Router()

const userRepository: IUserRepository = new UserRepository()
const userService: IUserService= new UserService(userRepository)

router.get("/health", (req, res) => {
    res.send("API FUNCIONANDO")
})

router.get("/users", async(req, res)=>{
    const users= await userService.findUsers()
    res.json(users)
})

router.post("/users", async(req,res)=>{
    const newUser:User=req.body;
    const result= await userService.createUser(newUser)
    res.json(result)
})

export default router;