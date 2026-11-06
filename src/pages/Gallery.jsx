import SectionHeading from "../components/SectionHeading";
const images = [
"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=85"
];
export default function Gallery() {
 return <main className="site-wrap section-pad"><SectionHeading eyebrow="LIFE IN OUR LENS" title="The Aavya moodboard" text="A collection of colours, textures and moments that inspire our world." centered/><div className="gallery-grid mt-10">{images.map((src,i)=><div className="gallery-item" key={src}><img src={src} alt={`Aavya fashion moodboard ${i+1}`} loading="lazy"/></div>)}</div><section className="mt-16"><SectionHeading eyebrow="A LITTLE MOTION" title="Behind the feeling" text="A fashion film moodboard. Replace this sample clip with your own boutique campaign video when ready."/></section><div className="video-frame mt-7"><video controls playsInline preload="metadata" poster="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=85"><source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_25fps.mp4" type="video/mp4"/>Your browser does not support video.</video></div></main>;
}