import Sequelize from "sequelize";

export const sequalize = new Sequelize(
    'postgres',
    'postgres',
    '123',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 3000,
            idle: 10000,
        },
        loggin:false
    }

)