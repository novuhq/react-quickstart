import { inAppNotification, createSub } from "../novu/novu.js";

export const createNotif = async (req, res) => {
    const { description } = req.body
    try {
        await inAppNotification(description);
        res.status(201).json({ message: 'success!' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}