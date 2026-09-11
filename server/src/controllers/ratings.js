import { prisma } from '../config/db.js';
import { ratingSchema } from '../validators/index.js';
export async function upsertRating(req,res){const data=ratingSchema.parse(req.body);const store=await prisma.store.findUnique({where:{id:data.storeId}});if(!store)return res.status(404).json({message:'Store not found'});const rating=await prisma.rating.upsert({where:{userId_storeId:{userId:req.user.id,storeId:data.storeId}},create:{userId:req.user.id,storeId:data.storeId,rating:data.rating},update:{rating:data.rating}});res.json({rating});}
