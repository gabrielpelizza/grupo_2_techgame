module.exports = (sequelize, datatypes) => {

    const alias = "Rol";

    const cols = {
        id : {
            type: datatypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        rol : {
            type : datatypes.STRING(45),
            allowNull : false
        }
    }

    const config = {
        tablename : 'roles',
        timestamps : false
    }



    const Rol = sequelize.define(alias, cols, config)

    Rol.associate = function(models){
        Rol.hasMany(models.Usuarios, {
            as : 'usuarios',
            foreignKey : 'rol_id'
        })
    }

    return Rol
}