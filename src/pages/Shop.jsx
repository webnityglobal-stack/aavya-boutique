import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Shop({ onAdd }) {
  const [params] = useSearchParams();
  const [category, setCategory] = useState(params.get("category") || "All");
  const [sort, setSort] = useState("featured");
  const categories = ["All", "Ethnic", "Festive", "Everyday", "Western"];
  const shown = useMemo(() => {
    let list = category === "All" ? [...products] : products.filter(p => p.category === category);
    if (sort === "low") list.sort((a,b)=>a.price-b.price);
    if (sort === "high") list.sort((a,b)=>b.price-a.price);
    return list;
  }, [category, sort]);
  return <main className="site-wrap section-pad min-h-[65vh]"><SectionHeading eyebrow="THE FULL EDIT" title="Find your next favourite" text="Explore thoughtful styles for celebrations, slow days and everything in between."/><div className="mt-8 flex flex-col justify-between gap-4 border-y border-stone-200 py-4 sm:flex-row sm:items-center"><div className="flex flex-wrap gap-2">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={`filter-chip ${category===c?"selected":""}`}>{c}</button>)}</div><select value={sort} onChange={e=>setSort(e.target.value)} className="sort-select" aria-label="Sort products"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div><p className="my-5 text-base text-stone-500">{shown.length} pieces</p><div className="grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-3 lg:grid-cols-4 md:gap-6">{shown.map(p=><ProductCard key={p.id} product={p} onAdd={onAdd}/>)}</div></main>;
}