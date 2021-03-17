module.exports = (sequelize,dataTypes)=>{
    const alias = "purchases"
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true,
        },
        user_id : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        product_id : {
            type : dataTypes.INTEGER,
            allowNull: false
        }

    }

    const config = {
        tableName : 'purchases',
        timestamps : false
    }

    const Purchas = sequelize.define(alias,cols,config);

    return Purchas;


}