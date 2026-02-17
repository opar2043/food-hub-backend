// model Meals {
//   id          Int      @id @default(autoincrement())
//   name        String
//   description String?
//   price       Float
//   status      Status   @default(AVAILABLE)
//   ingredients String[]
//   providerId  Int?
//   provider    User?     @relation("ProviderMeals", fields: [providerId], references: [id])

//   reviews     Review[]
//   orderItems  OrderItem[]

//   createdAt   DateTime @default(now())
//   updatedAt   DateTime @updatedAt

//   @@map("meals")
// }


export interface IMeal {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  status: MealStatus;
  ingredients: string[];
  providerId?: number | null;
  createdAt: Date;
  updatedAt: Date;
}



