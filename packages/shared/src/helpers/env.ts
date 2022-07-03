import dotenv from 'dotenv';
import { IEnv, IDbConfig } from '../interfaces';

dotenv.config();

class EnvClass {
    public static getDBConfig(): IDbConfig {
        const dbHost = process.env.DB_HOST || 'localhost';
        const dbName = process.env.DB_NAME || 'test';
        const dbPass = process.env.DB_PASS || '';
        const dbUser = process.env.DB_USER || 'root';
        const dbPort = process.env.DB_PORT ? +process.env.DB_PORT : 3306;

        return {
            dbConfig: {
                dbHost,
                dbName,
                dbPass,
                dbPort,
                dbUser,
            },
        };
    }

    public static config(): IEnv {
        const port = process.env.PORT ? +process.env.PORT : 8080;
        const dbConfig = this.getDBConfig();

        return {
            port,
            dbConfig: dbConfig.dbConfig,
        };
    }
}

const Env = EnvClass.config();

export { Env };
