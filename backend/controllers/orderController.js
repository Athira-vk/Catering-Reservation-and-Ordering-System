// backend/controllers/orderController.js
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import razorpay from "../razorpay.js";

const placeOrder = async (req, res) => {
  const frontend_url = "https://catering-reservation-and-ordering-system-1xyt.onrender.com/";

  try {
    const { userId, items, amount, address } = req.body;

    // Validate the incoming data
    if (!userId || !items || !amount || !address) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
    });

    const razorpayOrder = await razorpay.orders.create({
      amount: amount * 100, // amount in paise
      currency: "INR",
      receipt: newOrder._id.toString(),
      payment_capture: 1,
    });

    // Save the order and update the user's cart
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { $set: { cartData: [] } });

    res.json({
      success: true,
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
      order_id: newOrder._id,
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });
  } catch (error) {
    console.error("Error placing order:", error);

    let errorMessage = "Internal Server Error";
    if (error?.response?.data?.error?.description) {
      errorMessage = `Razorpay error: ${error.response.data.error.description}`;
    } else if (error?.message) {
      errorMessage = error.message;
    }
    res.status(500).json({
      success: false,
      message: errorMessage,
    });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//user orders for frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId: userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Listing orders for admin panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//api for updating order status
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
