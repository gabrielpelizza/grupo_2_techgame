module.exports = (sequelize, dataTypes) => {

	let alias = 'carts';
	let cols = {
		id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
		},
        product_id:{
            type: dataTypes.INTEGER,
            allowNull : false,
            associate : 'id'
        },
        user_id:{
            type: dataTypes.INTEGER,
            allowNull : false,
        }
	};

	let config = {
		tableName : 'carts', /* no es necesario ya que sequelize toma el nombre del archivo pero en plurar como el nombre de la tabla */
		timestamps: false 
	}

	const Carrito = sequelize.define(alias,cols,config)
	
/*     cart.associate = function(modelos){
        cart.belongTo(models.Product,{
            as : 'id'
        });
    } */

	return Carrito;

}