import { motion } from "framer-motion";
import { BarChart3, CheckCircle, TrendingUp, Wrench, Users, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import serviceImg from "@/assets/service-fleet.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const features = [
  { icon: TrendingUp, title: "Utilization Analytics", desc: "Track and improve vehicle utilization rates with detailed analytics dashboards." },
  { icon: Wrench, title: "Predictive Maintenance", desc: "Get maintenance alerts before breakdowns happen using AI-powered predictions." },
  { icon: Users, title: "Driver Performance", desc: "Monitor and score driver performance for safety, efficiency, and compliance." },
  { icon: Fuel, title: "Fuel Optimization", desc: "Reduce fuel costs with route optimization and driving behavior analysis." },
];

const benefits = [
  "Increase fleet utilization by up to 30%",
  "Reduce maintenance costs by 25%",
  "Improve driver safety and compliance",
  "Real-time fleet visibility and alerts",
  "Data-driven decision making",
  "Reduce fuel consumption by 15%",
];

export default function ServiceFleet() {
  return (
    <>
      <section className="bg-background py-20">
        <div className="container grid items-center gap-12 md:grid-cols-2">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="mb-4 inline-flex rounded-xl gradient-primary p-4">
              <BarChart3 className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
              Fleet <span className="gradient-primary-text">Optimization</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Maximize your fleet utilization and earnings with data-driven insights, predictive maintenance, and AI-powered optimization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-primary font-bold text-primary-foreground shadow-blue">Get Started</Button>
              <Link to="/contact"><Button size="lg" variant="outline" className="font-bold border-primary text-primary">Learn More</Button></Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="flex items-center justify-center">
            <img src={serviceImg} alt="Fleet Optimization" className="w-full max-w-md drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-secondary md:text-4xl">Optimization Features</h2>
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
        <div className="container grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-extrabold text-secondary">Key Benefits</h2>
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
            <p className="text-5xl font-extrabold mb-2">30%</p>
            <p className="text-lg font-semibold opacity-80">Increase in Fleet Utilization</p>
          </div>
        </div>
      </section>

      <section className="gradient-primary py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-primary-foreground">Optimize Your Fleet Today</h2>
          <p className="mx-auto mb-8 max-w-lg text-primary-foreground/80">Start maximizing your fleet's potential with TruckPulse optimization tools.</p>
          <Link to="/contact"><Button size="lg" variant="secondary" className="font-bold">Contact Us</Button></Link>
        </div>
      </section>
    </>
  );
}
