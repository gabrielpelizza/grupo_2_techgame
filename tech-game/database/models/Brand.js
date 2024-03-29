module.exports = (sequelize,dataTypes)=>{
    const alias = "Brands"
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
        }

    }

    const config = {
        tableName : 'brands',
        timestamps : false
    }

    const Brand = sequelize.define(alias,cols,config);

    Brand.associate = function(models){
        Brand.hasMany(models.Productos, {
            as:'productos',
            foreignKey : 'brand_id'
        })
    }

    return Brand;


}