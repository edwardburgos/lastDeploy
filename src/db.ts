import { Sequelize } from "sequelize-typescript";
import config from './lib/config'


const sequelize = new Sequelize (config.db_url, {
    models: [__dirname+'/models'],
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            required: true,
            rejectUnauthorized: false
        }      
    }
});

export {sequelize};
