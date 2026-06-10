import { ShieldCheck, Layers, Globe, PenTool, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import './Promises.css';

import legalImg from '../assets/promise_legal.png';
import infraImg from '../assets/promise_infra.png';
import valueImg from '../assets/promise_value.png';
import customImg from '../assets/promise_custom.png';

export default function Promises() {
  const promisesList = [
    {
      id: 'promise-01',
      num: '01',
      title: 'Legal Transparency',
      label: 'TRANSPARENCY',
      desc: 'Compliance is our foundation. All land, layouts, and construction ventures are backed by RERA approvals, clear title deeds, and exhaustive legal verifications with zero hidden liabilities.',
      img: legalImg,
      icon: <ShieldCheck size={20} />,
      spec: '100% Verified // Clear Titles'
    },
    {
      id: 'promise-02',
      num: '02',
      title: 'Grade-A Infrastructure',
      label: 'CONSTRUCTION & ROADWAYS',
      desc: 'We build layouts and infrastructure with unmatched quality standards: concrete blacktop roads, underground water and electrical grids, proper drainage, and rainwater harvesting systems.',
      img: infraImg,
      icon: <Layers size={20} />,
      spec: 'Superior Grade A Quality'
    },
    {
      id: 'promise-03',
      num: '03',
      title: 'Future-Proof Value',
      label: 'GROWTH POTENTIAL',
      desc: 'We strategically select lands in high-growth corridors of Hyderabad. This ensures rapid land appreciation, strong rental yield potential, and exceptional long-term wealth security.',
      img: valueImg,
      icon: <Globe size={20} />,
      spec: 'Prime Appreciating Zones'
    },
    {
      id: 'promise-04',
      num: '04',
      title: 'Bespoke Customization',
      label: 'FLEXIBILITY',
      desc: 'Your property, your rules. We design land layouts that support fully custom home blueprints. We offer dedicated architectural design and plotting configuration consultancies for our clients.',
      img: customImg,
      icon: <PenTool size={20} />,
      spec: 'Flexible Spatial Layouts'
    }
  ];

  return (
    <section className="promises-section" id="promises">
      <div className="content-wrapper">
        
        {/* Section Header */}
        <div className="promises-header-box">
          <div className="promises-title-side">
            <span className="mono-label" style={{ color: 'var(--accent-gold)' }}>Our Foundation</span>
            <h2>Corporate Commitments & Promises</h2>
          </div>
          <div className="promises-desc-side">
            <p>
              As a new-generation property developer in Hyderabad, we build on trust, precision engineering, and absolute clarity. We do not just sell space; we deliver lifetime security.
            </p>
          </div>
        </div>

        {/* Promises Grid */}
        <div className="promises-grid">
          {promisesList.map((promise, index) => (
            <motion.div
              className="promise-card glass-card"
              key={promise.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              data-cursor="explore"
            >
              {/* Image Box */}
              <div className="promise-img-box">
                <span className="promise-num-badge">{promise.num}</span>
                <span className="promise-spec-tag">{promise.spec}</span>
                <img src={promise.img} alt={promise.title} className="promise-img" />
                <div className="promise-img-overlay" />
              </div>

              {/* Text / Info Details */}
              <div className="promise-text-box">
                <div className="promise-title-row">
                  <div className="promise-title-group">
                    <span className="promise-label-mono">{promise.label}</span>
                    <h3 className="promise-title">{promise.title}</h3>
                  </div>
                  <div className="promise-icon-container">
                    {promise.icon}
                  </div>
                </div>
                <p className="promise-desc">{promise.desc}</p>
                <div className="promise-cta-line">
                  <a href="#inquire" className="promise-card-link">
                    Inquire Details <ArrowRight size={14} className="promise-card-arrow" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
