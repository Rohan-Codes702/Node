import {z} from "zod";
import dotenv from "dotenv";


const portSchema=z.coerce.number().min(1).max(65535).default(3000);

export const port=portSchema.parse(process.env.PORT);