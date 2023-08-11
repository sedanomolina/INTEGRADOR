const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Favorite",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                // autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM,
                values: ["Alive", "Dead", "Unknown"],
                allowNull: false,
            },
            species: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            gender: {
                type: DataTypes.ENUM,
                values: ["Female", "Male", "Genderlees", "Unknown"],
                allowNull: false,
            },
            origin: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: null,
            },
        },
        { timestamps: false }
    );
};
