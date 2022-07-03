import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "pdm",
    synchronize: false,
    logging: true,
    entities: [__dirname+ '/models/**/*.js'],
    migrations: [__dirname + '/migrations/**/*.js'],
    subscribers: [],
})