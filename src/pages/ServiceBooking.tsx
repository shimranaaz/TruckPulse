import { motion } from "framer-motion";
import { Truck, CheckCircle, Zap, Clock, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import serviceImg from "@/assets/service-booking.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const features = [
  { icon: Zap, title: "AI-Powered Matching", desc: "Our intelligent system matches your cargo with the most suitable truck in real-time." },
  { icon: Clock, title: "Book in Minutes", desc: "Get instant quotes and confirmed bookings within minutes, not hours." },
  { icon: Shield, title: "Verified Fleet", desc: "Every truck on our platform is verified for safety, insurance, and compliance." },
  { icon: MapPin, title: "Pan-India Coverage", desc: "Access trucks across India with coverage in 34+ branches nationwide." },
];

const truckTypes = [
  "Open Body Trucks", "Closed Container Trucks", "Flatbed Trailers",
  "Refrigerated Trucks", "Mini Trucks (LCV)", "Multi-Axle Vehicles",
];

const steps = [
  { step: "1", title: "Enter Details", desc: "Provide pickup, drop location, and cargo details." },
  { step: "2", title: "Get Quotes", desc: "Receive instant AI-matched truck options with pricing." },
  { step: "3", title: "Confirm Booking", desc: "Select your preferred truck and confirm the booking." },
  { step: "4", title: "Track & Deliver", desc: "Track your shipment in real-time until delivery." },
];

export default function ServiceBooking() {
  return (
    <>
      <section className="bg-background py-20">
        <div className="container grid items-center gap-12 md:grid-cols-2">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="mb-4 inline-flex rounded-xl gradient-primary p-4">
              <Truck className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
              Instant Truck <span className="gradient-primary-text">Booking</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Book verified trucks in minutes with our AI-powered matching engine. Choose from a wide range of vehicle types for any cargo need.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-primary font-bold text-primary-foreground shadow-blue">Book a Truck Now</Button>
              <Link to="/contact"><Button size="lg" variant="outline" className="font-bold border-primary text-primary">Get a Quote</Button></Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex items-center justify-center">
            <img src={serviceImg} alt="Truck Booking" className="w-full max-w-md drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-secondary md:text-4xl">How It Works</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div key={s.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full gradient-primary text-xl font-extrabold text-primary-foreground">{s.step}</div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-secondary md:text-4xl">Features</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="rounded-2xl bg-card p-8 shadow-card">
                <div className="mb-4 inline-flex rounded-xl gradient-primary p-3"><f.icon className="h-6 w-6 text-primary-foreground" /></div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-extrabold text-secondary">Available Truck Types</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {truckTypes.map((t, i) => (
              <motion.div key={t} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="flex items-center gap-3 rounded-xl border border-border bg-card p-5">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="font-semibold text-foreground">{t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-primary py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-primary-foreground">Ready to Book Your Truck?</h2>
          <p className="mx-auto mb-8 max-w-lg text-primary-foreground/80">Get instant quotes and book verified trucks in just minutes.</p>
          <Button size="lg" variant="secondary" className="font-bold">Book Now</Button>
        </div>
      </section>
    </>
  );
}
