const Sequelize = require('sequelize');

// 
var db = "marry"
var user = "marryuser"
var pass = "MarryMe"

const url = `postgres://${user}:${pass}@localhost:5432/${db}`;
const sequelize = new Sequelize(url, {logging: false});

sequelize.sync()

//
sequelize.authenticate().then(() => {
    console.log('postgres connected success!');
}).catch((e) => {
    console.error('postgres connection Failed!', e);
});
 

//
const USER = sequelize.define('User', { 
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true
    },
    fname: Sequelize.STRING,
    age: Sequelize.INTEGER, 
    gender: Sequelize.ENUM("MALE", "FEMALE", "OTHER"),
    contacts: Sequelize.ARRAY(Sequelize.STRING),
}); 

//  
export default USER