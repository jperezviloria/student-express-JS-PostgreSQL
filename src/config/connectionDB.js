import Sequelize from "sequelize"

export const connectionsdb = new Sequelize(
    "CollegeDB",
    "usernameDB",
    "passwordDB",
    {
        host: "72.167.32.219",
        dialect: 'postgres'
    }
);