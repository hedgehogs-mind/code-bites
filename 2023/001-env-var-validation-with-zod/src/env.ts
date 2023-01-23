import * as dotenv from 'dotenv'
import { z } from "zod";

dotenv.config()

const EnvVars_Schema = z.object({
    PORT: z.coerce.number().min(1025),
    API_KEY: z.string().min(8).trim()
})

export const EnvVars = EnvVars_Schema.parse(process.env)

