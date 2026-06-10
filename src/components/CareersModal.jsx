import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Briefcase, User, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import './CareersModal.css';

export default function CareersModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resumeLink: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const openPositions = [
    {
      title: 'Real Estate Consultant',
      type: 'Full-Time // On-Site',
      dept: 'Sales & Advisory'
    },
    {
      title: 'Architectural Designer',
      type: 'Full-Time // Hybrid',
      dept: 'Design & Engineering'
    },
    {
      title: 'Operations Manager',
      type: 'Full-Time // On-Site',
      dept: 'Operations & Strategy'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        resumeLink: '',
        message: ''
      });
    }, 800);
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="careers-overlay" onClick={onClose}>
      <div className="careers-modal-card glass-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="careers-close-btn" onClick={onClose} aria-label="Close Careers Modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="careers-success-state">
            <div className="success-icon-box">
              <CheckCircle2 size={48} className="success-icon" />
            </div>
            <h2>Application Submitted</h2>
            <p>
              Thank you for your interest in joining Vaibhava Realty. Our recruitment team will review your credentials and get back to you shortly if your profile aligns.
            </p>
            <button className="btn-primary" onClick={() => setSubmitted(false)}>
              Back to Positions
            </button>
          </div>
        ) : (
          <div className="careers-layout-grid">
            
            {/* Left Column: Info & Roles */}
            <div className="careers-info-side">
              <span className="mono-label" style={{ color: 'var(--accent-gold)' }}>Careers</span>
              <h2 className="careers-modal-title">Join Our Team</h2>
              <p className="careers-modal-desc">
                We are building the future of premium lands and estates. We look for passionate individuals who strive for craftsmanship, legal precision, and value creation.
              </p>

              <div className="positions-list-box">
                <h4>ACTIVE OPPORTUNITIES</h4>
                <div className="positions-list">
                  {openPositions.map((pos, index) => (
                    <div 
                      key={index} 
                      className="position-card"
                      onClick={() => setFormData((prev) => ({ ...prev, position: pos.title }))}
                    >
                      <div className="position-icon">
                        <Briefcase size={16} />
                      </div>
                      <div className="position-details">
                        <span className="pos-title">{pos.title}</span>
                        <div className="pos-meta">
                          <span className="pos-dept">{pos.dept}</span>
                          <span className="pos-type">{pos.type}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className="careers-form-side">
              <h4>APPLY NOW</h4>
              <form onSubmit={handleSubmit} className="careers-apply-form">
                
                <div className="input-group-row">
                  <div className="input-box">
                    <label htmlFor="careers-name"><User size={12} /> Full Name</label>
                    <input 
                      type="text" 
                      id="careers-name"
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="John Doe"
                      required 
                    />
                  </div>
                </div>

                <div className="input-group-row-split">
                  <div className="input-box">
                    <label htmlFor="careers-email"><Mail size={12} /> Email Address</label>
                    <input 
                      type="email" 
                      id="careers-email"
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="john@example.com"
                      required 
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="careers-phone"><Phone size={12} /> Phone Number</label>
                    <input 
                      type="tel" 
                      id="careers-phone"
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="+91 XXXXX XXXXX"
                      required 
                    />
                  </div>
                </div>

                <div className="input-box">
                  <label htmlFor="careers-position"><Briefcase size={12} /> Target Position</label>
                  <select 
                    id="careers-position"
                    name="position" 
                    value={formData.position} 
                    onChange={handleInputChange} 
                    required
                  >
                    <option value="" disabled>Select a position...</option>
                    {openPositions.map((pos, index) => (
                      <option key={index} value={pos.title}>{pos.title}</option>
                    ))}
                    <option value="Other / General">Other / General Inquiry</option>
                  </select>
                </div>

                <div className="input-box">
                  <label htmlFor="careers-resumeLink">Resume / Portfolio Link</label>
                  <input 
                    type="url" 
                    id="careers-resumeLink"
                    name="resumeLink" 
                    value={formData.resumeLink} 
                    onChange={handleInputChange} 
                    placeholder="https://drive.google.com/..."
                    required
                  />
                </div>

                <div className="input-box">
                  <label htmlFor="careers-message">Cover Message (Optional)</label>
                  <textarea 
                    id="careers-message"
                    name="message" 
                    rows="3"
                    value={formData.message} 
                    onChange={handleInputChange} 
                    placeholder="Tell us why you would be a great fit..."
                  />
                </div>

                <button type="submit" className="btn-primary careers-submit-btn">
                  Submit Application <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>,
    document.body
  );
}
