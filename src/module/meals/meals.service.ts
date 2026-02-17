import { prisma } from "../../lib/prisma";

const createMeals = async (payload: any) => {
  const result = await prisma.meal.create({
    data: payload,
  });

  return result;
};

export const mealsservice = {
  createMeals,
};
