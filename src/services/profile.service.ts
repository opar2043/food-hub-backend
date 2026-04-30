import prisma from '../config/prisma';

export const ProfileService = {
  async createProfile(data: any) {
    return await prisma.profile.create({ data });
  },

  async getAllProfiles() {
    return await prisma.profile.findMany({
      include: { user: true }
    });
  },

  async getProfileById(id: number) {
    return await prisma.profile.findUnique({
      where: { id },
      include: { user: true }
    });
  },

  async deleteProfile(id: number) {
    return await prisma.profile.delete({
      where: { id }
    });
  },

  async updateProfile(id: number, data: any) {
    return await prisma.profile.update({
      where: { id },
      data
    });
  },
};
