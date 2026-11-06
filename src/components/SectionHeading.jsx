export default function SectionHeading({ eyebrow, title, text, centered = false }) {
  return <div className={centered ? "section-heading text-center" : "section-heading"}>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 className="display-title">{title}</h2>{text && <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600">{text}</p>}</div>;
}