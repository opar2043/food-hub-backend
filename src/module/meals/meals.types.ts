import type { Status } from "../../../generated/prisma";

export interface IMeal {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  status: Status;
  ingredients: string[];
  providerId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}


