//import express
const express = require("express")
//create our router from express.Router
const router = express.Router()

//bring in our controller that has the business logic for our user routes
const userController = require("../controllers/user.controller")

//router for getting all the stinkin users
router.get("/", userController.findAll)

//route for getting a specific user
router.get("/:userid", userController.findByID)

//route for getting a specific user
router.delete("/:userid", userController.deleteByID)

//route for crearting a new user
router.post("/", userController.create)

module.exports = router
