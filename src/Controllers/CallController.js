import { twilioClient } from '../services/TwilioClientConnect.js'
import { TWILIO_NUMBER } from '../../api/settings.js';

export const Call = async (req, res) => {
    twilioClient.messages.create({
        body: req.body.message,
        to: req.body.phone, // Text this number
        from: TWILIO_NUMBER, // From a valid Twilio number
    }).then((message) => {
        res.status(200).json({ "msg": message.sid })
    }).catch((error) => {
        res.status(error.status).json({
            "msg": error.message
        })
        console.log(error)
    });
}