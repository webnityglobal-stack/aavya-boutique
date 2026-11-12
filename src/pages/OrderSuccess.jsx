
import { Link, useLocation } from "react-router-dom";
import { CheckCircle2, Package, ShoppingBag } from "lucide-react";

export default function OrderSuccess() {
  const location = useLocation();

  const order =
    location.state?.order ||
    JSON.parse(localStorage.getItem("aavya-last-order") || "null");

  if (!order) {
    return (
      <main className="site-wrap section-pad text-center">
        <h1 className="display-title">No order found</h1>
        <Link to="/shop" className="dark-button mt-6">
          Continue Shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="site-wrap section-pad min-h-[65vh]">
      <div className="mx-auto max-w-2xl text-center">
        <CheckCircle2
          size={65}
          strokeWidth={1.3}
          className="mx-auto text-green-600"
        />

        <p className="eyebrow mt-6">THANK YOU FOR SHOPPING</p>

        <h1 className="display-title mt-3">
          Order Confirmed!
        </h1>

        <p className="mt-4 leading-7 text-stone-500">
          Thank you for choosing Aavya Boutique.
          Your order has been placed successfully.
        </p>

        <div className="mt-8 border border-stone-200 bg-white p-6 text-left">
          <div className="flex items-center justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <p className="text-xs text-stone-500">ORDER NUMBER</p>
              <p className="mt-1 font-semibold">{order.id}</p>
            </div>
            <Package size={26} className="text-stone-500" />
          </div>

          <div className="space-y-4 py-5 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-stone-500">Customer</span>
              <span className="font-medium">{order.customer.name}</span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-stone-500">Mobile</span>
              <span>{order.customer.phone}</span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-stone-500">Payment</span>
              <span>{order.paymentMethod === "cod" ? "Cash on Delivery" : "Razorpay Demo"}</span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-stone-500">Payment Status</span>
              <span className="font-medium">{order.paymentStatus}</span>
            </div>

            <div className="flex justify-between gap-3">
              <span className="text-stone-500">Order Status</span>
              <span className="font-medium text-green-700">
                {order.orderStatus}
              </span>
            </div>
          </div>

          <div className="border-t border-stone-200 pt-5">
            <h3 className="mb-4 font-semibold">Delivery Address</h3>
            <p className="text-sm leading-6 text-stone-600">
              {order.customer.name}<br />
              {order.customer.address}
              {order.customer.landmark && `, ${order.customer.landmark}`}
              <br />
              {order.customer.city}, {order.customer.state} - {order.customer.pincode}
            </p>
          </div>

          <div className="mt-5 border-t border-stone-200 pt-5">
            <h3 className="mb-3 font-semibold">Ordered Items</h3>

            {order.items.map((item) => (
              <div key={item.cartKey} className="flex justify-between gap-3 py-2 text-sm">
                <span>
                  {item.name} ({item.selectedSize}) × {item.quantity}
                </span>
                <span className="font-medium whitespace-nowrap">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between border-t border-stone-200 pt-4 font-semibold">
            <span>Total Paid / Payable</span>
            <span>₹{order.total.toLocaleString("en-IN")}</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/shop" className="dark-button">
            <ShoppingBag size={17} /> Continue Shopping
          </Link>
        </div>

        <p className="mt-5 text-xs text-stone-500">
          This is a demo storefront. Orders are stored only in this browser.
        </p>
      </div>
    </main>
  );
}
