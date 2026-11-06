import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export default function ProductCard({ product, onAdd }) {
  return <article className="group">
    <Link to={`/product/${product.id}`} className="product-image-wrap">
      <img src={product.image} alt={product.name} loading="lazy" className="product-image"/>
      {product.tag && <span className="product-tag">{product.tag}</span>}
      <span className="quick-view">View piece <ArrowUpRight size={16}/></span>
    </Link>
    <div className="flex items-start justify-between gap-3 pt-4"><div><p className="text-sm text-stone-500">{product.category}</p><Link to={`/product/${product.id}`} className="mt-1 block font-semibold">{product.name}</Link><p className="mt-2 text-base">₹{product.price.toLocaleString("en-IN")}</p></div><button onClick={() => onAdd?.(product)} className="add-button" aria-label={`Add ${product.name} to bag`}>+</button></div>
  </article>;
}