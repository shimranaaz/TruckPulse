import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/truckpulse-logo.jpeg";

const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Online Logistics", to: "/services/logistics" },
      { label: "Instant Truck Booking", to: "/services/booking" },
      { label: "Road Transportation", to: "/services/transportation" },
      { label: "Fleet Optimization", to: "/services/fleet" },
    ],
  },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="TruckPulse" className="h-10 w-10 rounded-lg object-contain" />
          <span className="text-xl font-extrabold tracking-tight gradient-primary-text">TruckPulse</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={link.to}
                  className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                    isActive(link.to) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-56 rounded-xl border border-border bg-card p-2 shadow-card">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block rounded-lg px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                  isActive(link.to) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" className="font-semibold">
            Login
          </Button>
          <Button size="sm" className="gradient-primary font-semibold text-primary-foreground shadow-blue">
            Sign Up
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-foreground"
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.label}
                  to={child.to}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 pl-4 text-sm text-muted-foreground"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="mt-4 flex gap-3">
            <Button variant="ghost" size="sm" className="flex-1 font-semibold">Login</Button>
            <Button size="sm" className="flex-1 gradient-primary font-semibold text-primary-foreground">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
