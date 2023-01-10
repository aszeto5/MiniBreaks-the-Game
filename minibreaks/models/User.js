const { Model, DataTypes } = require('sequelize');
const sequelize = require('../server/config/connection');

// create User Model
class User extends Model {}

// define table columsn and configuration
User.init(
    {
        // define an id column
        id: {
            // use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the Primary key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true,
        },
        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // There cannot be any duplicate email values in this table
            unique: true,
            // if allowNull is set t ofalse, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // this means the password must be at least four characters long
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE

        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // dont automatically create createdAt/updatedAt timestamps fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowecase in the database
        modelName: 'user'
    }
);

module.exports = User;