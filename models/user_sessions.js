module.exports = function (Sequelize, DataTypes) {

    var Model = Sequelize.define('users', {
        user_session_id: {
            type: DataTypes.STRING,
            field: 'user_session_id',
            primaryKey: true,
            allowNull: false,
        },
        user_id: { type: DataTypes.STRING, allowNull: true },
        access_token: { type: DataTypes.STRING, allowNull: true },
        refresh_token: { type: DataTypes.STRING, allowNull: true },
        expired: { type: DataTypes.STRING, allowNull: true },
        is_active: { type: DataTypes.BOOLEAN, allowNull: true },
    }, { timestamps: false, freezeTableName: true });

    return Model;

};