import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

export default function FAQAccordion({ faqs, title = 'Frequently Asked Questions' }) {
  const [open, setOpen] = useState(null);

  return (
    <div>
      {title && (
        <h2 className="section-title mb-8">{title}</h2>
      )}
      <div className="divide-y divide-beige-200">
        {faqs.map((faq, i) => (
          <div key={faq.id} className="py-0">
            <button
              className="w-full flex items-center justify-between py-5 text-left group"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className={`font-poppins text-base font-semibold transition-colors ${
                open === i ? 'text-gold-600' : 'text-charcoal-800 group-hover:text-gold-500'
              }`}>
                {faq.question}
              </span>
              <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                open === i ? 'bg-gold-500 text-charcoal-900' : 'bg-beige-200 text-charcoal-600 group-hover:bg-gold-100'
              }`}>
                {open === i ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-muted text-sm leading-relaxed pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

