const express = require('express')
const route = express.Router()
const userController = require('../controller/UserController')
const User = require('../model/UserModel')

route.post('/create',userController.createUser)
route.get("/allusers", userController.getUser);
route.get("/singleuser/:id", userController.singleUser);
route.put("/update/:id", userController.updateUser);
route.delete("/delete/:id", userController.deleteUser);

module.exports = route;