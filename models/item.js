  module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      itemId: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }

    });
  
    Item.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Item.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Item;
  };
  