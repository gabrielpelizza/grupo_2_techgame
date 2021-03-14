module.exports = (sequelize, dataTypes) => {

	let alias = 'products';
	let cols = {
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

	let config = {
		tableName : 'products', /* no es necesario ya que sequelize toma el nombre del archivo pero en plurar como el nombre de la tabla */
		timestamps: false 
	}

	const Products = sequelize.define(alias,cols,config)
	
    Product.associate = function(modelos){
        Product.hasMany(models.Brand,{
            as : 'brand'
        });
    }

	return Products;

}