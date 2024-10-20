const mongoos = require("mongoose");

const schema = mongoos.Schema({
    email : {
        type : String,
        require : [true,"user must have valid email"],
        unique : true
    },

    username : {
        type : String,
        require : [true,"user must have valid username"],
        unique : true
    },

    password : {
        type : String,
        require : [true,"user should have strong password"]
    },

    dateOfCreation : {
        type : Date,
        default : Date.now()
    }
});

const User = mongoos.model("User",schema);

module.exports = User;