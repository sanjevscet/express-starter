import { AppDataSource } from "../data-source"
import { User } from "../models"

// import {getRepository} from "typeorm"
AppDataSource
export class UserService {
    public static async getAll() {
        const users = await AppDataSource.getRepository(User).find();

        return users;
    }
}