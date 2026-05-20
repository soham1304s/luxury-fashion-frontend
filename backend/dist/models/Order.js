import { Schema, model } from "mongoose";
const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    items: [
        {
            product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
            title: String,
            price: Number,
            quantity: Number,
            size: String,
            color: String
        }
    ],
    totals: {
        subtotal: Number,
        gst: Number,
        shipping: Number,
        discount: Number,
        total: Number
    },
    couponCode: String,
    giftCardCode: String,
    status: { type: String, enum: ["pending", "paid", "packed", "shipped", "delivered", "cancelled"], default: "pending" },
    payment: {
        provider: { type: String, enum: ["stripe", "razorpay", "paypal", "cod"] },
        providerOrderId: String,
        providerPaymentId: String,
        status: String
    },
    shippingAddress: Object,
    shipment: {
        provider: String,
        trackingId: String,
        aftershipSlug: String,
        events: [Object]
    }
}, { timestamps: true });
export const Order = model("Order", orderSchema);
