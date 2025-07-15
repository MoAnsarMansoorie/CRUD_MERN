import express from "express"
import { createUserController, deleteAllUsersController, deleteUserController, getUserController, updateUserController } from "../controllers/user.controller.js"

const router = express.Router()

router.get("/getUsers", getUserController)
router.post("/createUser", createUserController)
router.delete("/deleteUser/:id", deleteUserController)
router.put("/updateUser/:id", updateUserController)
router.delete("/deleteAll", deleteAllUsersController)

export default router