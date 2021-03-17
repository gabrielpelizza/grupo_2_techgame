module.exports = (sequelize, dataTypes) => {

	const alias = 'Productos';
	const cols = {
		id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
		},
		product_name:{
            type: dataTypes.STRING(45),
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
            allowNull : true
        } ,
        brand_id : {
            type: dataTypes.INTEGER,
            allowNull : false
        } ,
        image : {
            type: dataTypes.STRING,
            allowNull: true
        } ,
        category_id : {
            type : dataTypes.INTEGER,
            allowNull: false
        }
	};

	const config = {
		tableName : 'products',
		timestamps: false 
	}

	const Product = sequelize.define(alias,cols,config)
	
    Product.associate = function(models){

        Product.belongsTo(models.Brands, {
            as : 'Productos',  //aca no iria marcas  como alias?
            foreignKey : "brand_id"
        })
/*
        Product.belongsTo(models.categories,{
            as : 'categorias',
            foreignKey :'category_id'
        }) ¿aca no va la otra asocion de categorias? */
    }  

	return Product;

}