module.exports = (sequelize, dataTypes) => {

	const alias = 'Productos';
	const cols = {
		id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
		},
		product_name:{
            type: dataTypes.STRING,
            allowNull : false
		} ,
        sku : {
            type: dataTypes.INTEGER,
            allowNull : false 
        } ,
        stock : {
            type: dataTypes.INTEGER,
            allowNull : false
        } ,
        price : {
            type: dataTypes.INTEGER,
            allowNull : false
        } ,
        discount : {
            type: dataTypes.INTEGER,
            allowNull : false
        } ,
        brand_id : {
            type: dataTypes.INTEGER,
            allowNull : false
        } ,
        image : {
            type: dataTypes.STRING,
        }
	};

	const config = {
		tableName : 'products',
		timestamps: false 
	}

	const Product = sequelize.define(alias,cols,config)
	
    Product.associate = function(models){
        Product.belongsTo(models.Brands, {
            as : 'Productos',
            foreignKey : "brand_id"
        })
    }

	return Product;

}