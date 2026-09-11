import { prisma } from '../config/db.js';
export async function dashboard(req,res){
  const stores=await prisma.store.findMany({
    where:{ownerId:req.user.id},
    include:{ratings:{include:{user:{select:{id:true,name:true,email:true,address:true}}}}}
  });
  const data=stores.map(s=>({
    store:{id:s.id,name:s.name,email:s.email,address:s.address},
    averageRating:Number((s.ratings.length?s.ratings.reduce((a,r)=>a+r.rating,0)/s.ratings.length:0).toFixed(2)),
    ratings:s.ratings.map(r=>({id:r.id,user:r.user,rating:r.rating,updatedAt:r.updatedAt}))
  }));
  res.json({stores:data});
}
