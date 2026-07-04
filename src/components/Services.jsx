import { useState } from 'react';
import { Paintbrush, Building2, Key, Cpu, ShieldCheck, Wrench, ArrowRight, Smartphone, Check, MessageSquare } from 'lucide-react';
import './Services.css';

export default function Services() {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'core', 'after-sales'
  
  // App Mockup State
  const [mockTickets, setMockTickets] = useState([
    { id: '#2894', service: 'AC Maintenance', status: 'In Progress', date: 'Today, 10:30 AM', color: '#cda26b' },
    { id: '#2891', service: 'Interior Touch-up', status: 'Scheduled', date: 'Tomorrow, 2:00 PM', color: '#8d8f92' },
    { id: '#2885', service: 'Electrical Inspection', status: 'Completed', date: 'Jul 2, 2026', color: '#4caf50' }
  ]);
  const [newServiceType, setNewServiceType] = useState('Plumbing');
  
  const handleAddTicket = () => {
    const nextId = `#${Math.floor(2800 + Math.random() * 100)}`;
    const newTicket = {
      id: nextId,
      service: `${newServiceType} Request`,
      status: 'Raised',
      date: 'Just now',
      color: '#cda26b'
    };
    setMockTickets([newTicket, ...mockTickets.slice(0, 2)]);
  };

  const coreServices = [
    {
      icon: <Paintbrush size={24} />,
      title: 'Bespoke Interior Design',
      desc: 'Collaborate with premium interior architects to craft bespoke living spaces. From gold-grade finishes to space configuration engineering, we ensure your home is built to your aesthetic preference.'
    },
    {
      icon: <Building2 size={24} />,
      title: 'Property Management',
      desc: 'Hassle-free property supervision for residential villas and plotting layouts. We oversee regular physical site inspections, landscaping care, secure gate control, and infrastructure monitoring.'
    },
    {
      icon: <Key size={24} />,
      title: 'Leasing & Rental Services',
      desc: 'Maximize asset yield. Our specialized corporate leasing division conducts thorough tenant vetting, handles complete documentation, collects rents, and runs marketing campaigns for high occupancy.'
    }
  ];

  const afterSalesServices = [
    {
      icon: <Cpu size={20} />,
      title: 'Smart Tech Support',
      desc: 'Expert assistance for smart home integrations, eco-grid monitoring, automated security, and high-speed fiber setups.'
    },
    {
      icon: <ShieldCheck size={20} />,
      title: 'Warranties & Guarantees',
      desc: 'Complete peace of mind. Every structural build comes with a 10-year warranty, along with standard guarantees on premium fixtures and waterproof certifications.'
    },
    {
      icon: <Wrench size={20} />,
      title: 'Maintenance, Returns & Exchanges',
      desc: 'Prompt repair solutions, flexible design modification support, and custom layout configuration updates post-handover.'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-blueprint-grid" />
      <div className="content-wrapper">
        
        {/* Section Header */}
        <div className="services-header">
          <span className="mono-label" style={{ color: 'var(--accent-gold)' }}>EXPERT CAPABILITIES</span>
          <h2>Our Services & Client Care</h2>
          <p className="services-subheader-desc">
            We support your real estate journey from start to finish—providing bespoke designs, property management, leasing, and comprehensive after-sales services.
          </p>

          {/* Filter Tabs */}
          <div className="services-tabs">
            <button 
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Services
            </button>
            <button 
              className={`tab-btn ${activeTab === 'core' ? 'active' : ''}`}
              onClick={() => setActiveTab('core')}
            >
              Core Services
            </button>
            <button 
              className={`tab-btn ${activeTab === 'after-sales' ? 'active' : ''}`}
              onClick={() => setActiveTab('after-sales')}
            >
              After-Sales & Care
            </button>
          </div>
        </div>

        {/* Services Main Grid */}
        <div className="services-grid-container">
          
          {/* Core Services Section */}
          {(activeTab === 'all' || activeTab === 'core') && (
            <div className="services-block-group">
              <h3 className="block-group-title">Core Property Services</h3>
              <div className="core-services-list">
                {coreServices.map((service, index) => (
                  <div className="core-service-card" key={index}>
                    <div className="service-icon-wrapper">{service.icon}</div>
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                    <a href="#inquire" className="service-link">
                      Enquire Services <ArrowRight size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* After Sales Services & Portal App */}
          {(activeTab === 'all' || activeTab === 'after-sales') && (
            <div className="services-block-group after-sales-group">
              <h3 className="block-group-title">After-Sales Client Support</h3>
              
              <div className="after-sales-grid">
                
                {/* Support details list */}
                <div className="after-sales-details-side">
                  <p className="group-intro-text">
                    Our commitment does not end at the keys. We provide long-term structural, digital, and mechanical support for your peace of mind.
                  </p>
                  
                  <div className="after-sales-cards">
                    {afterSalesServices.map((service, index) => (
                      <div className="after-sales-card" key={index}>
                        <div className="after-sales-icon-box">{service.icon}</div>
                        <div className="after-sales-text-box">
                          <h5>{service.title}</h5>
                          <p>{service.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Maintenance Portal App Interactive Preview */}
                <div className="portal-app-side">
                  <div className="app-description-box">
                    <span className="app-badge"><Smartphone size={12} /> CLIENT PORTAL APP</span>
                    <h4>Vaibhava Care App</h4>
                    <p>
                      Access instant after-sales services directly from your phone. Raise maintenance requests, track real-time technician progress, manage warranties, and configure design upgrades.
                    </p>
                    
                    <div className="app-highlights">
                      <div className="highlight-item">
                        <Check size={14} className="check-icon" /> <span>24/7 Service Ticketing</span>
                      </div>
                      <div className="highlight-item">
                        <Check size={14} className="check-icon" /> <span>Live Maintenance Tracker</span>
                      </div>
                      <div className="highlight-item">
                        <Check size={14} className="check-icon" /> <span>Digital Warranty Vault</span>
                      </div>
                    </div>
                  </div>

                  {/* HTML/CSS Phone Mockup */}
                  <div className="phone-device-frame">
                    <div className="phone-screen-container">
                      {/* Phone StatusBar */}
                      <div className="phone-status-bar">
                        <span className="time">10:18 AM</span>
                        <div className="notch" />
                        <div className="battery-signals">
                          <span className="wifi">📶</span>
                          <span className="battery">🔋 98%</span>
                        </div>
                      </div>

                      {/* Phone Header */}
                      <div className="phone-app-header">
                        <div className="app-logo">
                          <span className="logo-v">V</span>
                          <span className="logo-text">VAIBHAVA CARE</span>
                        </div>
                        <div className="user-avatar" />
                      </div>

                      {/* Phone Body Scrollable */}
                      <div className="phone-app-body">
                        <div className="welcome-banner">
                          <span>Hello, Farhan</span>
                          <p>Jubilee Hills Villa 4B</p>
                        </div>

                        {/* Interactive Section */}
                        <div className="app-section">
                          <div className="app-section-header">
                            <h6>Raise Maintenance Ticket</h6>
                          </div>
                          
                          <div className="app-selector-row">
                            <select 
                              value={newServiceType} 
                              onChange={(e) => setNewServiceType(e.target.value)}
                              className="app-select-dropdown"
                            >
                              <option value="Plumbing">Plumbing Fix</option>
                              <option value="Electrical">Electrical Issue</option>
                              <option value="Interior">Interior Touchup</option>
                              <option value="Automation">Smart Home Tech</option>
                            </select>
                            <button 
                              className="app-btn-submit"
                              onClick={handleAddTicket}
                            >
                              Submit
                            </button>
                          </div>
                        </div>

                        {/* Dynamic Tickets List */}
                        <div className="app-section">
                          <div className="app-section-header">
                            <h6>Active Service Logs</h6>
                          </div>
                          
                          <div className="app-tickets-list">
                            {mockTickets.map((ticket, i) => (
                              <div className="app-ticket-card" key={i}>
                                <div className="ticket-header-line">
                                  <span className="ticket-id">{ticket.id}</span>
                                  <span 
                                    className="ticket-status-pill"
                                    style={{ 
                                      backgroundColor: ticket.status === 'Completed' ? 'rgba(76, 175, 80, 0.15)' : 'rgba(205, 162, 107, 0.15)',
                                      color: ticket.status === 'Completed' ? '#4caf50' : '#cda26b'
                                    }}
                                  >
                                    <span className="pulsing-dot" style={{ backgroundColor: ticket.status === 'Completed' ? '#4caf50' : '#cda26b' }} />
                                    {ticket.status}
                                  </span>
                                </div>
                                <div className="ticket-service-name">{ticket.service}</div>
                                <div className="ticket-date-line">{ticket.date}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="app-section">
                          <h6>Asset Quick Links</h6>
                          <div className="app-actions-grid">
                            <div className="app-action-box">
                              <ShieldCheck size={16} style={{ color: '#cda26b' }} />
                              <span>Warranties</span>
                            </div>
                            <div className="app-action-box">
                              <MessageSquare size={16} style={{ color: '#cda26b' }} />
                              <span>Support</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
