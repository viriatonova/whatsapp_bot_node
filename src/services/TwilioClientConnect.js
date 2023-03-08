import { TWILIO_SID, TWILIO_TOKEN } from "../../api/settings.js";
import twilio from "twilio";

export const twilioClient = twilio(TWILIO_SID, TWILIO_TOKEN);
