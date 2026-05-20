import { Router } from "express";
export const integrationRouter = Router();
integrationRouter.post("/shiprocket/create-shipment", async (_req, res) => {
    res.json({ message: "Shiprocket shipment adapter ready; add SHIPROCKET_TOKEN to enable live calls" });
});
integrationRouter.post("/aftership/track", async (_req, res) => {
    res.json({ message: "AfterShip tracking adapter ready; add AFTERSHIP_API_KEY to enable live calls" });
});
integrationRouter.post("/mailchimp/subscribe", async (_req, res) => {
    res.json({ message: "Mailchimp subscription adapter ready" });
});
integrationRouter.post("/klaviyo/event", async (_req, res) => {
    res.json({ message: "Klaviyo event adapter ready for abandoned cart and lifecycle automation" });
});
