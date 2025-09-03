
import { motion } from "framer-motion";
import { ShieldCheck, Search, Settings, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="bg-white py-20 shadow-md">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Vendor-Neutral AML Solutions
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Helping companies evaluate, select, and implement top-tier ID verification,
            sanctions screening, and transaction monitoring tools.
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
