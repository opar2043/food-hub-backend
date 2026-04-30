import { Request, Response } from 'express';
import { ComplaintService } from '../services/complaint.service';

export const ComplaintController = {
  async createComplaint(req: Request, res: Response) {
    try {
      const result = await ComplaintService.createComplaint(req.body);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async getAllComplaints(req: Request, res: Response) {
    try {
      const result = await ComplaintService.getAllComplaints();
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteComplaint(req: Request, res: Response) {
    try {
      const result = await ComplaintService.deleteComplaint(Number(req.params.id));
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateComplaint(req: Request, res: Response) {
    try {
      const result = await ComplaintService.updateComplaint(Number(req.params.id), req.body);
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
};
