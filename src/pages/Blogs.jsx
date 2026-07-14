import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import blogs from '../data/blogs';

export default function Blogs() {
  const [featured, ...rest] = blogs;

  return (
    <>
      <Helmet>
        <title>Blog | Interior Design Tips & Guides | Erto Cucine India</title>
        <meta name="description" content="Interior design tips, wardrobe buying guides, kitchen trends, and more from Erto Cucine India's design experts." />
      </Helmet>

      <div className="relative pt-32 pb-16 bg-charcoal-900">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-8">
          <Breadcrumb items={[{ label: 'Blogs' }]} />
          <h1 className="font-playfair text-5xl lg:text-6xl text-white font-bold mt-6 mb-4">Design Insights</h1>
          <p className="text-white/60 text-lg">Expert guides, trends, and tips from our interior design team.</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">

          {/* Featured Post */}
          <div data-aos="fade-up" className="group mb-12">
            <Link to={`/blogs/${featured.slug}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-72 lg:h-96 overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-5 left-5 luxury-badge">Featured</span>
                </div>
                <div className="bg-charcoal-900 p-10 lg:p-14 flex flex-col justify-center">
                  <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-3">{featured.category}</span>
                  <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-gold-300 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-white/50 text-xs mb-6">
                    <span className="flex items-center gap-1"><FiUser className="w-3.5 h-3.5" /> {featured.author}</span>
                    <span className="flex items-center gap-1"><FiCalendar className="w-3.5 h-3.5" /> {new Date(featured.date).toLocaleDateString('en-IN', { day:'numeric', month:'long', year:'numeric' })}</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <span className="text-gold-400 flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                    Read Article <FiArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((blog, i) => (
              <article
                key={blog.id}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group bg-white border border-beige-200 overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
              >
                <Link to={`/blogs/${blog.slug}`}>
                  <div className="h-52 overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <span className="text-gold-600 text-xs font-semibold uppercase tracking-widest">{blog.category}</span>
                    <h3 className="font-playfair text-lg font-bold text-charcoal-900 my-2 line-clamp-2 group-hover:text-gold-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-muted text-xs leading-relaxed mb-4 line-clamp-3">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-muted text-xs pt-3 border-t border-beige-200">
                      <span>{new Date(blog.date).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' })}</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

