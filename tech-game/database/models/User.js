module.exports = (sequelize, datatypes) => {

    const alias = "Usuarios";  /* alias para operar en el controller */

    const cols = {
        id : {
            type: datatypes.INTEGER(11),
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
            allowNull : true
        },
        email : {
            type : datatypes.STRING(45),
            allowNull : false
        },
        dni : {
            type : datatypes.INTEGER(11),
            allowNull : false
        },
        country : {
            type : datatypes.STRING(45),
            defaultValue : null
        },
        password : {
            type : datatypes.STRING(45),
            allowNull : false
        },
        rol_id : {
            type : datatypes.INTEGER(11),
            allowNull : false
        }
    }

    const config = {
        tablename : 'users',  /* nombre de la tabla  */
        timestamps : false
    }



    const User = sequelize.define(alias, cols, config)  /* mismo nombre que el archivo */

    User.associate = function(models){
        User.belongsTo(models.Rol, {   /* se coloca el alias de la tabla */
            as : 'rol',
            foreignKey : 'rol_id'
        })
    }

    return User
}