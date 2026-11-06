import { Link } from "react-router-dom";
import { ArrowRight, Heart, Truck, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import { products, collections } from "../data/products";

export default function Home({ onAdd }) {
  return <>
    <section className="hero">
      <img className="hero-image" src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2000&q=90" alt="Elegant Indian occasionwear editorial" />
      <div className="hero-shade"/>
      <div className="site-wrap hero-content"><p className="eyebrow text-white/85">THE NEW SEASON EDIT</p><h1 className="hero-title">Wear your<br/><em>own story.</em></h1><p className="mt-5 max-w-md text-lg leading-8 text-white/90">Beautifully considered styles for everyday moments and unforgettable celebrations.</p><Link to="/shop" className="light-button mt-8">Explore the collection <ArrowRight size={18}/></Link></div>
      <div className="hero-note">A LITTLE MORE YOU, EVERY DAY</div>
    </section>
    <section className="site-wrap section-pad"><SectionHeading eyebrow="CURATED FOR YOU" title="Find your kind of beautiful" text="From easy everyday favourites to pieces that make an entrance — discover the edit that feels like you."/><div className="mt-9 grid gap-5 md:grid-cols-3">{collections.map((item, i) => <Link key={item.title} to={`/shop?category=${item.category}`} className={`collection-card collection-${i}`}><img src={item.image} alt={item.title} loading="lazy"/><div className="collection-overlay"><p>{item.subtitle}</p><h3>{item.title}</h3><span>Explore edit <ArrowRight size={16}/></span></div></Link>)}</div></section>
    <section className="bg-[#f0e9e0]"><div className="site-wrap section-pad"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="THE AAVYA EDIT" title="Pieces to fall for" text="A few favourites we think you'll love."/><Link to="/shop" className="text-link">Shop everything <ArrowRight size={17}/></Link></div><div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-4 md:gap-6">{products.slice(0,4).map(p=><ProductCard key={p.id} product={p} onAdd={onAdd}/>)}</div></div></section>
    <section className="site-wrap section-pad"><div className="story-banner"><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=85" alt="Fashion styling and wardrobe inspiration" loading="lazy"/><div className="story-copy"><p className="eyebrow">AAVYA, IN A FEELING</p><h2 className="display-title">Style that feels<br/><em>like yourself.</em></h2><p className="mt-4 max-w-md text-base leading-7 text-stone-600">We believe the best outfit is the one that lets you feel comfortable, confident and completely yourself.</p><Link to="/about" className="dark-button mt-7">Get to know us <ArrowRight size={17}/></Link></div></div></section>
    <section className="site-wrap grid gap-6 border-t border-stone-200 py-9 sm:grid-cols-3">{[[Heart,"Thoughtful style","Pieces picked with care."],[Truck,"A little delivery joy","Complimentary shipping over ₹2,999."],[Sparkles,"Made for your moments","Looks for everyday and occasion."]].map(([Icon,title,desc])=><div key={title} className="flex items-center gap-4"><Icon className="text-rose" size={27}/><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-base text-stone-500">{desc}</p></div></div>)}</section>
  </>;
}