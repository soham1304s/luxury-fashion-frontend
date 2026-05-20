import "dotenv/config";

export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 5000),
  mongoUri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/maison-vanta",
  jwtSecret: process.env.JWT_SECRET || "replace-with-a-long-secret",
  clientUrl: process.env.CLIENT_URL || "http://localhost:3000",
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || "",
  razorpayKeyId: process.env.RAZORPAY_KEY_ID || "",
  razorpayKeySecret: process.env.RAZORPAY_KEY_SECRET || "",
  paypalClientId: process.env.PAYPAL_CLIENT_ID || "",
  paypalClientSecret: process.env.PAYPAL_CLIENT_SECRET || "",
  shiprocketToken: process.env.SHIPROCKET_TOKEN || "",
  aftershipApiKey: process.env.AFTERSHIP_API_KEY || "",
  mailchimpApiKey: process.env.MAILCHIMP_API_KEY || "",
  klaviyoApiKey: process.env.KLAVIYO_API_KEY || ""
};
