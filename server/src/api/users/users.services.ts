import { PrismaClient } from "@prisma/client";
import { IUser, rawUserType } from "./users.model";

const prisma = new PrismaClient();

const getAllUsers = async (): Promise<IUser[]> => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        throw Error("Error while getting users");
    }
};

const getUser = async (id: number): Promise<IUser> => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        return user;
    } catch (error) {
        throw Error("Error while getting user");
    }
};

const createUser = async (newUser: rawUserType): Promise<IUser> => {
    try {
        const user = await prisma.user.create({
            data: {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                password: newUser.password,
                newsletter: newUser.newsletter,
            },
        });
        return user;
    } catch (error) {
        throw Error("Error while creating user");
    }
};

const updateUserEmail = async (id: number, email: string): Promise<IUser> => {
    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                email: email,
            },
        });
        return updatedUser;
    } catch (error) {
        throw Error("Error while updating user");
    }
};

const deleteUser = async (id: number): Promise<IUser> => {
    try {
        const deletedUser = await prisma.user.delete({
            where: {
                id: id,
            },
        });

        return deletedUser;
    } catch (error) {
        throw Error("Error while deleting user");
    }
};

export const usersServices = {
    getAllUsers,
    getUser,
    createUser,
    updateUserEmail,
    deleteUser,
};
