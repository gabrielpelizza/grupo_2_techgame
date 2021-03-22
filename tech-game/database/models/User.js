module.exports = (sequelize, datatypes) => {

    const alias = "Usuarios";  /* alias para operar en el controller */

    const cols = {
        id : {
            type: datatypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name : {
            type : datatypes.STRING(45),
            allowNull : false
        },
        lastname : {
            type : datatypes.STRING(45),
            allowNull : false
        },
        email : {
            type : datatypes.STRING(45),
            allowNull : false
        },
        dni : {
            type : datatypes.INTEGER,
            allowNull : false
        },
        country : {
            type : datatypes.STRING(45),
            allowNull : false
        },
        password : {
            type : datatypes.STRING(100),
            allowNull : false
        },
        rol_id : {
            type : datatypes.INTEGER,
            allowNull : false
        }
    }

    const config = {
        tableName : 'users',  /* nombre de la tabla  */
        timestamps : false
    }



    const User = sequelize.define(alias, cols, config)  /* mismo nombre que el archivo */

    User.associate = function(models){
        User.belongsTo(models.Rol, {   /* se coloca el alias de la tabla */
            as : 'rol',  /* alias para operar en el ejs */
            foreignKey : 'rol_id'
        })
    }

    return User
}