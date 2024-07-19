const {DataTypes} =require('sequelize');


const userModel = ( sequelize ) => {
    const user = sequelize.define(
        'user_mvc',
        {
            id: {
                type : DataTypes.INTEGER,
                allowNull : false, //not Null
                primaryKey : true,
                autoIncrement : true,
            },
            userid: {
                type : DataTypes.STRING(20),
                allowNull : false, //not Null
            },
            name:{
                type : DataTypes.STRING(10),
                allowNull : false, //not Null
            },
            pw:{
                type : DataTypes.STRING(10),
                allowNull : false, //not Null
            }
        },{
            tableName: 'user_mvc',
            freezeTableName: true,
            timestamps: false,  // true로 하면 DB테이블에 createAt, updateAt 자동 생성
        }
    );
    return user;
};

module.exports = userModel