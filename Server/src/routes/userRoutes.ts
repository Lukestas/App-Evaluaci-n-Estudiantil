import { Router } from "express";
import { IUserRepository, IUserService, User } from "../types/UsersTypes.js";
import { UserService } from "../services/userServices.js";
import { UserRepository } from "../repositories/userRepositories.js";
const userRepository: IUserRepository= new UserRepository()
const userService: IUserService= new UserService(userRepository)

const router= Router();

router.get("/users", async(req,res)=>{
    const users= await userService.findUsers()
    res.json(users)
})

router.get("/users/:id", async(req,res)=>{
    const users=await userService.findUserById(req.params.id)
    res.json(users)
})

router.post("/users",async(req,res)=>{
    const newUser:User=req.body;
    const result= await userService.createUser(newUser)
    res.json(result)
})

router.put("/users/:id",async (req,res)=>{
    const users= await userService.updateUser(req.params.id,req.body)
})

router.delete("/users/:id", async (req, res)=>{
    const users= await userService.deleteUser(req.params.id)
    res.json(users)
})


export default router;