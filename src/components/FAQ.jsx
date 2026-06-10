import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of properties does Vaibhava Realty specialize in?",
      answer: "We specialize in three key real estate segments: Architecturally stunning Residential flats & villas, strategically located Commercial Spaces built to help businesses scale, and high-appreciating Plotting Ventures offering complete freedom of customization."
    },
    {
      question: "Are all your plotting ventures and projects legally cleared?",
      answer: "Yes, legal compliance and absolute transparency are our highest priorities. All our projects undergo exhaustive verification processes, possess clear titles, and comply with all state regulatory guidelines."
    },
    {
      question: "Do you offer layout customization for the plotting lands?",
      answer: "Absolutely. Our plotting layouts are designed with premium infrastructure, leaving the actual interior build entirely customizable. We also provide consultation with our award-winning architectural team to assist in your blueprint design."
    },
    {
      question: "How can I schedule a private site viewing or booking?",
      answer: "You can book a provisional slot directly using the Inquiry scheduler on this page. Alternatively, you can contact our planning office via WhatsApp/Call at +91 9059458484 or email at manchukondasaiteja@gmail.com."
    },
    {
      question: "Who is your target customer base?",
      answer: "We offer tailored investment options and premium living hubs designed for IT employees, business leaders, middle and upper-middle-class families, NRIs, and High Net Worth Individuals (HNIs) looking for high-yield real estate partnerships."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="content-wrapper">
        <div className="faq-header">
          <span className="mono-label" style={{ color: 'var(--accent-gold)' }}>COMMON QUESTIONS</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFAQ(idx)}
              >
                <div className="faq-question-row">
                  <h3>{faq.question}</h3>
                  <div className="faq-icon-box">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </div>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="faq-answer-wrapper"
                    >
                      <p className="faq-answer-text">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
