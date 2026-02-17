import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck, CreditCard, MapPin, DollarSign, Headphones,
  Truck, Globe, Zap, BarChart3, Route, Radar, Clock, Lock, UserCheck, Star, Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import truckPulseImg from "@/assets/truckpulse-truck.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const trustItems = [
  { icon: ShieldCheck, label: "100% Verified Truck Owners" },
  { icon: CreditCard, label: "Secure Digital Payments" },
  { icon: MapPin, label: "Real-Time GPS Tracking" },
  { icon: DollarSign, label: "Transparent Pricing" },
  { icon: Headphones, label: "24/7 Customer Support" },
];

const stats = [
  { value: 1000, suffix: "+", label: "Trucks" },
  { value: 6000, suffix: "+", label: "Truck Owners" },
  { value: 1000, suffix: "+", label: "Transporters" },
  { value: 34, suffix: "+", label: "Branches" },
  { value: 10000, suffix: "+", label: "Monthly Transactions", prefix: "" },
];

const services = [
  { icon: Globe, title: "Online Logistics Management", desc: "Manage your entire freight operations digitally from a single dashboard." },
  { icon: Truck, title: "Instant Truck Booking", desc: "Book trucks in minutes with our AI-powered matching system." },
  { icon: Zap, title: "Road Transportation", desc: "Reliable pan-India road freight with real-time tracking." },
  { icon: BarChart3, title: "Fleet Optimization", desc: "Maximize fleet utilization with data-driven insights." },
];

const features = [
  { icon: Route, title: "AI Route Optimization", desc: "Smart routing to reduce transit time and fuel costs." },
  { icon: Radar, title: "Real-Time Tracking", desc: "Track every shipment with live GPS and status updates." },
  { icon: Clock, title: "Fast Booking Confirmation", desc: "Get confirmed trucks within minutes, not hours." },
  { icon: Lock, title: "Secure Escrow Payments", desc: "Protected payments released only on delivery confirmation." },
  { icon: UserCheck, title: "Dedicated Support Manager", desc: "A personal operations manager for your logistics needs." },
];

const testimonials = [
  { name: "Mohammed Irfan", role: "Logistics Manager, Steel Corp", text: "TruckPulse has reduced our transportation costs by 20%. The platform is incredibly efficient and the support team is outstanding." },
  { name: "Shimra Naaz", role: "Fleet Owner, 50+ Trucks", text: "Since joining TruckPulse, my trucks have 30% more utilization. The digital payments are fast and transparent." },
  { name: "Mohammed Imran", role: "Supply Chain Head, FMCG Ltd", text: "The real-time tracking and AI route optimization have transformed how we manage our supply chain across India." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-background">
        <div className="container grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-secondary md:text-5xl lg:text-6xl">
              India's Smart & Trusted{" "}
              <span className="gradient-primary-text">Truck Booking</span> Platform
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              TruckPulse uses technology to simplify road freight, reduce operational costs, and increase earnings for truck owners and transporters.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-primary text-lg font-bold text-primary-foreground shadow-blue">
                Book a Truck
              </Button>
              <Button size="lg" variant="outline" className="text-lg font-bold border-primary text-primary hover:bg-primary/5">
                Become a Partner
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-lg overflow-hidden">
              <motion.img
                src={truckPulseImg}
                alt="TruckPulse truck"
                className="w-full"
                style={{
                  mixBlendMode: 'multiply'
                }}
                animate={{ x: [50, -50] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "loop", ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-b border-border bg-card py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="rounded-xl gradient-primary p-3">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-12 text-center text-3xl font-extrabold text-secondary md:text-4xl"
          >
            Trusted by Thousands Across India
          </motion.h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm font-semibold text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted py-20">
        <div className="container">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-4 text-center text-3xl font-extrabold text-secondary md:text-4xl"
          >Our Services</motion.h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
            Comprehensive logistics solutions designed for modern Indian businesses.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group rounded-2xl bg-card p-8 shadow-card transition-shadow hover:shadow-blue"
              >
                <div className="mb-5 inline-flex rounded-xl gradient-primary p-3">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-4 text-center text-3xl font-extrabold text-secondary md:text-4xl"
          >Why TruckPulse?</motion.h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
            Built with cutting-edge technology to deliver the best logistics experience.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <div className="shrink-0 rounded-xl gradient-primary p-3 self-start">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-20">
        <div className="container">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-12 text-center text-3xl font-extrabold text-secondary md:text-4xl"
          >What Our Partners Say</motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="rounded-2xl bg-card p-8 shadow-card"
              >
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-sm font-bold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-20">
        <div className="container text-center">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-4 text-3xl font-extrabold text-primary-foreground md:text-4xl"
          >
            Ready to Transform Your Logistics?
          </motion.h2>
          <p className="mx-auto mb-8 max-w-lg text-lg text-primary-foreground/80">
            Join thousands of businesses and truck owners who trust TruckPulse for smarter, faster, and more reliable freight management.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-lg font-bold shadow-lg">
              Book a Truck
            </Button>
            <Button size="lg" className="text-lg font-bold bg-white text-secondary hover:bg-white/90 shadow-lg">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}