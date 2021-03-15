module.exports = (sequelize,dataTypes)=>{
    const alias = "brands"
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true,
        },
        brand : {
            type : dataTypes.STRING(45),
            allowNull : false
        },
        category_id : {
            type : dataTypes.INTEGER,
            allowNull: false
        }

    }

    const config = {
        tableName : 'brands',
        timestamps : false
    }

    const Brand = sequelize.define(alias,cols,config);

    return Brand;


}