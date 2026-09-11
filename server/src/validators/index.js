import { z } from 'zod';
export const passwordSchema = z.string().min(8).max(16).regex(/^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,16}$/, 'Password must be 8-16 characters with at least one uppercase letter and one special character.');
export const userSchema = z.object({ name:z.string().trim().min(20).max(60), email:z.string().trim().email(), address:z.string().trim().max(400), password:passwordSchema });
export const loginSchema = z.object({ email:z.string().trim().email(), password:z.string().min(1) });
export const ratingSchema = z.object({ storeId:z.coerce.number().int().positive(), rating:z.coerce.number().int().min(1).max(5) });
export const storeSchema = z.object({ name:z.string().trim().min(1).max(255), email:z.string().trim().email(), address:z.string().trim().max(400), ownerId:z.coerce.number().int().positive() });
export const passwordUpdateSchema = z.object({ currentPassword:z.string().min(1), newPassword:passwordSchema });
