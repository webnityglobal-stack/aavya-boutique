
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CreditCard,
  MapPin,
  ShieldCheck,
  ShoppingBag,
  Wallet,
} from "lucide-react";

export default function Checkout({ cart, onOrderPlaced }) {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const shipping = subtotal >= 2000 ? 0 : 99;
  const total = subtotal + shipping;

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!cart.length) {
      setError("Your shopping bag is empty.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!/^\d{6}$/.test(form.pincode)) {
      setError("Please enter a valid 6-digit PIN code.");
      return;
    }

    setLoading(true);

    // Demo payment simulation. No actual payment is collected.
    const order = {
      id: "AAV" + Date.now().toString().slice(-8),
      date: new Date().toISOString(),
      customer: { ...form },
      items: cart.map((item) => ({ ...item })),
      subtotal,
      shipping,
      total,
      paymentMethod,
      paymentStatus:
        paymentMethod === "cod" ? "Pay on Delivery" : "Demo Payment Successful",
      orderStatus: "Order Confirmed",
    };

    try {
      const existingOrders = JSON.parse(
        localStorage.getItem("aavya-orders") || "[]"
      );

      localStorage.setItem(
        "aavya-orders",
        JSON.stringify([order, ...existingOrders])
      );

      localStorage.setItem("aavya-last-order", JSON.stringify(order));

      onOrderPlaced();

      navigate("/order-success", { state: { order } });
    } catch {
      setError("Unable to save your order. Please try again.");
      setLoading(false);
    }
  };

  if (!cart.length) {
    return (
      <main className="site-wrap section-pad text-center min-h-[60vh] flex flex-col items-center justify-center">
        <ShoppingBag size={48} className="text-stone-400" />
        <h1 className="display-title mt-5">Your bag is empty</h1>
        <Link to="/shop" className="dark-button mt-6">
          Continue Shopping
        </Link>
      </main>
    );
  }

  const inputClass =
    "w-full border border-stone-300 bg-white px-4 py-3 text-sm outline-none focus:border-stone-800 rounded-none";

  const labelClass = "mb-2 block text-sm font-medium text-stone-700";

  return (
    <main className="site-wrap section-pad">
      <Link
        to="/bag"
        className="mb-7 inline-flex items-center gap-2 text-sm text-stone-600 hover:text-black"
      >
        <ArrowLeft size={17} /> Back to Bag
      </Link>

      <div className="mb-9">
        <p className="eyebrow">AAVYA BOUTIQUE</p>
        <h1 className="display-title mt-3">Checkout</h1>
        <p className="mt-2 text-stone-500">
          Complete your details to place your order.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

          {/* Customer Details */}
          <div className="space-y-8">

            <section>
              <div className="mb-5 flex items-center gap-3">
                <MapPin size={21} />
                <h2 className="text-xl font-semibold">Delivery Address</h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className={labelClass}>Full Name *</label>
                  <input
                    className={inputClass}
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input
                    className={inputClass}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>Mobile Number *</label>
                  <input
                    className={inputClass}
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={updateField}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass}>House / Street Address *</label>
                  <textarea
                    className={inputClass}
                    name="address"
                    value={form.address}
                    onChange={updateField}
                    placeholder="House number, street, area"
                    rows={3}
                    autoComplete="street-address"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass}>Landmark (Optional)</label>
                  <input
                    className={inputClass}
                    name="landmark"
                    value={form.landmark}
                    onChange={updateField}
                    placeholder="Nearby landmark"
                  />
                </div>

                <div>
                  <label className={labelClass}>City *</label>
                  <input
                    className={inputClass}
                    name="city"
                    value={form.city}
                    onChange={updateField}
                    placeholder="City"
                    autoComplete="address-level2"
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>State *</label>
                  <input
                    className={inputClass}
                    name="state"
                    value={form.state}
                    onChange={updateField}
                    placeholder="State"
                    autoComplete="address-level1"
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>PIN Code *</label>
                  <input
                    className={inputClass}
                    name="pincode"
                    value={form.pincode}
                    onChange={updateField}
                    placeholder="6-digit PIN code"
                    maxLength={6}
                    inputMode="numeric"
                    autoComplete="postal-code"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Payment */}
            <section className="border-t border-stone-200 pt-7">
              <div className="mb-5 flex items-center gap-3">
                <CreditCard size={21} />
                <h2 className="text-xl font-semibold">Payment Method</h2>
              </div>

              <div className="space-y-3">

                <label className={`flex cursor-pointer items-start gap-4 border p-4 ${paymentMethod === "cod" ? "border-stone-900 bg-stone-50" : "border-stone-200"}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mt-1 accent-stone-900"
                  />
                  <Wallet size={22} />
                  <div>
                    <p className="font-semibold">Cash on Delivery</p>
                    <p className="mt-1 text-sm text-stone-500">
                      Pay when your order arrives.
                    </p>
                  </div>
                </label>

                <label className={`flex cursor-pointer items-start gap-4 border p-4 ${paymentMethod === "razorpay" ? "border-stone-900 bg-stone-50" : "border-stone-200"}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="razorpay"
                    checked={paymentMethod === "razorpay"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mt-1 accent-stone-900"
                  />
                  <CreditCard size={22} />
                  <div>
                    <p className="font-semibold">Razorpay (Demo)</p>
                    <p className="mt-1 text-sm text-stone-500">
                      Simulate UPI, cards and online payment.
                    </p>
                    <p className="mt-2 text-xs text-amber-700">
                      Demo only – no actual money will be charged.
                    </p>
                  </div>
                </label>
              </div>
            </section>

            {error && (
              <p role="alert" className="border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {error}
              </p>
            )}
          </div>

          {/* Order Summary */}
          <aside className="h-fit border border-stone-200 bg-white p-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="mt-6 max-h-64 space-y-4 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.cartKey} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-16 object-cover bg-stone-100"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="mt-1 text-xs text-stone-500">
                      Size: {item.selectedSize} · Qty: {item.quantity}
                    </p>
                    <p className="mt-2 text-sm font-semibold">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4 border-t border-stone-200 pt-5 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-500">Subtotal</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-stone-500">Shipping</span>
                <span>
                  {shipping === 0 ? "FREE" : `₹${shipping}`}
                </span>
              </div>

              <div className="flex justify-between border-t border-stone-200 pt-4 text-base font-semibold">
                <span>Total Amount</span>
                <span>₹{total.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="dark-button mt-7 w-full justify-center disabled:opacity-60"
            >
              {loading
                ? "Placing Order..."
                : paymentMethod === "cod"
                  ? "Place Order"
                  : "Simulate Demo Payment"}
              {!loading && <ArrowRight size={18} />}
            </button>

            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-stone-500">
              <ShieldCheck size={16} />
              Demo checkout · No real payment
            </p>
          </aside>
        </div>
      </form>
    </main>
  );
}
