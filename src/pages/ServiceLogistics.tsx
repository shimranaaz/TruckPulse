import { motion } from "framer-motion";
import { Globe, CheckCircle, BarChart3, FileText, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import serviceImg from "@/assets/service-logistics.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const features = [
  { icon: BarChart3, title: "Centralized Dashboard", desc: "Monitor all your shipments, vendors, and transactions from a single unified dashboard." },
  { icon: FileText, title: "Automated Documentation", desc: "Generate invoices, e-way bills, and compliance documents automatically." },
  { icon: Users, title: "Vendor Management", desc: "Track vendor performance, manage contracts, and streamline onboarding." },
  { icon: Settings, title: "Custom Workflows", desc: "Configure logistics workflows tailored to your business processes." },
];

const benefits = [
  "Reduce manual paperwork by 80%",
  "Real-time visibility across the supply chain",
  "Automated compliance and GST documentation",
  "Multi-branch operations management",
  "Performance analytics and reporting",
  "Seamless integration with existing ERP systems",
];

export default function ServiceLogistics() {
  return (
    <>
      <section className="bg-background py-20">
        <div className="container grid items-center gap-12 md:grid-cols-2">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="mb-4 inline-flex rounded-xl gradient-primary p-4">
              <Globe className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
              Online Logistics <span className="gradient-primary-text">Management</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Digitize your entire freight operations with our comprehensive logistics management platform. From booking to delivery, manage everything online.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-primary font-bold text-primary-foreground shadow-blue">Get Started</Button>
              <Link to="/contact"><Button size="lg" variant="outline" className="font-bold border-primary text-primary">Request Demo</Button></Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex items-center justify-center">
            <img src={serviceImg} alt="Logistics Management" className="w-full max-w-md drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-12 text-center text-3xl font-extrabold text-secondary md:text-4xl">
            Platform Features
          </motion.h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="rounded-2xl border border-border bg-card p-8 shadow-card">
                <div className="mb-4 inline-flex rounded-xl gradient-primary p-3">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="container grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-extrabold text-secondary">Why Go Digital?</h2>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <motion.li key={b} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium text-foreground">{b}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl gradient-primary p-12 text-center text-primary-foreground">
            <p className="text-5xl font-extrabold mb-2">80%</p>
            <p className="text-lg font-semibold opacity-80">Reduction in Manual Paperwork</p>
          </div>
        </div>
      </section>

      <section className="gradient-primary py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-primary-foreground">Ready to Digitize Your Logistics?</h2>
          <p className="mx-auto mb-8 max-w-lg text-primary-foreground/80">Start managing your freight operations online with TruckPulse.</p>
          <Link to="/contact"><Button size="lg" variant="secondary" className="font-bold">Contact Us</Button></Link>
        </div>
      </section>
    </>
  );
}
