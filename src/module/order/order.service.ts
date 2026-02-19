import { prisma } from "../../lib/prisma"
import type { IOrder } from "./order.types";


const createOrder = async (payload : IOrder) => {
    const result = await prisma.order.create({
       data : payload
    });
    return result
};

const getOrder= async () => {
    const result = await prisma.order.findMany();
    return result
}

const deleteOrder= async (id : string) => {
    const result = await prisma.order.delete({
        where : {
            id 
        }
    });

    return result
}
const updateOrder= async (id : string, payload : Omit<IOrder>) => {
    const result = await prisma.order.update({
        where : {
            id 
        },
        data : {
            payload
        }
    });

    return result
}

export const orderService = {
   createOrder,
   getOrder,
   deleteOrder,
   updateOrder
}