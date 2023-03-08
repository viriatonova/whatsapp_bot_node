import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

export const TWILIO_SID = process.env.TWILIO_SID
export const TWILIO_TOKEN = process.env.TWILIO_TOKEN
export const TWILIO_NUMBER = process.env.TWILIO_NUMBER