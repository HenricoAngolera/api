const { Router } = require('express');
const multer = require("multer");
const uploadConfig = require("../config/upload");

const UsersController = require('../controllers/UsersController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRouter = Router()
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();

usersRouter.post('/', usersController.create);
usersRouter.put('/', ensureAuthenticated, usersController.update);
usersRouter.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (request, response) => {
  console.log(request.file.filename);
  response.json();
})

module.exports = usersRouter
