import { prisma } from "../../lib/prisma";

const createMeals = async (payload: any) => {
  const result = await prisma.meals.create({
    data: payload,
  });
  return result;
};
const getMeals = async () => {
  return prisma.meals.findMany();
};

const getsingleMeals = async (id: string) => {
  return prisma.meals.findUnique({
    where: { id },
  });
};
const deleteMeals = async (id: string) => {
  return prisma.meals.delete({
    where: { id },
  });
};

const updateMeals = async (id: string, payload: any) => {
  return prisma.meals.update({
    where: { id },
    data: payload,
  });
};

export const mealsservice = {
  createMeals,
  getMeals,
  deleteMeals,
  updateMeals,
  getsingleMeals,
};
