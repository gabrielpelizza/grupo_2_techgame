module.exports = (sequelize,dataTypes)=>{
    const alias = "categories"
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true,
        },
        category : {
            type : dataTypes.STRING(45),
            allowNull : false
        }
    }

    const config = {
        tableName : 'categories',
        timestamps : false
    }

    const Category = sequelize.define(alias,cols,config);

    Category.associate = function(models){
        Category.hasMany(models.Productos,{
            as : 'productos',
            foreignKey : 'category_id'
        })
    }

    return Category;


}