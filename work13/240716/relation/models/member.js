const { DataTypes } = require('sequelize');
const member =(seq)=>{

    return seq.define('member', {
        
        userId: {
            type: DataTypes.STRING(31),
            allowNull: false,
            unique: true, // unique: true하면 같은 값이 안됨
        },
        password: {
            type: DataTypes.STRING(127),
            allowNull: false,
        },
        
    });

};

module.exports = member;