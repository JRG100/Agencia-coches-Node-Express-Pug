import Sequelize from 'sequelize';
import dotenv from 'dotenv/config';

console.log(process.env.DB_HOST);

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: '3308',
    dialect: 'mysql',
    define: {
        timestamps: false,
     
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
    });
   
    export const DB_PORT = process.env.DB_PORT || 3308

export default db;