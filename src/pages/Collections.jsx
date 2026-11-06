import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { collections } from "../data/products";
export default function Collections() {
  return <main className="site-wrap section-pad"><SectionHeading eyebrow="A WORLD OF AAVYA" title="Collections with a feeling" text="Explore little worlds of style, each with its own mood and moment." centered/><div className="mt-10 space-y-7">{collections.map((c,i)=><Link key={c.title} to={`/shop?category=${c.category}`} className={`wide-collection ${i%2?"reverse":""}`}><img src={c.image} alt={c.title} loading="lazy"/><div><p className="eyebrow">THE {String(i+1).padStart(2,"0")} EDIT</p><h2 className="display-title mt-3">{c.title}</h2><p className="mt-4 text-base leading-7 text-stone-600">{c.subtitle}. Discover pieces selected to make getting dressed feel special.</p><span className="text-link mt-6 inline-flex">Explore collection →</span></div></Link>)}</div></main>;
}