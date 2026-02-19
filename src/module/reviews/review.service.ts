import { prisma } from "../../lib/prisma"
import type { IReview } from "./review.types"

const createReview = async (payload : IReview) => {
    const result = await prisma.review.create({
       data : payload
    });
    return result
};

const getReview = async () => {
    const result = await prisma.review.findMany();
    return result
}

const deleteReview = async (id : string) => {
    const result = await prisma.review.delete({
        where : {
            id 
        }
    });

    return result
}

export const reviewService = {
    createReview,
    getReview,
    deleteReview
}