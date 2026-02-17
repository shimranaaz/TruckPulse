import { Link } from "react-router-dom";
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const services = [
  { label: "Online Logistics Management", to: "/services/logistics" },
  { label: "Instant Truck Booking", to: "/services/booking" },
  { label: "Road Transportation", to: "/services/transportation" },
  { label: "Fleet Optimization", to: "/services/fleet" },
];

export default function Footer() {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Truck className="h-7 w-7 text-primary" />
              <span className="text-xl font-extrabold">TruckPulse</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed opacity-70">
              India's smart & trusted truck booking platform. Technology-driven logistics for businesses, transporters, and truck owners.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="rounded-lg bg-primary/10 p-2 transition-colors hover:bg-primary/20">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-60">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm opacity-70 transition-opacity hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-60">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link to={s.to} className="text-sm opacity-70 transition-opacity hover:opacity-100">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-60">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Mail className="h-4 w-4 shrink-0" /> info@truckpulse.in
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Phone className="h-4 w-4 shrink-0" /> +91 77084 62493
              </li>
              <li className="flex items-start gap-2 text-sm opacity-70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> Ambur, TamilNadu, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-50">
          <span>© 2026 TruckPulse. All rights reserved.</span>
          <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
