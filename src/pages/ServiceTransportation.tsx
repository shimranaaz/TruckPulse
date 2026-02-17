import { motion } from "framer-motion";
import { Zap, CheckCircle, MapPin, Shield, Clock, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import serviceImg from "@/assets/service-transport.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const features = [
  { icon: Route, title: "Full Truckload (FTL)", desc: "Dedicated trucks for large shipments across India with door-to-door service." },
  { icon: MapPin, title: "Part Truckload (PTL)", desc: "Cost-effective shared transport for smaller consignments." },
  { icon: Shield, title: "Insured Transit", desc: "Complete cargo insurance coverage for peace of mind during transit." },
  { icon: Clock, title: "On-Time Delivery", desc: "99%+ on-time delivery rate with real-time tracking and proactive alerts." },
];

const routes = [
  "Mumbai – Delhi", "Chennai – Bangalore", "Kolkata – Hyderabad",
  "Pune – Ahmedabad", "Jaipur – Lucknow", "Delhi – Chandigarh",
  "Bangalore – Kochi", "Hyderabad – Vizag",
];

export default function ServiceTransportation() {
  return (
    <>
      <section className="bg-background py-20">
        <div className="container grid items-center gap-12 md:grid-cols-2">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="mb-4 inline-flex rounded-xl gradient-primary p-4">
              <Zap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
              Road <span className="gradient-primary-text">Transportation</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Reliable pan-India road freight services with end-to-end visibility, GPS tracking, and guaranteed on-time delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-primary font-bold text-primary-foreground shadow-blue">Ship Now</Button>
              <Link to="/contact"><Button size="lg" variant="outline" className="font-bold border-primary text-primary">Get Rates</Button></Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex items-center justify-center">
            <img src={serviceImg} alt="Road Transportation" className="w-full max-w-md drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-secondary md:text-4xl">Transportation Services</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="rounded-2xl border border-border bg-card p-8 shadow-card">
                <div className="mb-4 inline-flex rounded-xl gradient-primary p-3"><f.icon className="h-6 w-6 text-primary-foreground" /></div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-secondary">Popular Routes</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {routes.map((r, i) => (
              <motion.div key={r} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="flex items-center gap-3 rounded-xl bg-card p-5 shadow-card">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="font-semibold text-foreground">{r}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-primary py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-primary-foreground">Need to Ship Freight?</h2>
          <p className="mx-auto mb-8 max-w-lg text-primary-foreground/80">Get competitive rates for road transportation across India.</p>
          <Link to="/contact"><Button size="lg" variant="secondary" className="font-bold">Get a Quote</Button></Link>
        </div>
      </section>
    </>
  );
}
