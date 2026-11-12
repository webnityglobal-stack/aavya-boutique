
import { Link } from "react-router-dom";
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShoppingCart } from "lucide-react";

export default function Bag({ cart, onUpdateQuantity, onRemove }) {
    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const formatPrice = (price) =>
        `₹${Number(price).toLocaleString("en-IN")}`;

    if (cart.length === 0) {
        return (
            <main className="site-wrap section-pad min-h-[60vh] flex flex-col items-center justify-center text-center">
                <ShoppingBag size={55} strokeWidth={1} className="text-stone-400" />

                <h1 className="display-title mt-6">Your bag is empty</h1>

                <p className="mt-3 text-stone-500">
                    Looks like you haven't added anything to your bag yet.
                </p>

                <Link to="/shop" className="dark-button mt-7">
                    Explore Collection <ArrowRight size={18} />
                </Link>
            </main>
        );
    }

    return (
        <main className="site-wrap section-pad min-h-[65vh]">
            <div className="mb-10">
                <p className="eyebrow">YOUR AAVYA EDIT</p>
                <h1 className="display-title mt-3">Shopping Bag</h1>
                <p className="mt-2 text-stone-500">
                    {totalItems} {totalItems === 1 ? "item" : "items"} in your bag
                </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_360px]">

                {/* Cart products */}
                <div className="space-y-6">
                    {cart.map((item) => (
                        <div
                            key={item.cartKey}
                            className="flex gap-4 border-b border-stone-200 pb-6 sm:gap-6"
                        >
                            <Link
                                to={`/product/${item.id}`}
                                className="h-36 w-28 shrink-0 overflow-hidden bg-stone-100 sm:h-44 sm:w-36"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-cover"
                                />
                            </Link>

                            <div className="flex flex-1 flex-col justify-between min-w-0">
                                <div>
                                    <div className="flex justify-between gap-3">
                                        <div>
                                            <Link
                                                to={`/product/${item.id}`}
                                                className="font-semibold text-stone-900"
                                            >
                                                {item.name}
                                            </Link>

                                            <p className="mt-2 text-sm text-stone-500">
                                                Size: {item.selectedSize || "M"}
                                            </p>
                                        </div>

                                        <p className="font-semibold whitespace-nowrap">
                                            {formatPrice(item.price * item.quantity)}
                                        </p>
                                    </div>

                                    <p className="mt-2 text-sm text-stone-500">
                                        {formatPrice(item.price)} / item
                                    </p>
                                </div>

                                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex items-center border border-stone-300">
                                        <button
                                            onClick={() =>
                                                onUpdateQuantity(item.cartKey, -1)
                                            }
                                            disabled={item.quantity <= 1}
                                            className="p-2 disabled:opacity-30"
                                            aria-label="Decrease quantity"
                                        >
                                            <Minus size={15} />
                                        </button>

                                        <span className="min-w-8 text-center text-sm">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                onUpdateQuantity(item.cartKey, 1)
                                            }
                                            className="p-2"
                                            aria-label="Increase quantity"
                                        >
                                            <Plus size={15} />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => onRemove(item.cartKey)}
                                        className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800"
                                    >
                                        <Trash2 size={15} />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
                    >
                        <ShoppingCart size={17} />
                        Continue Shopping
                    </Link>
                </div>

                {/* Price summary */}
                <aside className="h-fit border border-stone-200 bg-white p-6">
                    <h2 className="text-xl font-semibold">Order Summary</h2>

                    <div className="mt-6 space-y-4 text-sm">
                        <div className="flex justify-between">
                            <span className="text-stone-500">Total Items</span>
                            <span>{totalItems}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-stone-500">Subtotal</span>
                            <span>{formatPrice(subtotal)}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-stone-500">Shipping</span>
                            <span className="text-stone-500">
                                Calculated at checkout
                            </span>
                        </div>

                        <div className="border-t border-stone-200 pt-4">
                            <div className="flex justify-between text-base font-semibold">
                                <span>Total</span>
                                <span>{formatPrice(subtotal)}</span>
                            </div>
                            <p className="mt-2 text-xs text-stone-500">
                                Shipping charges, if applicable, are not included.
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/checkout"
                        className="dark-button mt-7 w-full justify-center"
                    >
                        Proceed to Checkout
                        <ArrowRight size={18} />
                    </Link>

                    <p className="mt-4 text-center text-xs text-stone-500">
                        Thank you for shopping with Aavya Boutique.
                    </p>
                </aside>
            </div>
        </main>
    );
}
