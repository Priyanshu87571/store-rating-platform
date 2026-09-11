# RateHub — Store Rating Platform

Full-stack coding challenge implementation using **React + Express.js + PostgreSQL + Prisma**.

## Features

- Single login system with role-based access control.
- Roles: System Administrator, Normal User, Store Owner.
- User signup/login/logout and password change.
- Admin dashboard with total users, stores and submitted ratings.
- Admin can create users/admins/store owners and stores.
- Store Owner assignment when an admin creates a store.
- Admin user/store listings with search filters, sorting and pagination.
- Admin user details including store-owner average ratings.
- Normal users can search stores by name/address.
- Users can submit or modify one 1–5 rating per store.
- Store owners can see average rating and users who submitted ratings.
- Password hashing with bcrypt and JWT authentication using an HTTP-only cookie.
- Zod validation and centralized error handling.
- PostgreSQL indexes and unique user/store rating constraint.
- Responsive React UI.

## Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm

## 1. Database

Create a PostgreSQL database named `store_rating_db` (or use another database and update `DATABASE_URL`).

Example:

```sql
CREATE DATABASE store_rating_db;
```

## 2. Backend setup

```bash
cd server
npm install
copy .env.example .env
```

Edit `.env`:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/store_rating_db?schema=public"
JWT_SECRET="replace-with-a-long-random-secret"
PORT=5000
CLIENT_URL="http://localhost:5173"
NODE_ENV="development"
```

Then:

```bash
npx prisma generate
npx prisma db push
npm run prisma:seed
npm run dev
```

Backend runs at `http://localhost:5000`.

## 3. Frontend setup

Open a second terminal:

```bash
cd client
npm install
copy .env.example .env
npm run dev
```

Frontend runs at `http://localhost:5173`.

## Demo accounts

All demo passwords are `Password@123`.

| Role | Email |
|---|---|
| Admin | admin@example.com |
| Normal User | user@example.com |
| Store Owner | owner@example.com |

A second owner is also seeded: `owner2@example.com`.

## API overview

### Auth

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`
- `PUT /api/auth/password`

### Admin

- `GET /api/admin/dashboard`
- `POST /api/admin/users`
- `GET /api/admin/users`
- `GET /api/admin/users/:id`
- `POST /api/admin/stores`
- `GET /api/admin/stores`

### Normal User

- `GET /api/stores?name=&address=&sortBy=&sortOrder=`
- `POST /api/ratings`

### Store Owner

- `GET /api/owner/dashboard`

## Validation

- User name: 20–60 characters.
- Address: maximum 400 characters.
- Password: 8–16 characters, at least one uppercase letter and one special character.
- Email: standard email validation.
- Rating: integer from 1 to 5.

## Database design

`users` → stores and ratings.

`stores` → owned by a store owner and contains ratings.

`ratings` → joins users and stores with `UNIQUE(user_id, store_id)` so each user has only one rating per store.

## Notes

For this challenge, store creation is performed by an administrator and requires selecting an existing `STORE_OWNER`. This makes the Store Owner dashboard immediately usable and keeps ownership relationally consistent.

## Production improvements

For production deployment, add refresh tokens, rate limiting, CSRF strategy appropriate to the authentication architecture, stronger audit logging, automated tests, CI/CD, and managed PostgreSQL.
