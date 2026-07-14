import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiCalendar, FiUser, FiClock, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import CTA from '../components/CTA/CTA';
import blogs from '../data/blogs';

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) return <Navigate to="/blogs" replace />;

  const related = blogs.filter(b => b.id !== blog.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{blog.title} | Erto Cucine Blog</title>
        <meta name="description" content={blog.excerpt} />
      </Helmet>

      <div className="relative pt-32 pb-0 bg-charcoal-900">
        <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8 pb-20">
          <Breadcrumb items={[{ label: 'Blogs', to: '/blogs' }, { label: blog.title }]} />
          <div className="max-w-3xl mt-6">
            <span className="luxury-badge mb-4 inline-flex">{blog.category}</span>
            <h1 className="font-playfair text-4xl lg:text-5xl text-white font-bold mb-6">{blog.title}</h1>
            <div className="flex items-center gap-5 text-white/60 text-sm">
              <span className="flex items-center gap-2"><FiUser className="w-4 h-4" /> {blog.author}</span>
              <span className="flex items-center gap-2"><FiCalendar className="w-4 h-4" /> {new Date(blog.date).toLocaleDateString('en-IN', { day:'numeric', month:'long', year:'numeric' })}</span>
              <span className="flex items-center gap-2"><FiClock className="w-4 h-4" /> {blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            {/* Article */}
            <div className="lg:col-span-2">
              <p className="text-muted text-base leading-loose mb-6">{blog.excerpt}</p>
              <p className="text-charcoal-700 text-base leading-loose mb-6">{blog.content}</p>

              {/* Sample expanded content */}
              <h2 className="font-playfair text-2xl font-bold text-charcoal-900 mt-10 mb-4">Key Considerations</h2>
              <div className="space-y-4">
                {['Understanding your storage requirements is the first step. Most Indian families underestimate the amount of hanging space needed for sarees, suits, and seasonal clothing.',
                  'Material selection significantly impacts longevity. In humid cities like Noida and Delhi, BWR-grade boards with waterproof laminates are non-negotiable.',
                  'Hardware quality determines the daily experience. Soft-close hinges and channels from Hettich or Hafele make a noticeable difference every single day.',
                  'Always see physical finish samples before deciding. Screen-rendered colours never perfectly match the real laminate or lacquer finish.',
                ].map((para, i) => (
                  <p key={i} className="text-charcoal-700 text-base leading-loose">{para}</p>
                ))}
              </div>

              <div className="mt-10 p-8 bg-gold-50 border-l-4 border-gold-500">
                <p className="font-playfair text-xl font-semibold text-charcoal-900 mb-2">
                  "The difference between a great interior and a poor one often comes down to hardware quality and material choice — not the brand or price tag."
                </p>
                <p className="text-muted text-sm">— Erto Cucine Design Team</p>
              </div>

              <div className="mt-8 flex gap-3">
                {blog.tags?.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-beige-100 border border-beige-200 text-charcoal-700 text-xs font-medium">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex items-center justify-between pt-6 border-t border-beige-200">
                <Link to="/blogs" className="btn-ghost">
                  <FiArrowLeft className="w-4 h-4" /> All Articles
                </Link>
                <Link to="/book-consultation" className="btn-primary">
                  Book Consultation <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-24 space-y-6">
                {/* Author Card */}
                <div className="p-6 bg-beige-50 border border-beige-200">
                  <h3 className="font-semibold text-charcoal-900 text-sm uppercase tracking-wider mb-3">Written By</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 font-playfair text-xl font-bold">
                      E
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal-900">{blog.author}</p>
                      <p className="text-muted text-xs">Interior Design Expert</p>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                <div>
                  <h3 className="font-semibold text-charcoal-900 text-sm uppercase tracking-wider mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map(b => (
                      <Link key={b.id} to={`/blogs/${b.slug}`} className="group flex gap-4">
                        <img src={b.image} alt={b.title} className="w-20 h-16 object-cover flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-charcoal-900 group-hover:text-gold-600 transition-colors line-clamp-2">{b.title}</p>
                          <p className="text-xs text-muted mt-1">{b.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA Widget */}
                <div className="p-6 bg-charcoal-900 text-white">
                  <p className="font-playfair text-xl font-bold mb-3">Ready to Transform Your Home?</p>
                  <p className="text-white/60 text-xs leading-relaxed mb-4">Get a FREE consultation with our expert designers. No obligation, no pressure.</p>
                  <Link to="/book-consultation" className="btn-primary w-full justify-center text-xs">
                    Book Free Visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
