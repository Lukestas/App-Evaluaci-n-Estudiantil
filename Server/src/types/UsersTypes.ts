import { Repository } from "./RepositoryType.js";

export interface User{
    id: string;
    document: number;
    name: string;
    surname: string;
    email: string;
    phone: number; 
}

export interface IUserRepository extends Repository<User>{}

export interface IUserService{
    createUser(user: User): Promise<User>
    findUsers(): Promise<User[]>
    findUserById(id: string): Promise<User | null>
    updateUser(id: string, user: Partial<User>):Promise<User | null>
    deleteUser(id: string): Promise<boolean>
}