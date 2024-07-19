const { DataTypes } = require('sequelize');

const profile =(seq)=>{

    return seq.define('profile', {
        
        username: {
            type: DataTypes.STRING(31),
            allowNull: false,
            unique: true, // unique: true하면 같은 값이 안됨
        },
        age: {
            type: DataTypes.INTEGER(127),
            validate:{
                min: 0,
            },
            
        },
        email:{
            type: DataTypes.STRING,
            unique: true,
        },
        // memberId:{
        //     type: DataTypes, INTEGER,
        //     references: {
        //         model:'members',
        //         key: 'id',
        //     },
        //     onDelete :'CASCADE',
        // },
        
    });

};

module.exports = profile;