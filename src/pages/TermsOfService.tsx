import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TermsOfService() {
  return (
    <>
      <section className="gradient-hero-bg py-16">
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl font-extrabold text-secondary md:text-5xl">
            Terms of <span className="gradient-primary-text">Service</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.1, duration: 0.5 } } }} className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Last updated: February 12, 2026
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            {[
              { title: "1. Acceptance of Terms", content: "By accessing and using TruckPulse's platform, website, mobile applications, and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all users, including truck owners, transporters, businesses, and visitors." },
              { title: "2. Services Overview", content: "TruckPulse provides an online logistics platform that connects truck owners, transporters, and businesses for road freight management across India. Our services include truck booking, fleet optimization, shipment tracking, digital payments, and logistics management tools." },
              { title: "3. User Registration & Accounts", content: "To use certain features, you must create an account with accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must be at least 18 years old and legally authorized to enter into contracts to register." },
              { title: "4. Booking & Payments", content: "All truck bookings are subject to availability and confirmation. Pricing is transparent and displayed before booking confirmation. Payments are processed through our secure escrow system and released to service providers upon delivery confirmation. TruckPulse charges a platform fee for facilitating transactions." },
              { title: "5. User Responsibilities", content: "Users must provide accurate cargo details, pickup, and delivery information. Truck owners must ensure vehicles are properly maintained, insured, and comply with all applicable regulations. Users shall not misuse the platform for illegal activities, fraudulent bookings, or transporting prohibited goods." },
              { title: "6. Cancellation & Refund Policy", content: "Cancellations made before truck dispatch are eligible for a full refund minus processing fees. Cancellations after dispatch may incur partial charges based on distance covered. Refunds are processed within 7-10 business days to the original payment method." },
              { title: "7. Liability & Insurance", content: "TruckPulse acts as a technology platform connecting shippers and transporters. While we verify truck owners and maintain quality standards, the actual transportation service is provided by independent truck owners/operators. Cargo insurance options are available and recommended for all shipments." },
              { title: "8. Data Privacy & Security", content: "We collect and process personal data in accordance with our Privacy Policy and applicable data protection laws. Your data is encrypted and stored securely. We do not sell personal information to third parties. GPS tracking data is used solely for shipment monitoring and platform improvement." },
              { title: "9. Intellectual Property", content: "All content, trademarks, logos, and software on the TruckPulse platform are owned by TruckPulse and protected by intellectual property laws. Users may not copy, modify, or distribute any platform content without prior written consent." },
              { title: "10. Dispute Resolution", content: "Any disputes arising from these terms or platform usage shall be resolved through arbitration in Mumbai, Maharashtra, India, under the Arbitration and Conciliation Act, 1996. These terms are governed by the laws of India." },
              { title: "11. Modifications", content: "TruckPulse reserves the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the updated terms. We will notify registered users of material changes via email." },
              { title: "12. Contact", content: "For questions about these Terms of Service, contact us at legal@truckpulse.in or call +91 98765 43210." },
            ].map((section) => (
              <motion.div key={section.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <h2 className="text-xl font-bold text-secondary mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
