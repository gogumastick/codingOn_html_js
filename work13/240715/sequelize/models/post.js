const {DataTypes} = require('sequelize');

const post=(seq) => {
    return seq.define('post',{
        // 컬럼정의
        id: {
            type: DataTypes.INTEGER,
            allowNull : false, //not null
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type: DataTypes.STRING(30),
            allowNull : false, //not null
        },
        content: DataTypes.TEXT('medium'), // 하나만 입력하는 경우 
    });
};

module.exports = post;
