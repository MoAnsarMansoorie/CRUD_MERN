import { User } from "../models/user.model.js";

export const createUserController = async (req, res) => {
    try {
        const { name, email, designation, phone, address, profile } = req.body;
        const user = await User.create({ name, email, designation, phone, address, profile })

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Error in creating controller"
        })
    }
}

export const getUserController = async (req, res) => {
    try {
        const user = await User.find()
        return res.status(200).json({
            success: true,
            message: "User found successfully",
            user
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Error in getting user"
        })
    }
}

export const deleteUserController = async (req, res) => {
    try {
        const id = req.params.id;
        await User.findByIdAndDelete(id)

        return res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Error in deleting user"
        })
    }
}

export const updateUserController = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndUpdate(id, req.body, {new: true})
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Error in updating user"
        })
    }
}

export const deleteAllUsersController = async (req, res) => {
    try {
        await User.deleteMany();
        return res.status(200).json({
            success: true,
            message: "All users deleted successfully"
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Error in deleting all users"
        });
    }
}