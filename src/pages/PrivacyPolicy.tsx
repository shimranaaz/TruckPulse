import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="gradient-hero-bg py-16">
        <div className="container text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl font-extrabold text-secondary md:text-5xl">
            Privacy <span className="gradient-primary-text">Policy</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.1, duration: 0.5 } } }} className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Last updated: January 1, 2026
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            {[
              { title: "1. Introduction", content: "TruckPulse ('we', 'our', or 'us') is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our platform, including our website, mobile applications, and related services. By using TruckPulse, you agree to the terms of this Privacy Policy." },
              { title: "2. Information We Collect", content: "We collect personal identification information (name, email address, phone number), business information (company name, GST number, business address), vehicle details for truck owners (truck type, registration number, permit details), transaction and payment information processed through our secure payment gateway, location data for real-time tracking of shipments with your consent, and usage data including pages visited, features used, and interaction patterns." },
              { title: "3. How We Use Your Information", content: "We use your information to provide and maintain our truck booking and logistics management services, process transactions and send related confirmations and invoices, match truck owners with transporters and businesses efficiently, enable real-time GPS tracking of shipments for transparency and safety, send service updates and important notices, improve our platform and analyze usage patterns, and comply with legal obligations and resolve disputes." },
              { title: "4. Data Security", content: "All data is encrypted in transit using industry-standard TLS/SSL protocols. Payment information is processed through PCI-DSS compliant payment gateways. We use escrow-based payment systems to protect both parties in every transaction. Access to personal data is restricted to authorized personnel only, and regular security audits and vulnerability assessments are conducted." },
              { title: "5. Your Rights", content: "You have the right to access a copy of the personal data we hold about you, request correction of inaccurate or incomplete data, request deletion of your personal data under certain conditions, restrict how we process your data, receive your data in a structured machine-readable format, and object to processing of your personal data for certain purposes. To exercise any of these rights, please contact us at info@truckpulse.in." },
              { title: "6. Cookies & Tracking", content: "We use essential cookies to ensure basic functionality of our platform. Analytics cookies help us understand how users interact with our services. You can control cookie preferences through your browser settings. Third-party services like Google Analytics may collect anonymized usage data. We do not sell or share cookie data with advertisers or third-party marketers." },
              { title: "7. Third-Party Sharing", content: "We do not sell, trade, or rent your personal information to third parties. Data may be shared with service providers who assist in operating our platform under strict data protection agreements. Payment processors receive only the information necessary to complete transactions. We may disclose information when required by law or to protect our legal rights." },
              { title: "8. Data Retention", content: "We retain your personal data for as long as your account is active or as needed to provide you with our services. We may also retain and use your data to comply with legal obligations, resolve disputes, and enforce our agreements. If you wish to delete your account, please contact us and we will process your request within 30 days, subject to legal and regulatory requirements." },
              { title: "9. Children's Privacy", content: "TruckPulse services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately and we will take steps to remove such information from our systems." },
              { title: "10. Changes to This Policy", content: "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the new policy on this page with an updated date and notifying registered users via email. Your continued use of TruckPulse after any changes constitutes your acceptance of the updated policy." },
              { title: "11. Contact Us", content: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at info@truckpulse.in or call +91 77084 62493. You may also visit us at our office in Ambur, Tamil Nadu, India." },
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