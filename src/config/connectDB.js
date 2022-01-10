const { Sequelize } = require('sequelize')
const sequelize = new Sequelize("dc21moc5fkqibn", "ioxekxkaejjpud", "e4f24ba37407b4057684d1cfb602e915d336c47b40ac2ac806f88b29d4f486c5", {
  host: 'ec2-3-225-41-234.compute-1.amazonaws.com',
  dialect: 'postgres',
  "logging": false,
  "dialectOptions": {
    "ssl": {
      "require": true,
      "rejectUnauthorized": false
    }
  }
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
module.exports = connectDB