import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import AnimatedCounter from '../components/AnimatedCounter/AnimatedCounter';
import CTA from '../components/CTA/CTA';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const timeline = [
  { year: '2009', title: 'Founded', desc: 'Erto Cucine India established in Noida with a vision to bring European kitchen and wardrobe design to Indian homes.' },
  { year: '2012', title: 'First Showroom', desc: 'Opened our first showroom in Sector-2 Noida, displaying full-size modular kitchen and wardrobe setups.' },
  { year: '2015', title: 'Hettich Partnership', desc: 'Became an authorised Hettich hardware partner, guaranteeing German precision in every project.' },
  { year: '2018', title: '1,000 Projects', desc: 'Completed our 1,000th home interior project — a milestone that cemented our reputation in Delhi NCR.' },
  { year: '2021', title: 'Expanded Range', desc: 'Launched 150+ product catalogue including luxury furniture, bathroom vanities, and TV units.' },
  { year: '2024', title: '5,000+ Families', desc: 'Today we\'ve transformed over 5,000 homes across Delhi, Noida, Greater Noida & Gurugram.' },
];

const team = [
  { name: 'Rajesh Kumar', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80' },
  { name: 'Priya Sharma', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80' },
  { name: 'Amit Verma', role: 'Head of Manufacturing', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  { name: 'Sunita Nair', role: 'Client Relations', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
];

const stats = [
  { value: 5000, suffix: '+', label: 'Homes Transformed' },
  { value: 15, suffix: '+', label: 'Years in Business' },
  { value: 50, suffix: '+', label: 'Design Experts' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

const whyUs = [
  { icon: '🏭', title: 'In-House Manufacturing', desc: 'Our own manufacturing facility in Noida ensures quality control at every stage — from raw board cutting to final finishing.' },
  { icon: '🎨', title: 'Expert Design Team', desc: '50+ trained interior designers and CAD specialists who create photorealistic 3D designs for client approval before any manufacturing begins.' },
  { icon: '🤝', title: 'End-to-End Service', desc: 'From site visit to key handover — we handle consultation, design, manufacturing, delivery, and installation.' },
  { icon: '⚙️', title: 'German Hardware', desc: 'We exclusively use Hettich and Hafele hardware — the global gold standard for furniture fittings.' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Erto Cucine India | Premium Interior Solutions Since 2009</title>
        <meta name="description" content="Learn about Erto Cucine India — premium modular kitchen and wardrobe specialists serving Delhi NCR since 2009. Discover our story, team, and manufacturing process." />
      </Helmet>

      {/* Hero */}
      <div className="relative pt-32 pb-20 bg-charcoal-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=80" alt="About" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <h1 className="font-playfair text-5xl lg:text-6xl text-white font-bold mt-6 mb-4">Our Story</h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Building beautiful homes for Indian families since 2009. From a small Noida workshop to Delhi NCR's most trusted premium interior brand.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <p className="section-label">Who We Are</p>
              <h2 className="section-title mb-4">India's Premium Modular Interior Brand</h2>
              <div className="gold-divider mb-6" />
              <p className="text-muted text-sm leading-loose mb-4">
                Erto Cucine India was founded in 2009 with a singular mission: to make European-standard modular kitchens and wardrobes accessible to the discerning Indian homeowner. What began as a small workshop in Sector-2, Noida has grown into Delhi NCR's most trusted premium interior solutions company.
              </p>
              <p className="text-muted text-sm leading-loose mb-4">
                We believe that every Indian home deserves a kitchen that is not just functional, but beautiful — and a wardrobe that is not just storage, but an expression of personal style. Our team of 50+ designers, craftsmen, and installation experts work tirelessly to bring this vision to life, one home at a time.
              </p>
              <p className="text-muted text-sm leading-loose mb-8">
                Today, with over 5,000 completed projects and a decade-long structural warranty on every installation, we stand proudly as the modular interior partner of choice for homeowners, architects, and interior designers across Delhi, Noida, Greater Noida, and Gurugram.
              </p>
              <Link to="/book-consultation" className="btn-primary">
                Start Your Project <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div data-aos="fade-left">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" alt="Erto Cucine manufacturing" className="w-full h-96 lg:h-[500px] object-cover" />
                <div className="absolute -bottom-6 -left-6 w-48 h-32 bg-gold-500 flex items-center justify-center text-center p-4">
                  <div>
                    <p className="font-playfair text-3xl font-bold text-charcoal-900">15+</p>
                    <p className="text-xs text-charcoal-700 uppercase tracking-wider">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-charcoal-900">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="text-center">
                <p className="font-playfair text-4xl lg:text-5xl font-bold text-gold-400 mb-2">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-white/60 text-sm uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label justify-center">Our Journey</p>
            <h2 className="section-title">15 Years of Excellence</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-beige-300 hidden lg:block" />
            <div className="space-y-8 lg:space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={i * 100}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : ''}`}>
                    <p className="text-gold-500 font-bold text-sm tracking-widest mb-1">{item.year}</p>
                    <h3 className="font-playfair text-xl font-bold text-charcoal-900 mb-2">{item.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-charcoal-900 font-bold text-sm flex-shrink-0 z-10">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-up" className="p-10 bg-charcoal-900 text-white">
              <div className="text-gold-400 text-3xl mb-4">🎯</div>
              <h2 className="font-playfair text-2xl font-bold text-white mb-4">Our Mission</h2>
              <div className="gold-divider mb-4" />
              <p className="text-white/70 text-sm leading-loose">
                To deliver premium modular interior solutions that transform Indian homes through exceptional design, uncompromising material quality, and personalised service — making every customer feel that their space is truly special.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="p-10 bg-gold-500">
              <div className="text-charcoal-900 text-3xl mb-4">🔭</div>
              <h2 className="font-playfair text-2xl font-bold text-charcoal-900 mb-4">Our Vision</h2>
              <div className="w-16 h-0.5 bg-charcoal-900/30 mb-4" />
              <p className="text-charcoal-800 text-sm leading-loose">
                To become India's most trusted premium modular interior brand — recognised not just for beautiful products, but for the lifetime partnerships we build with every family whose home we touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label justify-center">Our Advantage</p>
            <h2 className="section-title">Why Homeowners Choose Us</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="bg-white p-8 border border-beige-200 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-playfair text-lg font-bold text-charcoal-900 mb-3">{item.title}</h3>
                <div className="gold-divider" />
                <p className="text-muted text-sm leading-relaxed mt-3">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label justify-center">The People Behind</p>
            <h2 className="section-title">Meet Our Team</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="text-center group">
                <div className="relative mb-4 overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/10 transition-all duration-300" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-charcoal-900">{member.name}</h3>
                <p className="text-muted text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
