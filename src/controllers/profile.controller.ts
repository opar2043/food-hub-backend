import { Request, Response } from 'express';
import { ProfileService } from '../services/profile.service';
import cloudinary from '../config/cloudinary';

export const ProfileController = {
  async createProfile(req: Request, res: Response) {
    try {
      const { image, ...profileData } = req.body;
      let imageUrl = '';
      
      if (image) {
        const uploaded = await cloudinary.uploader.upload(image, { folder: 'profiles' });
        imageUrl = uploaded.secure_url;
      }
      
      const result = await ProfileService.createProfile({
        ...profileData,
        image: imageUrl,
        userId: Number(profileData.userId)
      });
      res.status(201).json(result);
    } catch (error: any) {
      console.error('Upload error:', error);
      res.status(500).json({ message: error.message });
    }
  },

  async getAllProfiles(req: Request, res: Response) {
    try {
      const result = await ProfileService.getAllProfiles();
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async getProfileById(req: Request, res: Response) {
    try {
      const result = await ProfileService.getProfileById(Number(req.params.id));
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteProfile(req: Request, res: Response) {
    try {
      const result = await ProfileService.deleteProfile(Number(req.params.id));
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateProfile(req: Request, res: Response) {
    try {
      const { image, ...updateData } = req.body;
      let finalImage = image;

      if (image && image.startsWith('data:')) {
        const uploaded = await cloudinary.uploader.upload(image, { folder: 'profiles' });
        finalImage = uploaded.secure_url;
      }

      const result = await ProfileService.updateProfile(Number(req.params.id), {
        ...updateData,
        ...(finalImage && { image: finalImage })
      });
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },
};
