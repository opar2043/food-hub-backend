import prisma from '../config/prisma';

export const UserService = {
  async createUser(data: any) {
    return await prisma.user.create({ data });
  },

  async getAllUsers() {
    return await prisma.user.findMany({
      include: { profile: true }
    });
  },

  async deleteUser(id: number) {
    return await prisma.user.delete({
      where: { id }
    });
  },

  async updateUser(id: number, data: any) {
    return await prisma.user.update({
      where: { id },
      data
    });
  },
};
