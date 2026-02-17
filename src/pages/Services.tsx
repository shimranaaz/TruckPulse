import { motion } from "framer-motion";
import { Globe, Truck, Zap, BarChart3, Route, Radar, Clock, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logisticsImg from "@/assets/service-logistics.png";
import bookingImg from "@/assets/service-booking.png";
import transportImg from "@/assets/service-transport.png";
import fleetImg from "@/assets/service-fleet.png";

const serviceImages: Record<string, string> = {
  logistics: logisticsImg,
  booking: bookingImg,
  transportation: transportImg,
  fleet: fleetImg,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  {
    id: "logistics",
    icon: Globe,
    title: "Online Logistics Management",
    desc: "Digitize your entire freight operations with our comprehensive logistics management platform.",
    features: ["Centralized dashboard for all shipments", "Automated documentation and invoicing", "Vendor management and performance tracking", "Analytics and reporting tools"],
  },
  {
    id: "booking",
    icon: Truck,
    title: "Instant Truck Booking",
    desc: "Book verified trucks in minutes with our AI-powered matching engine.",
    features: ["AI-matched truck recommendations", "Instant price quotes", "Multiple vehicle categories", "Advance and on-demand booking"],
  },
  {
    id: "transportation",
    icon: Zap,
    title: "Road Transportation",
    desc: "Reliable pan-India road freight with end-to-end visibility and tracking.",
    features: ["Full truckload (FTL) services", "Part truckload (PTL) options", "Multi-modal connectivity", "Pan-India coverage with 34+ branches"],
  },
  {
    id: "fleet",
    icon: BarChart3,
    title: "Fleet Optimization",
    desc: "Maximize your fleet utilization and earnings with data-driven insights.",
    features: ["Vehicle utilization analytics", "Predictive maintenance alerts", "Driver performance scoring", "Fuel efficiency optimization"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero-bg py-20">
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0}
            className="mb-4 text-4xl font-extrabold text-secondary md:text-5xl">
            Our <span className="gradient-primary-text">Services</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="mx-auto max-w-2xl text-lg text-muted-foreground">
            End-to-end logistics solutions powered by technology to meet every freight need across India.
          </motion.p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container space-y-20">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              id={s.id}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="mb-4 inline-flex rounded-xl gradient-primary p-4">
                  <s.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="mb-3 text-3xl font-extrabold text-secondary">{s.title}</h2>
                <p className="mb-6 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <img src={serviceImages[s.id]} alt={s.title} className="w-full max-w-sm drop-shadow-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-primary-foreground">Need a Custom Solution?</h2>
          <p className="mx-auto mb-8 max-w-lg text-primary-foreground/80">Our team can tailor logistics solutions to your specific business requirements.</p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="font-bold">Contact Us</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
