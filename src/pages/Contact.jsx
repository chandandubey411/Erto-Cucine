import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const contactInfo = [
    { icon: FiPhone, label: 'Phone', value: '+91 9810422279', href: 'tel:+919810422279' },
    { icon: FiMail, label: 'Email', value: 'contact@ertocucine.com', href: 'mailto:contact@ertocucine.com' },
    { icon: FiMapPin, label: 'Address', value: 'B-17 Sector-2, Noida, UP 201301', href: 'https://maps.google.com/?q=Sector+2+Noida+UP' },
    { icon: FiClock, label: 'Hours', value: 'Mon–Sat: 9AM – 7PM', href: null },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Erto Cucine India | Delhi, Noida, Gurugram</title>
        <meta name="description" content="Contact Erto Cucine India for premium modular kitchens and wardrobes in Delhi, Noida, Greater Noida, Gurugram. Call +91 9810422279 or visit our Noida showroom." />
      </Helmet>

      <div className="relative pt-32 pb-16 bg-charcoal-900">
        <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&q=80" alt="Contact" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact' }]} />
          <h1 className="font-playfair text-5xl lg:text-6xl text-white font-bold mt-6 mb-4">Get In Touch</h1>
          <p className="text-white/60 text-lg">We'd love to hear about your project. Our team responds within 24 hours.</p>
        </div>
      </div>

      <section className="py-16 bg-beige-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <p className="section-label">Contact Information</p>
                <h2 className="font-playfair text-3xl font-bold text-charcoal-900 mb-4">Let's Talk</h2>
                <div className="gold-divider mb-6" />
                <p className="text-muted text-sm leading-relaxed">
                  Visit our showroom in Noida to see full-size display kitchens and wardrobes, browse 500+ finish samples, and meet with our design team in person.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-5 bg-white border border-beige-200 hover:border-gold-300 transition-colors">
                    <div className="w-10 h-10 bg-gold-50 flex items-center justify-center text-gold-600 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider mb-1">{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="text-sm font-semibold text-charcoal-800 hover:text-gold-600 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-charcoal-800">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919810422279?text=Hi, I'd like to discuss my interior project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 bg-green-500 hover:bg-green-600 text-white transition-colors"
              >
                <BsWhatsapp className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Chat on WhatsApp</p>
                  <p className="text-green-100 text-xs">Quick response guaranteed</p>
                </div>
              </a>

              {/* Service Areas */}
              <div className="p-5 bg-charcoal-900 text-white">
                <p className="text-xs text-gold-400 uppercase tracking-widest font-semibold mb-3">Service Areas</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Delhi', 'Noida', 'Greater Noida', 'Gurugram', 'Ghaziabad', 'Indirapuram'].map(city => (
                    <div key={city} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="text-gold-400">●</span> {city}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-beige-200 p-8 lg:p-10">
                <h2 className="font-playfair text-2xl font-bold text-charcoal-900 mb-6">Send Us a Message</h2>

                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="font-playfair text-2xl font-bold text-green-700 mb-2">Message Sent!</h3>
                    <p className="text-muted text-sm">We'll get back to you within 24 hours. Thank you!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">Full Name *</label>
                        <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="form-input" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="form-label">Phone *</label>
                        <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="form-input" placeholder="+91 XXXXXXXXXX" />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Email</label>
                      <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} type="email" className="form-input" placeholder="you@example.com" />
                    </div>
                    <div>
                      <label className="form-label">Service Interested In</label>
                      <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="form-input">
                        <option value="">Select a service</option>
                        {['Modular Kitchen', 'Sliding Wardrobe', 'Hinged Wardrobe', 'Walk-In Wardrobe', 'TV Unit', 'Bathroom Vanity', 'Luxury Furniture', 'Complete Home Interior', 'Other'].map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Message *</label>
                      <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="form-input resize-none" placeholder="Tell us about your project, space size, budget range, or any specific requirements..." />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      Send Message <FiArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Google Map Placeholder */}
          <div className="mt-10">
            <div className="relative h-72 bg-charcoal-100 border border-beige-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1!2d77.3!3d28.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzQ4LjAiTiA3N8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Erto Cucine Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute top-4 left-4 bg-white shadow-card px-4 py-3">
                <p className="font-semibold text-charcoal-900 text-sm">Erto Cucine India</p>
                <p className="text-muted text-xs">B-17 Sector-2, Noida, UP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
