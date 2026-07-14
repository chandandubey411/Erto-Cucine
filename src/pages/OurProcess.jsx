import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const steps = [
  { icon: '📞', step:'01', title:'Free Consultation', color:'bg-gold-50', desc:'Call, WhatsApp, or fill out our form. Our design advisor will understand your requirements, budget, and preferences over a detailed discussion.' },
  { icon: '📍', step:'02', title:'Site Visit', color:'bg-beige-100', desc:'Our designer visits your home at a time convenient for you, assesses the space, and notes all structural constraints and opportunities.' },
  { icon: '📏', step:'03', title:'Precise Measurements', color:'bg-gold-50', desc:'We take detailed room measurements using laser measuring tools, ensuring every millimetre is accounted for in the design.' },
  { icon: '🎨', step:'04', title:'3D Design Planning', color:'bg-beige-100', desc:'Our CAD team creates a photorealistic 3D render of your space, showing exactly how your kitchen/wardrobe will look. Revisions until you\'re 100% happy.' },
  { icon: '🪵', step:'05', title:'Material Selection', color:'bg-gold-50', desc:'Visit our showroom or receive physical samples at home. Choose from 500+ laminates, veneer, acrylic finishes, handles, and hardware options.' },
  { icon: '💰', step:'06', title:'Transparent Quotation', color:'bg-beige-100', desc:'Receive a detailed itemised quotation — no hidden charges. Material cost, hardware cost, and installation fees listed clearly.' },
  { icon: '✅', step:'07', title:'Design Approval', color:'bg-gold-50', desc:'Review the final 3D design and quotation together. Sign off on the design, choose your preferred payment plan, and we begin.' },
  { icon: '🏭', step:'08', title:'Manufacturing', color:'bg-beige-100', desc:'Your order enters our Noida factory. Every board is cut, processed, edgebanded, finished, and assembled by skilled craftsmen using CNC precision equipment.' },
  { icon: '🔍', step:'09', title:'Quality Check', color:'bg-gold-50', desc:'A senior QC inspector examines every component — dimension accuracy, finish quality, hardware operation — before it leaves our facility.' },
  { icon: '🚚', step:'10', title:'Delivery', color:'bg-beige-100', desc:'Carefully packed and transported to your home in our dedicated delivery vehicles. Our team unpacks and carries all items to the installation area.' },
  { icon: '🔧', step:'11', title:'Professional Installation', color:'bg-gold-50', desc:'Our factory-trained installation team assembles and installs everything with precision, levelling, sealing, and hardware calibration included.' },
  { icon: '🤝', step:'12', title:'Project Handover', color:'bg-beige-100', desc:'Final walk-through with you. We demonstrate all mechanisms, hand over warranty cards, and record your satisfaction sign-off. You\'re home.' },
];

export default function OurProcess() {
  return (
    <>
      <Helmet>
        <title>Our Process | Erto Cucine India — From Consultation to Handover</title>
        <meta name="description" content="Discover Erto Cucine India's 12-step manufacturing and installation process — from free consultation to project handover. Premium modular kitchens and wardrobes Delhi NCR." />
      </Helmet>

      <div className="relative pt-32 pb-20 bg-charcoal-900">
        <img src="https://images.unsplash.com/photo-1585515320310-259814833e62?w=1600&q=80" alt="Our Process" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Our Process' }]} />
          <h1 className="font-playfair text-5xl lg:text-6xl text-white font-bold mt-6 mb-4">Our Process</h1>
          <p className="text-white/60 text-lg max-w-2xl">A transparent, structured 12-step journey from your first call to project handover. No surprises, no shortcuts.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label justify-center">How We Work</p>
            <h2 className="section-title">12 Steps to Your Perfect Interior</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.1, duration: 0.5 }}
                className={`${s.color} p-8 border border-beige-200 relative overflow-hidden group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="absolute top-4 right-4 text-gold-200 font-playfair text-5xl font-bold opacity-30">
                  {s.step}
                </div>
                <div className="text-3xl mb-4">{s.icon}</div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-600 mb-2">
                  Step {s.step}
                </div>
                <h3 className="font-playfair text-xl font-bold text-charcoal-900 mb-3">{s.title}</h3>
                <div className="gold-divider mb-4" />
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-10 bg-charcoal-900 text-center">
            <h2 className="font-playfair text-3xl text-white font-bold mb-4">Ready to Start Step 1?</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto text-sm">Book your FREE consultation today and begin the journey to your dream kitchen or wardrobe.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-consultation" className="btn-primary">
                Book Free Consultation <FiArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://wa.me/919810422279" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
                <BsWhatsapp className="w-4 h-4 text-green-400" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
