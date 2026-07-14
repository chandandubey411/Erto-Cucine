import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiCheck } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const steps = [
  { id: 1, title: 'Personal Details', desc: 'Tell us about yourself' },
  { id: 2, title: 'Project Type', desc: 'What do you need?' },
  { id: 3, title: 'Budget & Timeline', desc: 'Help us plan' },
  { id: 4, title: 'Confirm', desc: 'Review & submit' },
];

const services = [
  'Modular Kitchen', 'Sliding Wardrobe', 'Hinged Wardrobe', 'Walk-In Wardrobe',
  'Mirror Wardrobe', 'TV Unit', 'Bathroom Vanity', 'Luxury Furniture',
  'Kids Wardrobe', 'Complete Home Interior', 'Office Interior',
];

const budgets = ['Under ₹2 Lakh', '₹2–5 Lakh', '₹5–10 Lakh', '₹10–20 Lakh', 'Above ₹20 Lakh'];
const timelines = ['ASAP (1–2 months)', '2–4 months', '4–6 months', '6+ months'];

export default function BookConsultation() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', city: '',
    services: [], budget: '', timeline: '', notes: '',
  });

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }));
  const toggleService = (s) => setForm(f => ({
    ...f,
    services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s],
  }));

  const next = () => setStep(s => Math.min(s + 1, 4));
  const prev = () => setStep(s => Math.max(s - 1, 1));
  const submit = () => setDone(true);

  const progress = ((step - 1) / 3) * 100;

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-beige-50 pt-20 px-4">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-md">
          <div className="w-24 h-24 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-charcoal-900 text-4xl">
            ✅
          </div>
          <h2 className="font-playfair text-3xl font-bold text-charcoal-900 mb-3">Consultation Booked!</h2>
          <p className="text-muted mb-2">Thank you, <strong>{form.name}</strong>!</p>
          <p className="text-muted text-sm mb-8">Our design advisor will call you within 24 hours on <strong>{form.phone}</strong> to confirm your free consultation appointment.</p>
          <div className="flex flex-col gap-3">
            <Link to="/products" className="btn-primary justify-center">Browse Products <FiArrowRight className="w-4 h-4" /></Link>
            <Link to="/" className="btn-secondary justify-center">Back to Home</Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Book Free Consultation | Erto Cucine India</title>
        <meta name="description" content="Book a free home consultation with Erto Cucine India. Our expert designer will visit your home, take measurements, and create a custom 3D design." />
      </Helmet>

      <div className="relative pt-32 pb-16 bg-charcoal-900">
        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Book Consultation' }]} />
          <h1 className="font-playfair text-5xl text-white font-bold mt-6 mb-4">Book Free Consultation</h1>
          <p className="text-white/60 text-lg">Get expert design advice, a FREE site visit, and a custom 3D design — all at no cost.</p>
        </div>
      </div>

      <section className="py-16 bg-beige-50">
        <div className="max-w-3xl mx-auto px-4">

          {/* Steps Header */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              {steps.map((s, i) => (
                <div key={s.id} className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step > s.id ? 'bg-gold-500 text-charcoal-900' :
                    step === s.id ? 'bg-charcoal-900 text-white' :
                    'bg-beige-200 text-muted'
                  }`}>
                    {step > s.id ? <FiCheck className="w-5 h-5" /> : s.id}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-px mx-2 ${step > s.id ? 'bg-gold-500' : 'bg-beige-300'}`} style={{ width: '80px' }} />
                  )}
                </div>
              ))}
            </div>
            <div className="bg-beige-200 rounded-full h-1 mb-2">
              <motion.div className="bg-gold-500 h-1 rounded-full" animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
            </div>
            <p className="text-xs text-muted">Step {step} of 4 — {steps[step-1].title}</p>
          </div>

          {/* Form Card */}
          <div className="bg-white border border-beige-200 p-8 shadow-card">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>

              {step === 1 && (
                <div className="space-y-5">
                  <h2 className="font-playfair text-2xl font-bold text-charcoal-900 mb-6">Personal Details</h2>
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input value={form.name} onChange={e => update('name', e.target.value)} className="form-input" placeholder="Your full name" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Phone Number *</label>
                      <input value={form.phone} onChange={e => update('phone', e.target.value)} className="form-input" placeholder="+91 XXXXXXXXXX" required />
                    </div>
                    <div>
                      <label className="form-label">Email</label>
                      <input value={form.email} onChange={e => update('email', e.target.value)} type="email" className="form-input" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">City / Area *</label>
                    <select value={form.city} onChange={e => update('city', e.target.value)} className="form-input">
                      <option value="">Select your city</option>
                      {['Delhi', 'Noida', 'Greater Noida', 'Gurugram', 'Ghaziabad', 'Faridabad', 'Other'].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-playfair text-2xl font-bold text-charcoal-900 mb-2">Project Type</h2>
                  <p className="text-muted text-sm mb-6">Select all the services you're interested in (you can choose multiple)</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map(s => (
                      <button key={s} onClick={() => toggleService(s)} className={`p-3 text-sm border transition-all text-left ${
                        form.services.includes(s)
                          ? 'bg-gold-500 border-gold-500 text-charcoal-900 font-semibold'
                          : 'bg-white border-beige-300 text-charcoal-700 hover:border-gold-400'
                      }`}>
                        {form.services.includes(s) && '✓ '}{s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="font-playfair text-2xl font-bold text-charcoal-900 mb-6">Budget & Timeline</h2>
                  <div>
                    <label className="form-label">Approximate Budget</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      {budgets.map(b => (
                        <button key={b} onClick={() => update('budget', b)} className={`p-3 text-sm border transition-all ${form.budget === b ? 'bg-gold-500 border-gold-500 text-charcoal-900 font-semibold' : 'bg-white border-beige-300 text-charcoal-700 hover:border-gold-400'}`}>
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Project Timeline</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      {timelines.map(t => (
                        <button key={t} onClick={() => update('timeline', t)} className={`p-3 text-sm border transition-all ${form.timeline === t ? 'bg-gold-500 border-gold-500 text-charcoal-900 font-semibold' : 'bg-white border-beige-300 text-charcoal-700 hover:border-gold-400'}`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Additional Notes</label>
                    <textarea rows={3} value={form.notes} onChange={e => update('notes', e.target.value)} className="form-input resize-none" placeholder="Any specific requirements, floor plan notes, or questions..." />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="font-playfair text-2xl font-bold text-charcoal-900 mb-6">Review & Confirm</h2>
                  <div className="space-y-3 bg-beige-50 p-6 border border-beige-200 mb-6">
                    {[
                      { label:'Name', val: form.name },
                      { label:'Phone', val: form.phone },
                      { label:'City', val: form.city },
                      { label:'Services', val: form.services.join(', ') || 'Not selected' },
                      { label:'Budget', val: form.budget || 'Not specified' },
                      { label:'Timeline', val: form.timeline || 'Not specified' },
                    ].map(r => (
                      <div key={r.label} className="flex gap-4 text-sm">
                        <span className="text-muted w-24 flex-shrink-0">{r.label}:</span>
                        <span className="text-charcoal-800 font-medium">{r.val}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted text-xs leading-relaxed">By submitting, you agree to be contacted by Erto Cucine India for your consultation. We respect your privacy and never share your data.</p>
                </div>
              )}
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-beige-200">
              {step > 1 ? (
                <button onClick={prev} className="btn-secondary py-3 px-6">← Back</button>
              ) : <div />}

              {step < 4 ? (
                <button onClick={next} className="btn-primary py-3 px-6">
                  Continue → 
                </button>
              ) : (
                <button onClick={submit} className="btn-primary py-3 px-8">
                  Book Free Consultation <FiCalendar className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Alternative */}
          <div className="mt-8 text-center">
            <p className="text-muted text-sm mb-3">Or reach us directly:</p>
            <div className="flex gap-4 justify-center">
              <a href="tel:+919810422279" className="btn-secondary text-sm py-2.5 px-5">📞 Call Now</a>
              <a href="https://wa.me/919810422279" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors">
                <BsWhatsapp className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
