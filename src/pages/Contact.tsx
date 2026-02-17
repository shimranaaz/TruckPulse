import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const branches = [
  "Mumbai (HQ)", "Delhi NCR", "Bangalore", "Chennai", "Hyderabad",
  "Pune", "Ahmedabad", "Kolkata", "Jaipur", "Lucknow",
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@truckpulse.in" },
  { icon: Phone, label: "Phone", value: "+91 93600 62493" },
  { icon: MapPin, label: "Head Office", value: "Ambur, TamilNadu, India 635802" },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero-bg py-20">
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0}
            className="mb-4 text-4xl font-extrabold text-secondary md:text-5xl">
            Get in <span className="gradient-primary-text">Touch</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have questions or need a logistics solution? Reach out and our team will respond within 24 hours.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="mb-6 text-2xl font-extrabold text-secondary">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input placeholder="Your Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input type="email" placeholder="Email Address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <Input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <Textarea placeholder="Your Message" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <Button type="submit" size="lg" className="gradient-primary font-bold text-primary-foreground shadow-blue">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <h2 className="mb-6 text-2xl font-extrabold text-secondary">Contact Information</h2>
            <div className="mb-8 space-y-5">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="rounded-lg gradient-primary p-2.5">
                    <c.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{c.label}</p>
                    <p className="text-sm text-muted-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mb-4 text-lg font-bold text-secondary">Branch Locations</h3>
            <div className="flex flex-wrap gap-2">
              {branches.map((b) => (
                <span key={b} className="rounded-full bg-muted px-4 py-1.5 text-xs font-semibold text-muted-foreground">
                  {b}
                </span>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 flex h-64 items-center justify-center rounded-2xl bg-muted">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 h-10 w-10 text-primary/30" />
                <p className="text-sm text-muted-foreground">Map Integration Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
