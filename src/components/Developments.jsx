import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import './Developments.css';
import plottingImage from '../assets/plotting.jpeg';
import commercialImage from '../assets/commercial_office_complex.jpeg';
import residentialImage from '../assets/residential.jpeg';

export default function Developments() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [activeStatus, setActiveStatus] = useState('ALL');

  const categories = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'PLOTTING'];
  const statuses = ['ALL', 'COMPLETED', 'ONGOING', 'UPCOMING'];

  const projects = [
    {
      id: 'dev-01',
      title: 'Vaibhava Aura Villas',
      category: 'RESIDENTIAL',
      status: 'ONGOING',
      desc: 'Stunning luxury villas designed with modern steel architecture, private pools, and sustainable systems in Hyderabad.',
      img: residentialImage,
      specs: '4.5m Ceilings // Private Pool',
    },
    {
      id: 'dev-02',
      title: 'Vaibhava Tech Square',
      category: 'COMMERCIAL',
      status: 'ONGOING',
      desc: 'Modern commercial office infrastructure featuring high-traffic accessibility, sustainable energy designs, and excellent amenities in Hyderabad.',
      img: commercialImage,
      specs: 'LEED Gold // Smart Power',
    },
    {
      id: 'dev-03',
      title: 'Vaibhava Meadow Plots',
      category: 'PLOTTING',
      status: 'COMPLETED',
      desc: 'Premium land developments offering modern infrastructure, sustainable community layouts, and full gated security in Hyderabad.',
      img: plottingImage,
      specs: 'Gated Community // Clear Title',
    },
    {
      id: 'dev-04',
      title: 'Vaibhava Apex Heights',
      category: 'RESIDENTIAL',
      status: 'UPCOMING',
      desc: 'Modern sky apartments in Hyderabad featuring sustainable building standards and premium infrastructure.',
      img: residentialImage,
      specs: '3 & 4 BHK // Sky Deck',
    },
    {
      id: 'dev-05',
      title: 'Vaibhava Capital Hub',
      category: 'COMMERCIAL',
      status: 'COMPLETED',
      desc: 'A modern, high-occupancy business park center defined by structural glass columns, elevator cores, and custom light wells in Hyderabad.',
      img: commercialImage,
      specs: '100% Occupied // Glass Elevators',
    },
    {
      id: 'dev-06',
      title: 'Vaibhava Prime County',
      category: 'PLOTTING',
      status: 'ONGOING',
      desc: 'High-appreciating plots ready for construction, nestled in a fast-developing zone with modern amenities and gated security in Hyderabad.',
      img: plottingImage,
      specs: 'Plots // Fast Appreciation',
    },
    {
      id: 'dev-07',
      title: 'Vaibhava Sol Manor',
      category: 'RESIDENTIAL',
      status: 'COMPLETED',
      desc: 'Completed luxury residential units in Hyderabad showcasing raw board-formed concrete and premium frameless sliding window layouts.',
      img: residentialImage,
      specs: 'Occupied // Modern Layouts',
    },
    {
      id: 'dev-08',
      title: 'Vaibhava Nexus Plaza',
      category: 'COMMERCIAL',
      status: 'UPCOMING',
      desc: 'Upcoming landmark business plaza in Hyderabad designed with self-cleaning glazed structures and a dramatic central glass dome.',
      img: commercialImage,
      specs: 'Pre-Leasing // Glass Dome',
    },
    {
      id: 'dev-09',
      title: 'Vaibhava Horizon Lands',
      category: 'PLOTTING',
      status: 'UPCOMING',
      desc: 'Pre-launch residential plotting layout featuring green parks, wide water storage systems, and tree-lined walkways in Hyderabad.',
      img: plottingImage,
      specs: 'Pre-Launch // Near TCS',
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'ALL' || project.category === activeFilter;
    const matchesStatus = activeStatus === 'ALL' || project.status === activeStatus;
    return matchesCategory && matchesStatus;
  });

  return (
    <section className="developments-section" id="developments">
      <div className="content-wrapper">
        
        {/* Header and filtering layout */}
        <div className="dev-header-box">
          <div className="dev-title-side">
            <span className="mono-label" style={{ color: 'var(--accent-gold)' }}>Active Portfolio</span>
            <h2>Invest with Confidence</h2>
          </div>
          
          <div className="dev-filters-container">
            {/* Category Filter */}
            <div className="filter-row">
              <span className="filter-label">Segment:</span>
              <div className="dev-filter-controls">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                    onClick={() => setActiveFilter(cat)}
                  >
                    {activeFilter === cat && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="active-filter-bg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="filter-btn-text">{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div className="filter-row">
              <span className="filter-label">Status:</span>
              <div className="dev-filter-controls">
                {statuses.map((stat, idx) => (
                  <button
                    key={idx}
                    className={`filter-btn ${activeStatus === stat ? 'active' : ''}`}
                    onClick={() => setActiveStatus(stat)}
                  >
                    {activeStatus === stat && (
                      <motion.div
                        layoutId="activeStatusPill"
                        className="active-filter-bg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="filter-btn-text">{stat}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Dynamic Grid */}
        <motion.div layout className="dev-portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.a
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                href="#inquire"
                className="dev-portfolio-card"
                key={project.id}
                data-cursor="inquire"
              >
                <div className="card-img-box">
                  <span className="card-status-badge">{project.status}</span>
                  <span className="card-meta-tag">{project.specs}</span>
                  <img src={project.img} alt={project.title} className="card-img" />
                </div>
                
                <div className="card-text-box">
                  <div className="card-title-row">
                    <h3 className="card-title">{project.title}</h3>
                    <ArrowRight size={18} className="card-arrow" />
                  </div>
                  <p className="card-desc">{project.desc}</p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
