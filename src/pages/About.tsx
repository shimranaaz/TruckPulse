import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Award, Users, Building2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutBg from "@/assets/about-bg.jpg";
import truckpulsePromo from "@/assets/truckpulse-promo.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const whyChoose = [
  { icon: ShieldCheck, title: "Verified Network", desc: "Every truck owner and transporter is KYC verified." },
  { icon: Award, title: "Technology First", desc: "AI-powered matching, routing, and fleet optimization." },
  { icon: Users, title: "Pan-India Coverage", desc: "34+ branches covering all major logistics corridors." },
  { icon: Building2, title: "Enterprise Ready", desc: "Scalable solutions for businesses of all sizes." },
];

const timeline = [
  { year: "2022", title: "Founded", desc: "TruckPulse launched in Mumbai with a vision to digitize Indian road freight." },
  { year: "2023", title: "1,000 Trucks", desc: "Reached our first thousand verified trucks on the platform." },
  { year: "2024", title: "Pan-India Expansion", desc: "Expanded to 20+ branches across all major freight corridors." },
  { year: "2025", title: "AI Integration", desc: "Launched AI route optimization and predictive logistics tools." },
  { year: "2026", title: "10K+ Monthly Transactions", desc: "Crossed 10,000 monthly transactions milestone." },
];

const leaders = [
  { name: "MUHAMMED IRFAN", role: "CEO & Co-Founder", initial: "VM" },
  { name: "MUHAMMED IMRAN", role: "Head of Operations", initial: "SR" },
  { name: "MUHAMMED SALMAN", role: "CTO & Co-Founder", initial: "AN" },
];

const compliance = [
  "GST Registered Company",
  "Verified Truck Owner Network",
  "Secure Payment Gateway",
  "Data Privacy Compliant",
  "Insurance Coverage Options",
  "24/7 Operational Support",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={aboutBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={0}
            className="mb-4 text-4xl font-extrabold text-primary-foreground md:text-5xl"
          >
            About <span className="gradient-primary-text">TruckPulse</span>
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="mx-auto max-w-2xl text-lg text-primary-foreground/80"
          >
            We're building India's most trusted and technology-driven truck booking platform, connecting businesses with verified truck owners for efficient road freight.
          </motion.p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-4 text-center text-3xl font-extrabold text-foreground md:text-4xl"
          >
            See TruckPulse in Action
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground"
          >
            Watch how we're transforming India's road freight industry with technology-driven logistics solutions.
          </motion.p>
        </div>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
          className="w-full overflow-hidden"
        >
          <video
            src={truckpulsePromo}
            controls
            autoPlay
            loop
            playsInline
            className="w-full h-[70vh] object-contain"
            poster={aboutBg}
          />
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container grid gap-8 md:grid-cols-2">
          {[
            { icon: Target, title: "Our Mission", text: "To revolutionize India's road freight industry by providing a transparent, efficient, and technology-driven logistics platform that benefits all stakeholders — from truck owners to enterprise shippers." },
            { icon: Eye, title: "Our Vision", text: "To be India's largest and most trusted digital freight network, enabling seamless movement of goods across the country while maximizing earnings for transport partners." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="rounded-2xl border border-border bg-card p-8 shadow-card"
            >
              <div className="mb-4 inline-flex rounded-xl gradient-primary p-3">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="mb-3 text-2xl font-extrabold text-foreground">{item.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-muted py-20">
        <div className="container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-12 text-center text-3xl font-extrabold text-secondary md:text-4xl">Why Choose TruckPulse?</motion.h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, i) => (
              <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="rounded-2xl bg-card p-8 text-center shadow-card">
                <div className="mx-auto mb-4 inline-flex rounded-xl gradient-primary p-3">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-12 text-center text-3xl font-extrabold text-secondary md:text-4xl">Leadership Team</motion.h2>
          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-3">
            {leaders.map((l, i) => (
              <motion.div key={l.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="rounded-2xl bg-card p-8 text-center shadow-card">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full gradient-primary text-2xl font-extrabold text-primary-foreground">
                  {l.initial}
                </div>
                <h3 className="font-bold text-foreground">{l.name}</h3>
                <p className="text-sm text-muted-foreground">{l.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted py-20">
        <div className="container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-12 text-center text-3xl font-extrabold text-secondary md:text-4xl">Our Journey</motion.h2>
          <div className="mx-auto max-w-2xl space-y-8">
            {timeline.map((t, i) => (
              <motion.div key={t.year} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full gradient-primary text-sm font-extrabold text-primary-foreground">
                    {t.year.slice(-2)}
                  </div>
                  {i < timeline.length - 1 && <div className="mt-2 h-full w-0.5 bg-primary/20" />}
                </div>
                <div className="pb-8">
                  <p className="text-xs font-bold text-primary">{t.year}</p>
                  <h3 className="text-lg font-bold text-foreground">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20">
        <div className="container text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-8 text-3xl font-extrabold text-secondary md:text-4xl">Trust & Compliance</motion.h2>
          <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
            {compliance.map((c, i) => (
              <motion.div key={c} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-primary-foreground">Join the TruckPulse Network</h2>
          <p className="mx-auto mb-8 max-w-lg text-primary-foreground/80">Partner with us to access India's fastest-growing digital freight platform.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact"><Button size="lg" variant="secondary" className="font-bold">Get in Touch</Button></Link>
            <Link to="/services"><Button size="lg" className="font-bold bg-white text-secondary hover:bg-white/90">Explore Services</Button></Link>
          </div>
        </div>
      </section>
    </>
  );
}