import 'dotenv/config';import app from './app.js';import {prisma} from './config/db.js';
const port=process.env.PORT||5000;app.listen(port,()=>console.log(`API running on http://localhost:${port}`));
process.on('SIGINT',async()=>{await prisma.$disconnect();process.exit(0)});process.on('SIGTERM',async()=>{await prisma.$disconnect();process.exit(0)});
