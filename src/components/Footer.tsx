import { Link } from "react-router-dom";
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Headphones, ShieldCheck, ChevronRight, Globe, Zap, BarChart3 } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const services = [
  { label: "Online Logistics Management", to: "/services/logistics", Icon: Globe },
  { label: "Instant Truck Bookings", to: "/services/booking", Icon: Truck },
  { label: "Route Transportation", to: "/services/transportation", Icon: MapPin },
  { label: "Fleet Optimization", to: "/services/fleet", Icon: BarChart3 },
];

const socialLinks = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Instagram, href: "https://www.instagram.com/truck_pulse_?igsh=Yjk4YnJ4ZXEzbHdy" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#070d1f" }} className="text-white">
      {/* Main Footer */}
      <div className="container py-14">
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "1.25rem",
            padding: "2.5rem",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand + QR */}
            <div>
              {/* Logo */}
              <div className="mb-4 flex items-center gap-2">
                <div style={{ background: "rgba(59,130,246,0.15)", borderRadius: "0.5rem", padding: "6px" }}>
                  <Truck className="h-6 w-6" style={{ color: "#3b82f6" }} />
                </div>
                <span className="text-xl font-extrabold">
                  <span style={{ color: "#fff" }}>Truck</span>
                  <span style={{ color: "#3b82f6" }}>Pulse</span>
                </span>
              </div>

              <p className="mb-6 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                India's smart & trusted truck booking platform. Technology-driven logistics for businesses, transporters, and truck owners.
              </p>

              {/* Social Icons */}
              <div className="flex gap-3 mb-8">
                {socialLinks.map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "0.5rem",
                      padding: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(59,130,246,0.25)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                  >
                    <Icon className="h-4 w-4" style={{ color: "rgba(255,255,255,0.8)" }} />
                  </a>
                ))}
              </div>

              {/* QR Code */}
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Scan to Access Portal
              </p>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "0.875rem",
                  padding: "10px",
                  width: "fit-content",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
                }}
              >
                <img
                  src="/truckpulse-qr.png"
                  alt="TruckPulse QR Code"
                  style={{ width: "110px", height: "110px", borderRadius: "0.5rem", objectFit: "contain", display: "block" }}
                />
              </div>
              <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                truck-pulse-partners.base44.app
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="mb-2 text-sm font-bold uppercase tracking-wider"
                style={{ color: "#fff" }}
              >
                Quick Links
              </h4>
              <div style={{ width: "2.5rem", height: "2px", background: "#3b82f6", borderRadius: "2px", marginBottom: "1.25rem" }} />
              <ul className="space-y-0">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="flex items-center justify-between text-sm py-3 group"
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        borderBottom: "1px solid rgba(255,255,255,0.07)",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                    >
                      {link.label}
                      <ChevronRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4
                className="mb-2 text-sm font-bold uppercase tracking-wider"
                style={{ color: "#fff" }}
              >
                Services
              </h4>
              <div style={{ width: "2.5rem", height: "2px", background: "#3b82f6", borderRadius: "2px", marginBottom: "1.25rem" }} />
              <ul className="space-y-0">
                {services.map(({ label, to, Icon }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="flex items-center gap-3 text-sm py-3"
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        borderBottom: "1px solid rgba(255,255,255,0.07)",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                    >
                      <div
                        style={{
                          background: "rgba(59,130,246,0.12)",
                          borderRadius: "0.5rem",
                          padding: "6px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon className="h-4 w-4" style={{ color: "#3b82f6" }} />
                      </div>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="mb-2 text-sm font-bold uppercase tracking-wider"
                style={{ color: "#fff" }}
              >
                Contact
              </h4>
              <div style={{ width: "2.5rem", height: "2px", background: "#3b82f6", borderRadius: "2px", marginBottom: "1.25rem" }} />
              <ul className="space-y-0 mb-6">
                {[
                  { Icon: Mail, text: "info@truckpulse.in" },
                  { Icon: Phone, text: "+91 77084 62493" },
                  { Icon: MapPin, text: "Ambur, Tamil Nadu, India" },
                ].map(({ Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-3 text-sm py-3"
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(59,130,246,0.12)",
                        borderRadius: "0.5rem",
                        padding: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon className="h-4 w-4" style={{ color: "#3b82f6" }} />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>

              {/* Need Help Card */}
              <div
                style={{
                  background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  borderRadius: "0.875rem",
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    background: "#3b82f6",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Headphones className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Need Help?</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                    Our support team is available 24/7 to assist you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "0.875rem",
            marginTop: "1rem",
            padding: "1.25rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              style={{
                background: "rgba(59,130,246,0.12)",
                border: "1px solid rgba(59,130,246,0.25)",
                borderRadius: "0.5rem",
                padding: "6px",
              }}
            >
              <ShieldCheck className="h-5 w-5" style={{ color: "#3b82f6" }} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">100% Secure & Reliable</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                Your data and business are always safe with us.
              </p>
            </div>
          </div>
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            © 2026 TruckPulse. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="text-sm" style={{ color: "#3b82f6" }}
              onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
            >
              Terms of Service
            </Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
            <Link to="/privacy" className="text-sm" style={{ color: "#3b82f6" }}
              onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}