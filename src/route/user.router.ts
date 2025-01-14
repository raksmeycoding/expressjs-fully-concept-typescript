import express from "express";
import {getAllUsers} from "@controller/user.controller"


const router = express.Router();

router.get("/users", getAllUsers)


export default router;