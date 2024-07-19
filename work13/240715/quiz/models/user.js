const {DataTypes} = require('sequelize');

const user=(seq) => {
    return seq.define('user_kdt',{
        // 컬럼정의
        id: {
            type: DataTypes.INTEGER,
            allowNull : false, //not null
            primaryKey: true,
            autoIncrement: true,
        },
        userid:{
            type: DataTypes.STRING(20),
            allowNull : false, //not null
        },
        pw:{
            type: DataTypes.STRING(10),
            allowNull : false, //not null
        },
        username:{
            type: DataTypes.STRING(20),
            allowNull : false, //not null
        },
    });
};

module.exports = user;
