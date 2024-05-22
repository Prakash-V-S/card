import { userModel } from "../model/user.js";

export const getUser = async (req, res) => {

    try {

        const users = await userModel.find()
        if (users.length == 0) {
            return res.status(200).json('Database is empty')
        }
        return res.status(200).json(users)
    } catch (error) {

        return res.status(500).json('internal server error', error)

    }

}

export const createUser = async (req, res) => {

    const { name, role, number, dob } = req.body

    try {
        const newUser = new userModel({ name, role, number, dob })
        await newUser.save()
        return res.status(201).json({
            message: 'New user created successfully'
        })

    } catch (error) {
        return res.status(500).json({ message: 'Unable to create new user', error })

    }
}

export const updateUser = async (req, res) => {
    const existingUserData = req.body
    const { id } = req.params

    try {
        const updatedUser = await userModel.findByIdAndUpdate(id, existingUserData, {
            new: true
        })
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' })
        }
        return res.status(200).json(updatedUser)
    } catch (error) {
        return res.status(500).json({ message: `Unable to update User data ${error}`, })
    }

}



export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteUserData = await userModel.findByIdAndDelete(id);
        
        if (!deleteUserData) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({
            message: 'User data deleted successfully'
        });
    } catch (error) {
        return res.status(500).json({ message: `Unable to delete user data: ${error}` });
    }
};
