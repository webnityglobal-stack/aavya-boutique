import { Link } from "react-router-dom";
import { Instagram, Facebook, ArrowUpRight } from "lucide-react";
export default function Footer() {
  return <footer className="bg-ink text-white">
    <div className="site-wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
      <div><p className="font-display text-3xl">Aavya Boutique</p><p className="mt-4 max-w-xs text-base leading-7 text-white/65">Thoughtfully chosen pieces for the many beautiful versions of you.</p><div className="mt-5 flex gap-4"><a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram/></a><a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook/></a></div></div>
      <div><h3 className="footer-heading">Explore</h3><div className="footer-links"><Link to="/shop">Shop all</Link><Link to="/collections">Collections</Link><Link to="/about">Our story</Link><Link to="/gallery">Gallery</Link></div></div>
      <div><h3 className="footer-heading">Need help?</h3><div className="footer-links"><Link to="/contact">Contact us</Link><a href="mailto:hello@aavyaboutique.in">Email us</a><a href="https://wa.me/910000000000" target="_blank" rel="noreferrer">WhatsApp</a></div></div>
      <div><h3 className="footer-heading">A note from us</h3><p className="text-base leading-7 text-white/65">New drops, styling notes and little moments from our world.</p><a className="mt-4 inline-flex items-center gap-2 text-base underline underline-offset-4" href="mailto:hello@aavyaboutique.in">Say hello <ArrowUpRight size={17}/></a></div>
    </div>
    <div className="border-t border-white/15"><div className="site-wrap flex flex-col justify-between gap-2 py-5 text-sm text-white/55 sm:flex-row"><span>© {new Date().getFullYear()} Aavya Boutique. All rights reserved.</span><span>Made with care, styled with love.</span></div></div>
  </footer>;
}