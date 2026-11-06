import { MessageCircle } from "lucide-react";
export default function WhatsAppButton() {
  return <a className="whatsapp-float" href="https://wa.me/910000000000?text=Hello%20Aavya%20Boutique%2C%20I%20would%20love%20to%20know%20more." target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={23}/></a>;
}