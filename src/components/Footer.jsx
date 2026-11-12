
import { Link } from "react-router-dom";
import { Instagram, Facebook, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="site-wrap grid grid-cols-2 gap-x-5 gap-y-9 py-10 sm:gap-8 sm:py-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:gap-10 md:py-14">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-3xl">Aavya Boutique</p>

          <p className="mt-3 max-w-xs text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
            Thoughtfully chosen pieces for the many beautiful versions of you.
          </p>

          <div className="mt-5 flex items-center gap-5">
            <a
              aria-label="Instagram"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white/60"
            >
              <Instagram size={22} />
            </a>

            <a
              aria-label="Facebook"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white/60"
            >
              <Facebook size={22} />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="footer-heading">Explore</h3>

          <div className="footer-links">
            <Link to="/shop">Shop all</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/about">Our story</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
        </div>

        {/* Help */}
        <div>
          <h3 className="footer-heading">Need help?</h3>

          <div className="footer-links">
            <Link to="/contact">Contact us</Link>
            <a href="mailto:hello@aavyaboutique.in">Email us</a>
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Note */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="footer-heading">A note from us</h3>

          <p className="max-w-sm text-sm leading-6 text-white/65 sm:text-base sm:leading-7">
            New drops, styling notes and little moments from our world.
          </p>

          <a
            className="mt-4 inline-flex items-center gap-2 text-sm underline underline-offset-4 transition hover:text-white/60 sm:text-base"
            href="mailto:hello@aavyaboutique.in"
          >
            Say hello <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/15">
        <div className="site-wrap flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-white/55 sm:flex-row sm:text-left sm:text-sm">
          <span>
            © {new Date().getFullYear()} Aavya Boutique. All rights reserved.
          </span>

          <span>Made with care, styled with love.</span>
        </div>
      </div>
    </footer>
  );
}
