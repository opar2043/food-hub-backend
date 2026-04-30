import prisma from '../config/prisma';

export const ComplaintService = {
  async createComplaint(data: any) {
    return await prisma.complaint.create({ data });
  },

  async getAllComplaints() {
    return await prisma.complaint.findMany({
      include: { user: true }
    });
  },

  async deleteComplaint(id: number) {
    return await prisma.complaint.delete({
      where: { id }
    });
  },

  async updateComplaint(id: number, data: any) {
    return await prisma.complaint.update({
      where: { id },
      data
    });
  },
};
