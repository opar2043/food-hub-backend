import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export const UserController = {
  async createUser(req: Request, res: Response) {
    try {
      const result = await UserService.createUser(req.body);
      res.status(201).json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async getAllUsers(req: Request, res: Response) {
    try {
      const result = await UserService.getAllUsers();
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteUser(req: Request, res: Response) {
    try {
      const result = await UserService.deleteUser(Number(req.params.id));
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateUser(req: Request, res: Response) {
    try {
      const result = await UserService.updateUser(Number(req.params.id), req.body);
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
};
