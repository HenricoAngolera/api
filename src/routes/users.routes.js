const { Router } = require('express');
const multer = require("multer");
const uploadConfig = require("../config/upload");

const UsersController = require('../controllers/UsersController');
const UsersAvatarController = require('../controllers/UserAvatarController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRouter = Router()
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UsersAvatarController();

usersRouter.post('/', usersController.create);
usersRouter.put('/', ensureAuthenticated, usersController.update);
usersRouter.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

module.exports = usersRouter;
