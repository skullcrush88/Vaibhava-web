import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ArrowLeft, ArrowRight } from 'lucide-react';
import './Gallery.css';

import plottingImage from '../assets/plotting.jpeg';
import commercialImage from '../assets/commercial_office_complex.jpeg';
import residentialImage from '../assets/residential.jpeg';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'PLOTTING'];

  const galleryItems = [
    {
      img: residentialImage,
      title: "Vaibhava Premium Villa Exterior",
      category: "RESIDENTIAL",
      caption: "Bespoke residential villa highlighting structural framing, wide glass panels, and open lawns."
    },
    {
      img: commercialImage,
      title: "Commercial Facade Glazing",
      category: "COMMERCIAL",
      caption: "Sleek commercial curtain wall panels displaying modern architectural glazing technology."
    },
    {
      img: plottingImage,
      title: "Premium Mapped Plot Layout",
      category: "PLOTTING",
      caption: "Gated plotting venture layout showcasing neat blacktop roads and green landscaping borders."
    },
    {
      img: residentialImage,
      title: "Luxury Duplex Courtyard",
      category: "RESIDENTIAL",
      caption: "Integrated residential spatial design blending raw concrete columns with exterior vistas."
    },
    {
      img: commercialImage,
      title: "Corporate Hub Atrium",
      category: "COMMERCIAL",
      caption: "High-clearance corporate hubs maximizing natural light flow and column-free spaces."
    },
    {
      img: plottingImage,
      title: "Suburban Lands Boundary Mappings",
      category: "PLOTTING",
      caption: "High-value plotted zones configured for private construction, located in appreciating sectors."
    }
  ];

  const filteredItems = activeFilter === 'ALL'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (index) => {
    // Find the item index in the filtered list
    const item = filteredItems[index];
    // Find its index in the absolute galleryItems list
    const absoluteIndex = galleryItems.findIndex(x => x.title === item.title);
    setLightboxIndex(absoluteIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction) => {
    if (lightboxIndex === null) return;
    let nextIndex = lightboxIndex + direction;
    if (nextIndex < 0) nextIndex = galleryItems.length - 1;
    if (nextIndex >= galleryItems.length) nextIndex = 0;
    setLightboxIndex(nextIndex);
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="content-wrapper">
        <div className="gallery-header-box">
          <div className="gallery-title-side">
            <span className="mono-label" style={{ color: 'var(--accent-gold)' }}>Visual Portfolio</span>
            <h2>Project Gallery</h2>
          </div>

          <div className="gallery-filter-controls">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeGalleryFilterPill"
                    className="active-filter-bg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="filter-btn-text">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={item.title}
                className="gallery-card"
                onClick={() => openLightbox(idx)}
                data-cursor="zoom"
              >
                <div className="gallery-img-container">
                  <img src={item.img} alt={item.title} className="gallery-img" />
                  <div className="gallery-hover-overlay">
                    <ZoomIn className="zoom-icon" size={24} />
                    <span className="gallery-tag">{item.category}</span>
                  </div>
                </div>
                <div className="gallery-info">
                  <h4>{item.title}</h4>
                  <p>{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close Lightbox">
              <X size={24} />
            </button>

            <button 
              className="lightbox-nav nav-left" 
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              aria-label="Previous Image"
            >
              <ArrowLeft size={20} />
            </button>

            <button 
              className="lightbox-nav nav-right" 
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              aria-label="Next Image"
            >
              <ArrowRight size={20} />
            </button>

            <motion.div 
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <img 
                src={galleryItems[lightboxIndex].img} 
                alt={galleryItems[lightboxIndex].title} 
                className="lightbox-img" 
              />
              <div className="lightbox-caption">
                <span className="lightbox-tag">{galleryItems[lightboxIndex].category}</span>
                <h3>{galleryItems[lightboxIndex].title}</h3>
                <p>{galleryItems[lightboxIndex].caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
