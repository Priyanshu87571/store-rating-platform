# ⭐ RateHub — Store Rating Platform

<p align="center">
  A full-stack role-based store rating platform built with React, Express.js, PostgreSQL and Prisma.
</p>

<p align="center">
  <b>Search Stores • Submit Ratings • Manage Stores • Role-Based Dashboards</b>
</p>

---

## 📌 About The Project

**RateHub** is a full-stack store rating platform developed as a coding challenge.

The application provides a centralized platform where users can discover stores and submit ratings, store owners can monitor customer feedback, and administrators can manage users, stores and platform statistics.

The application implements **role-based access control (RBAC)** with three different roles:

- 🛡️ System Administrator
- 👤 Normal User
- 🏪 Store Owner

The backend follows a RESTful API architecture and uses **Prisma ORM with PostgreSQL** for reliable relational data management.

---

## ✨ Features

### 🛡️ System Administrator

- 📊 Dashboard with platform statistics
- 👥 View and manage users
- 🏪 View and manage stores
- ➕ Create users
- ➕ Create administrators
- ➕ Create store owners
- ➕ Create stores
- 🔗 Assign stores to store owners
- 🔍 Search and filter users
- 🔍 Search and filter stores
- ↕️ Sorting functionality
- 📄 Pagination
- 👤 View detailed user information
- ⭐ View store-owner rating information

### 👤 Normal User

- 🔐 User registration
- 🔑 Secure login/logout
- 🏪 Browse available stores
- 🔍 Search stores by name
- 📍 Search stores by address
- ⭐ Submit a rating from 1–5
- ✏️ Modify an existing rating
- 🚫 One rating per user per store
- 🔑 Change password
- 📊 View store ratings

### 🏪 Store Owner

- 📊 Store Owner dashboard
- 🏪 View owned stores
- ⭐ View average store ratings
- 👥 View users who submitted ratings
- 📧 View customer email information
- 📍 View customer addresses
- ⭐ View individual customer ratings

---

# 🖥️ Application Screenshots

## 🔐 Login

The application provides a secure login interface with role-based authentication.

<img width="567" height="687" alt="image" src="https://github.com/user-attachments/assets/78915c49-745d-4ff8-8faf-8ace4194ec99" />


---

## 📝 User Registration

Users can create an account with validated name, email, address and password fields.

<img width="526" height="737" alt="image" src="https://github.com/user-attachments/assets/840d606b-1302-4101-bd8a-e70b73049772" />


---

## 🏪 Store Listing

Normal users can search and browse available stores using store name or address.

![Store Listing](./screenshots/store-listing.png)

---

## ⭐ Store Rating

Users can submit a rating between **1 and 5 stars** and modify their existing rating.

![Store Rating](./screenshots/store-rating.png)

---

## 🏪 Store Owner Dashboard

Store owners can monitor their stores, average ratings and customer feedback.

![Store Owner Dashboard](./screenshots/store-owner-dashboard.png)

---

## 🛡️ Admin Dashboard

Administrators can view platform-wide statistics and manage users and stores.

<img width="1832" height="636" alt="image" src="https://github.com/user-attachments/assets/ba261561-6fae-44d7-8109-9a60597e4d45" />


---
# 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │    React Frontend    │
                    │      Vite + Axios    │
                    └──────────┬───────────┘
                               │
                               │ REST API
                               ▼
                    ┌──────────────────────┐
                    │    Express.js API    │
                    │                      │
                    │ Authentication       │
                    │ Authorization        │
                    │ Validation           │
                    │ Controllers          │
                    │ Routes               │
                    └──────────┬───────────┘
                               │
                               │ Prisma ORM
                               ▼
                    ┌──────────────────────┐
                    │     PostgreSQL       │
                    │                      │
                    │ Users                │
                    │ Stores               │
                    │ Ratings              │
                    └──────────────────────┘
```

---

# 👥 Role-Based Access Control

```text
                         LOGIN
                           │
                           ▼
                 ┌──────────────────┐
                 │ Authentication    │
                 └────────┬─────────┘
                          │
           ┌──────────────┼──────────────┐
           ▼              ▼              ▼
       🛡️ ADMIN       👤 USER       🏪 OWNER
           │              │              │
           ▼              ▼              ▼
      Manage Users    Search Stores   View Stores
      Manage Stores   Submit Rating   View Ratings
      Statistics      Modify Rating   Customer Info
```

---

# 🛠️ Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| ⚛️ React.js | User interface |
| ⚡ Vite | Frontend development and build tool |
| 🧭 React Router | Client-side routing |
| 📡 Axios | API communication |
| 🎨 CSS | Responsive styling |
| 🔹 Lucide React | UI icons |

## Backend

| Technology | Purpose |
|---|---|
| 🟢 Node.js | JavaScript runtime |
| 🚂 Express.js | REST API framework |
| 🔷 Prisma | ORM |
| 🐘 PostgreSQL | Relational database |
| 🔐 JWT | Authentication |
| 🔒 bcryptjs | Password hashing |
| ✅ Zod | Request validation |
| 🛡️ Helmet | Security middleware |
| 🍪 Cookie Parser | Cookie handling |
| 📝 Morgan | HTTP request logging |
| 🔄 Nodemon | Development server |

---

# 🔐 Authentication & Security

RateHub implements multiple security practices:

- 🔐 JWT-based authentication
- 🍪 HTTP-only authentication cookies
- 🔒 bcrypt password hashing
- 🛡️ Role-based access control
- ✅ Zod input validation
- 🛡️ Helmet security headers
- 🚫 Protected API routes
- 🔑 Secure password change functionality
- 🔗 Database-level rating uniqueness
- 🌐 CORS configuration
- ⚠️ Centralized error handling

---

# 🗄️ Database Design

The application uses **PostgreSQL** with **Prisma ORM**.

## User

```text
User
│
├── id
├── name
├── email
├── passwordHash
├── address
├── role
├── createdAt
└── updatedAt
```

## Store

```text
Store
│
├── id
├── name
├── email
├── address
├── ownerId
├── createdAt
└── updatedAt
```

## Rating

```text
Rating
│
├── id
├── userId
├── storeId
├── rating
├── createdAt
└── updatedAt
```

## Relationships

```text
                 ┌─────────────┐
                 │    User     │
                 └──────┬──────┘
                        │
              owns      │
                        ▼
                 ┌─────────────┐
                 │    Store    │
                 └──────┬──────┘
                        │
                        │ has
                        ▼
                 ┌─────────────┐
                 │   Rating    │
                 └──────┬──────┘
                        ▲
                        │
                        │ submitted by
                        │
                 ┌──────┴──────┐
                 │    User     │
                 └─────────────┘
```

### Rating Constraint

Each user can submit only one rating for a particular store.

This is enforced at the database level:

```text
UNIQUE(user_id, store_id)
```

---

# 📁 Project Structure

```text
store-rating-platform/
│
├── client/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── NewUser.jsx
│   │   │   │   ├── Stores.jsx
│   │   │   │   ├── UserDetails.jsx
│   │   │   │   └── Users.jsx
│   │   │   │
│   │   │   ├── owner/
│   │   │   │   └── Dashboard.jsx
│   │   │   │
│   │   │   ├── ChangePassword.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Stores.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   │
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   │
│   ├── prisma/
│   │   ├── migrations/
│   │   ├── schema.prisma
│   │   ├── seed.js
│   │   └── migration_note.txt
│   │
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── admin.js
│   │   │   ├── auth.js
│   │   │   ├── owner.js
│   │   │   ├── ratings.js
│   │   │   └── stores.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── error.js
│   │   │
│   │   ├── routes/
│   │   │   └── index.js
│   │   │
│   │   ├── validators/
│   │   │   └── index.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env.example
│   └── package.json
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# 📡 REST API

## 🔐 Authentication

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/signup` | Register a new user |
| `POST` | `/api/auth/login` | Authenticate user |
| `POST` | `/api/auth/logout` | Logout user |
| `GET` | `/api/auth/me` | Get authenticated user |
| `PUT` | `/api/auth/password` | Change password |

---

## 🛡️ Administrator

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/admin/dashboard` | Dashboard statistics |
| `POST` | `/api/admin/users` | Create user |
| `GET` | `/api/admin/users` | List users |
| `GET` | `/api/admin/users/:id` | Get user details |
| `POST` | `/api/admin/stores` | Create store |
| `GET` | `/api/admin/stores` | List stores |

---

## 👤 Normal User

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/stores` | Search/list stores |
| `POST` | `/api/ratings` | Submit or modify rating |

### Store Search Parameters

```text
/api/stores?name=&address=&sortBy=&sortOrder=
```

---

## 🏪 Store Owner

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/owner/dashboard` | Store owner dashboard |

---

# ⚙️ Installation

## Prerequisites

Make sure the following are installed:

- Node.js 18+
- PostgreSQL 14+
- npm
- Git

---

# 1️⃣ Clone the Repository

```bash
git clone https://github.com/Priyanshu87571/store-rating-platform.git
```

Move into the project:

```bash
cd store-rating-platform
```

---

# 2️⃣ Database Setup

Create a PostgreSQL database:

```sql
CREATE DATABASE store_rating_db;
```

---

# 3️⃣ Backend Setup

Navigate to the server:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create the environment file.

### Windows

```powershell
copy .env.example .env
```

Configure `.env`:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/store_rating_db?schema=public"
JWT_SECRET="your-long-random-secret"
PORT=5000
CLIENT_URL="http://localhost:5173"
NODE_ENV="development"
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

Seed demo data:

```bash
npm run prisma:seed
```

Start the backend:

```bash
npm run dev
```

Backend server:

```text
http://localhost:5000
```

---

# 4️⃣ Frontend Setup

Open a second terminal.

Navigate to:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create the environment file:

### Windows

```powershell
copy .env.example .env
```

Start the frontend:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 🔑 Demo Credentials

All demo accounts use:

```text
Password@123
```

| Role | Email | Password |
|---|---|---|
| 🛡️ Admin | `admin@example.com` | `Password@123` |
| 👤 Normal User | `user@example.com` | `Password@123` |
| 🏪 Store Owner | `owner@example.com` | `Password@123` |
| 🏪 Store Owner | `owner2@example.com` | `Password@123` |

> ⚠️ These credentials are intended for local/demo evaluation only.

---

# ✅ Validation Rules

| Field | Requirement |
|---|---|
| Name | 20–60 characters |
| Address | Maximum 400 characters |
| Password | 8–16 characters |
| Password | At least one uppercase letter |
| Password | At least one special character |
| Email | Valid email format |
| Rating | Integer between 1 and 5 |

---

# 🧪 Application Testing Flow

## 👤 Normal User

```text
Login
  ↓
Browse Stores
  ↓
Search Store
  ↓
Select Store
  ↓
Submit Rating
  ↓
Modify Rating
```

---

## 🏪 Store Owner

```text
Login
  ↓
Owner Dashboard
  ↓
View Owned Stores
  ↓
View Average Rating
  ↓
View Customer Ratings
```

---

## 🛡️ Administrator

```text
Login
  ↓
Admin Dashboard
  ↓
View Statistics
  ↓
Manage Users
  ↓
Manage Stores
  ↓
Create Users / Stores
```

---

# 📊 Core Functional Flow

```text
                  USER
                   │
                   │ Login
                   ▼
            Authentication
                   │
                   ▼
             Store Search
                   │
                   ▼
             Submit Rating
                   │
                   ▼
              PostgreSQL
                   │
                   ▼
          ┌────────┴────────┐
          │                 │
          ▼                 ▼
     Store Owner          Admin
          │                 │
          ▼                 ▼
   View Ratings       Manage Platform
```

---

# 📈 Database & Performance

The database includes indexes for frequently queried fields:

### Users

```text
name
role
```

### Stores

```text
name
address
ownerId
```

### Ratings

```text
userId
storeId
```

A unique constraint prevents duplicate ratings:

```text
UNIQUE(user_id, store_id)
```

This provides both **data integrity and efficient querying**.

---

# 🧩 Design Highlights

### RESTful Backend

The backend separates:

```text
Routes
   ↓
Controllers
   ↓
Validation
   ↓
Prisma
   ↓
PostgreSQL
```

### Role-Based Authorization

Access to protected resources is determined by the authenticated user's role.

```text
ADMIN
USER
STORE_OWNER
```

### Centralized Error Handling

Errors are handled through centralized Express middleware to provide consistent API responses.

---

# 🚀 Production Improvements

For a production deployment, the following improvements could be added:

- 🔄 Refresh-token authentication
- 🚦 API rate limiting
- 🛡️ CSRF protection strategy
- 📝 Audit logging
- 🧪 Unit and integration testing
- 🔁 CI/CD pipeline
- 🐳 Docker containerization
- ☁️ Cloud deployment
- 🗄️ Managed PostgreSQL
- 📊 Advanced analytics
- 📈 Rating trends and charts
- 🔔 Notifications
- 📧 Email verification
- 🔐 Password reset functionality

---

# 🎯 Project Highlights

RateHub demonstrates practical implementation of:

- ⚛️ React component architecture
- 🟢 Node.js backend development
- 🚂 Express.js REST API design
- 🔐 JWT authentication
- 🛡️ Role-based authorization
- 🐘 PostgreSQL relational database
- 🔷 Prisma ORM
- 🔒 Secure password hashing
- ✅ Zod validation
- 🔎 Search and filtering
- 📄 Pagination
- ⭐ Rating aggregation
- 🔗 Relational database modeling
- 🛡️ API security middleware
- 📱 Responsive UI development

---

# 📌 Challenge Requirements Covered

| Requirement | Status |
|---|---|
| Role-based authentication | ✅ |
| Admin functionality | ✅ |
| Normal user functionality | ✅ |
| Store owner functionality | ✅ |
| Store management | ✅ |
| User management | ✅ |
| Store search | ✅ |
| Rating submission | ✅ |
| Rating modification | ✅ |
| PostgreSQL database | ✅ |
| Prisma ORM | ✅ |
| Input validation | ✅ |
| Password hashing | ✅ |
| JWT authentication | ✅ |
| REST APIs | ✅ |
| Responsive UI | ✅ |

---

# 👨‍💻 Author

## Priyanshu Raj

**Computer Science Student | Full-Stack Developer**

### Technologies

```text
React.js
Next.js
Node.js
Express.js
PostgreSQL
Prisma
MongoDB
REST APIs
JWT
Git & GitHub
```

### GitHub

[github.com/Priyanshu87571](https://github.com/Priyanshu87571)

---

# ⭐ Support

If you found this project interesting, consider giving the repository a ⭐ on GitHub.

---

<p align="center">
  <b>RateHub — Store Rating Platform</b>
  <br>
  Built with ❤️ using React, Express.js, PostgreSQL & Prisma.
</p>
