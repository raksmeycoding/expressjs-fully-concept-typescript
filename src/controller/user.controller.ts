import {Request, Response} from "express";
import {getAllUser} from "@services/user.service";
import {User} from "@type/user.type";

const registerUser = async (req: Request, res: Response) => {
};

const authenticateUser = async (req: Request, res: Response) => {
};

const logoutUser = async (req: Request, res: Response) => {
};

const getAllUsers = async (req: Request, res: Response) => {
    const data: User = await getAllUser();
    res.status(200).json(data);
};

export {registerUser, authenticateUser, logoutUser, getAllUsers};