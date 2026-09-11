import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../config/db.js';
import { userSchema,loginSchema,passwordUpdateSchema } from '../validators/index.js';
const safe=u=>({id:u.id,name:u.name,email:u.email,address:u.address,role:u.role});
function issue(res,user){const token=jwt.sign({id:user.id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1d'});res.cookie('token',token,{httpOnly:true,sameSite:'lax',secure:process.env.NODE_ENV==='production',maxAge:86400000});return res.json({user:safe(user)});}
export async function signup(req,res){const data=userSchema.parse(req.body);const exists=await prisma.user.findUnique({where:{email:data.email}});if(exists)return res.status(409).json({message:'Email already registered'});const passwordHash=await bcrypt.hash(data.password,10);const user=await prisma.user.create({data:{name:data.name,email:data.email,address:data.address,passwordHash,role:'USER'}});issue(res,user);}
export async function login(req,res){const data=loginSchema.parse(req.body);const user=await prisma.user.findUnique({where:{email:data.email}});if(!user||!(await bcrypt.compare(data.password,user.passwordHash)))return res.status(401).json({message:'Invalid email or password'});issue(res,user);}
export async function logout(req,res){res.clearCookie('token');res.json({message:'Logged out'});}
export async function me(req,res){const user=await prisma.user.findUnique({where:{id:req.user.id}});res.json({user:safe(user)});}
export async function changePassword(req,res){const data=passwordUpdateSchema.parse(req.body);const user=await prisma.user.findUnique({where:{id:req.user.id}});if(!await bcrypt.compare(data.currentPassword,user.passwordHash))return res.status(400).json({message:'Current password is incorrect'});await prisma.user.update({where:{id:user.id},data:{passwordHash:await bcrypt.hash(data.newPassword,10)}});res.json({message:'Password updated successfully'});}
