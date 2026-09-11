# ⭐ RateHub — Store Rating Platform

A modern full-stack **role-based store rating platform** where users can discover stores, submit ratings, store owners can monitor customer feedback, and administrators can manage the entire platform.

Built with **React, Express.js, PostgreSQL, Prisma, JWT, and Zod**.

---

## 🚀 Overview

RateHub provides a complete store rating ecosystem with three different user roles:

- 🛡️ **System Administrator**
- 👤 **Normal User**
- 🏪 **Store Owner**

Each role has dedicated functionality and permissions.

The application uses **JWT authentication with HTTP-only cookies**, **bcrypt password hashing**, **Prisma ORM**, and **PostgreSQL** for secure and reliable data management.

---

## ✨ Key Features

### 🛡️ Admin

- 📊 Platform dashboard with statistics
- 👥 User management
- 🏪 Store management
- ➕ Create users and administrators
- ➕ Create store owners
- 🏷️ Assign stores to store owners
- 🔎 Search and filter users/stores
- ↕️ Sorting and pagination
- 📋 View detailed user information
- ⭐ View store-owner rating information

### 👤 Normal User

- 🔐 Secure signup and login
- 🏪 Browse available stores
- 🔎 Search stores by name or address
- ⭐ Submit ratings from **1–5**
- ✏️ Modify previously submitted ratings
- 🔒 One rating per user per store
- 🔑 Change password
- 🚪 Secure logout

### 🏪 Store Owner

- 📊 Store owner dashboard
- 🏪 View owned stores
- ⭐ View average store ratings
- 👥 View users who rated their stores
- 📧 View customer information
- 📈 Monitor customer feedback

---

## 🖥️ Application Preview

### 🔐 Authentication

The application provides a clean authentication experience with role-based access control.

### 🏪 Store Discovery

Users can search stores by:

- Store name
- Store address

### ⭐ Rating System

Users can submit and modify ratings while maintaining a single rating per store.

### 🏪 Store Owner Dashboard

Store owners can monitor their stores and customer ratings.

### 🛡️ Admin Dashboard

Administrators can monitor platform-wide statistics and manage users and stores.

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │    React Frontend   │
                    │    Vite + Axios     │
                    └──────────┬──────────┘
                               │
                               │ HTTP / REST API
                               ▼
                    ┌─────────────────────┐
                    │   Express.js API    │
                    │   Authentication    │
                    │   RBAC + Validation │
                    └──────────┬──────────┘
                               │
                               │ Prisma ORM
                               ▼
                    ┌─────────────────────┐
                    │     PostgreSQL      │
                    │                     │
                    │ Users │ Stores      │
                    │ Ratings             │
                    └─────────────────────┘
