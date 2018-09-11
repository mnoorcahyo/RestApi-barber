module.exports = function (sequelize, DataTypes) {
    return sequelize.define('barbershop_list', {
    barber_id:{
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey:true,
        autoIncrement: true
    },
      barbershop_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER(13),
        allowNull: false
      },
      address: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
    }, {
        tableName: 'barbershop_list',
      });
  };
  