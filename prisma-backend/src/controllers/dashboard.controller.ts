import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const DashboardController = {
  async getStats(req: Request, res: Response) {
    try {
      const [usersCount, profilesCount, complaintsCount] = await Promise.all([
        prisma.user.count(),
        prisma.profile.count(),
        prisma.complaint.count(),
      ]);

      res.status(200).json({
        usersCount,
        profilesCount,
        complaintsCount,
      });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching stats' });
    }
  },
};
