import { IDbConfig } from './IDbConfig';
export interface IEnv extends IDbConfig {
    port: number;
}
