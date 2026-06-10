import { useState, useMemo } from 'react';
import { ArrowRight, Check, Calendar, Clock } from 'lucide-react';
import './InquiryForm.css';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'RESIDENTIAL',
    message: ''
  });
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Generate the next 5 working days (Mon-Fri) dynamically
  const upcomingDays = useMemo(() => {
    const days = [];
    let current = new Date();
    // start from tomorrow
    current.setDate(current.getDate() + 1);
    
    while (days.length < 5) {
      const dayOfWeek = current.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Skip Sat/Sun
        const dayLabel = current.toLocaleDateString('en-US', { weekday: 'short' });
        const dateLabel = current.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
        days.push({
          id: current.toISOString().split('T')[0],
          day: dayLabel,
          date: dateLabel
        });
      }
      current.setDate(current.getDate() + 1);
    }
    return days;
  }, []);

  const timeSlots = ['10:00 AM', '01:30 PM', '03:30 PM', '05:00 PM'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
      setSubmitted(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="inquiry-section" id="inquire">
      <div className="content-wrapper">
        <div className="inquiry-grid">
          
          {/* Info Column */}
          <div className="inquiry-info-side">
            <span className="mono-label" style={{ color: 'var(--accent-gold)' }}>Private Viewings</span>
            <h2 className="inquiry-h2">Begin the Exploration.</h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 300 }}>
              We facilitate private viewings and architectural consultancies globally. Connect with our principal planning office to secure site visits, detailed structural portfolios, or floor elevation drawings.
            </p>

            <div className="inquiry-contact-details">
              <div className="contact-detail-item">
                <span className="lbl">Planning Office Email</span>
                <span className="val"><a href="mailto:info@vaibhavarealty.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@vaibhavarealty.com</a></span>
              </div>
              <div className="contact-detail-item">
                <span className="lbl">Tel / WhatsApp</span>
                <span className="val"><a href="tel:+919059458484" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9059458484</a></span>
              </div>
              <div className="contact-detail-item">
                <span className="lbl">Office Hours</span>
                <span className="val">Mon to Sat, 10:00 AM to 6:30 PM</span>
              </div>
              <div className="contact-detail-item">
                <span className="lbl">Registered Office</span>
                <span className="val" style={{ fontSize: '0.85rem', lineHeight: '1.4', marginTop: '0.2rem', display: 'block' }}>
                  First Floor, Plot No. 34/A,<br />
                  Road No. 70, Journalist Colony,<br />
                  Jubilee Hills, Hyderabad, Telangana 500096
                </span>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="inquiry-map-container" style={{ marginTop: '1.5rem', height: '200px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-technical)' }}>
              <iframe 
                title="Vaibhava Realty Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0175294528143!2d78.40243431536767!3d17.432314506016148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c885bb3269%3A0xe54e601ef2cfc3e!2sRoad%20No.%2070%2C%20Journalist%20Colony%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500096!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>


          </div>

          {/* Form Card Column */}
          <div className="inquiry-form-card glass-card">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="form-inputs-stack">
                
                <div className="form-input-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Liam Anderson"
                    className="form-text-input"
                  />
                </div>

                <div className="form-input-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. liam@structural.com"
                    className="form-text-input"
                  />
                </div>

                <div className="form-input-group">
                  <label htmlFor="category">Inquiry Scope</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="form-select-input"
                  >
                    <option value="RESIDENTIAL">Luxury Residential Estate</option>
                    <option value="COMMERCIAL">High-End Commercial Hub</option>
                    <option value="PLOTTING">Plotting Ventures / Land</option>
                  </select>
                </div>

                {/* Interactive Scheduling Widget */}
                <div className="form-input-group scheduler-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={12} style={{ color: 'var(--accent-gold)' }} /> Select Preferred Date
                  </label>
                  <div className="scheduler-days-grid">
                    {upcomingDays.map((day) => (
                      <button
                        type="button"
                        key={day.id}
                        className={`scheduler-day-card ${selectedDate === day.id ? 'active' : ''}`}
                        onClick={() => setSelectedDate(day.id)}
                      >
                        <span className="scheduler-day-name">{day.day}</span>
                        <span className="scheduler-date-num">{day.date}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedDate && (
                  <div className="form-input-group scheduler-group anim-fade-in">
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Clock size={12} style={{ color: 'var(--accent-gold)' }} /> Select Available Time Slot
                    </label>
                    <div className="scheduler-times-grid">
                      {timeSlots.map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          className={`scheduler-time-badge ${selectedTime === slot ? 'active' : ''}`}
                          onClick={() => setSelectedTime(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="form-input-group">
                  <label htmlFor="message">Custom Requests / Notes</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe spatial size, glass specifications, or terrain details..."
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="form-submit-btn">
                  Submit Inquiry <ArrowRight size={18} />
                </button>

              </form>
            ) : (
              <div className="form-success-banner">
                <div className="success-icon-box" style={{ borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}>
                  <Check size={32} />
                </div>
                <h3>Request Registered</h3>
                <p>
                  Thank you, {formData.name}. Our architectural planning consultant will email you at <strong>{formData.email}</strong> within 12 hours with structural catalog packets.
                </p>
                {selectedDate && selectedTime && (
                  <div className="scheduled-appointment-summary">
                    <div className="appt-badge">
                      <Calendar size={14} /> <span>{upcomingDays.find(d => d.id === selectedDate)?.date} // {selectedTime}</span>
                    </div>
                    <span className="appt-note">Provisional viewing appointment blocked.</span>
                  </div>
                )}
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setSelectedDate('');
                    setSelectedTime('');
                    setFormData({ name: '', email: '', category: 'RESIDENTIAL', message: '' });
                  }}
                  className="btn-secondary"
                  style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}
                >
                  New Inquiry
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
