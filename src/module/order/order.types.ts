import type { OrderStatus } from "../../../generated/prisma"

export interface IOrder {
  id: string
  userId: string
  totalPrice: number
  mobile: string
  address: string
  status: OrderStatus
}
