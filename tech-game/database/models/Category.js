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

    return Category;


}