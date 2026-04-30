# 💍 Matrimony Prisma Backend

A high-performance, modular backend architecture built with **Express.js**, **TypeScript**, and **Prisma ORM**. This project is designed for scalability and type safety, specifically tailored for the Matrimony application.

---

## 🚀 Features

- **🏛️ Modular Architecture**: Follows a strict Route-Controller-Service pattern for clean separation of concerns.
- **💎 Prisma ORM**: Type-safe database queries with PostgreSQL.
- **🟦 TypeScript**: robust type-checking and modern JavaScript features.
- **☁️ Cloudinary Integration**: Seamless image upload and management for user profiles.
- **📊 Dashboard Analytics**: Built-in endpoints for real-time application statistics.
- **🔐 Secure & Scalable**: Ready for production deployments.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Storage**: Cloudinary
- **Dev Tools**: Nodemon, TS-Node

---

## 📂 Project Structure

```text
prisma-backend/
├── prisma/
│   └── schema.prisma      # Prisma Schema & Database Models
├── src/
│   ├── config/            # Third-party service configurations (Prisma, Cloudinary)
│   ├── controllers/       # Request handlers & Input validation
│   ├── routes/            # Express route definitions & grouping
│   ├── services/          # Business logic & Database interactions
│   ├── app.ts             # Express application & Middleware setup
│   └── server.ts          # Application entry point
├── .env                   # Environment variables (Sensitive)
├── tsconfig.json          # TypeScript compiler configuration
└── package.json           # Scripts and dependencies
```

---

## 🏁 Getting Started

### 1. Prerequisites
- Node.js (v16+)
- PostgreSQL Database
- Cloudinary Account

### 2. Installation
```bash
git clone <repository-url>
cd prisma-backend
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add the following:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/matrimony?schema=public"

# Server
PORT=5001

# Cloudinary
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

### 4. Prisma Initialization
```bash
# Generate Prisma Client
npx prisma generate

# Create initial migration
npx prisma migrate dev --name init
```

### 5. Run the Application
```bash
# Development mode (with Hot Reload)
npm run dev

# Production build
npm run build
npm start
```

---

## 📡 API Reference

### Dashboard
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/dashboard/stats` | Fetch total counts for users, profiles, and complaints. |

### Users
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/users` | Retrieve all users. |
| `POST` | `/api/users` | Create a new user. |
| `PATCH` | `/api/users/:id` | Update user details. |
| `DELETE` | `/api/users/:id` | Remove a user. |

### Profiles
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/profiles` | List all profiles. |
| `GET` | `/api/profiles/:id` | Get specific profile details. |
| `POST` | `/api/profiles` | Create profile (supports base64 image upload). |
| `PATCH` | `/api/profiles/:id` | Update profile details. |

### Complaints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/complaints` | Get all complaints. |
| `POST` | `/api/complaints` | File a new complaint. |

---

## 📜 Available Scripts

- `npm run dev`: Start development server with Nodemon.
- `npm run build`: Compile TypeScript to JavaScript.
- `npm start`: Run the compiled production server.
- `npm run prisma:generate`: Update Prisma Client after schema changes.
- `npm run prisma:migrate`: Sync database schema with Prisma models.

---

## 📄 License
This project is licensed under the MIT License.
