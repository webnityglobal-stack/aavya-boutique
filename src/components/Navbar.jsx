import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

const links = [["Home", "/"], ["Shop", "/shop"], ["Collections", "/collections"], ["Our story", "/about"], ["Gallery", "/gallery"], ["Contact", "/contact"]];

export default function Navbar({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/95 backdrop-blur">
    <div className="site-wrap flex h-[76px] items-center justify-between">
      <button className="icon-btn md:hidden" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <Link to="/" className="brand-mark"><span className="brand-symbol">A</span><span><b>AAVYA</b><small>B O U T I Q U E</small></span></Link>
      <nav className="hidden items-center gap-7 md:flex">{links.map(([label, path]) => <NavLink key={path} to={path} end={path === "/"} className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>{label}</NavLink>)}</nav>
      <Link to="/shop" className="relative flex items-center gap-2 text-sm font-semibold"><ShoppingBag size={19}/><span className="hidden sm:inline">Bag</span>{cartCount > 0 && <span className="cart-count">{cartCount}</span>}</Link>
    </div>
    {open && <nav className="mobile-nav md:hidden">{links.map(([label, path]) => <NavLink onClick={() => setOpen(false)} key={path} to={path} end={path === "/"} className="mobile-link">{label}</NavLink>)}</nav>}
  </header>;
}