import React, { useState } from 'react'
import "./Header.css"
import { FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen((open) => !open);
  const closeDrawer = () => setDrawerOpen(false);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeDrawer();
    }
  };

  return (
    <header className="header-container">
      <nav className="header-nav">
        <ul className="nav-links">
          <li><a href="#hero" onClick={e => handleNavClick(e, 'hero-section')}>Home</a></li>
          <li><a href="#portfolio" onClick={e => handleNavClick(e, 'featured-projects-section')}>Portfolio</a></li>
          <li><a href="#blog" onClick={e => handleNavClick(e, 'recent-blog-section')}>Blog</a></li>
          <li><a href="#contact" onClick={e => handleNavClick(e, 'contact-section')}>Contact</a></li>
        </ul>
      </nav>
      <div className="header-logo">Natalia</div>
      <div className="header-socials">
        <a href="https://www.youtube.com/@natflex-natalia" aria-label="YouTube" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={22} color="#222" />
        </a>
        <a href="https://www.linkedin.com/in/nataliashiny/" aria-label="LinkedIn" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={22} color="#222" />
        </a>
        <a href="https://www.instagram.com/nataliashinybay/" aria-label="Instagram" className="social-icon" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={22} color="#222" />
        </a>
      </div>
      <button className="header-mobile-toggle" aria-label="Open navigation menu" onClick={handleDrawerToggle}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
      <div className={`header-side-drawer${drawerOpen ? ' open' : ''}`}> 
        <button className="header-drawer-close" aria-label="Close navigation menu" onClick={closeDrawer}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div className="header-logo">Natalia</div>
        <ul className="nav-links" onClick={closeDrawer}>
          <li><a href="#hero" onClick={e => handleNavClick(e, 'hero-section')}>Home</a></li>
          <li><a href="#portfolio" onClick={e => handleNavClick(e, 'featured-projects-section')}>Portfolio</a></li>
          <li><a href="#blog" onClick={e => handleNavClick(e, 'recent-blog-section')}>Blog</a></li>
          <li><a href="#contact" onClick={e => handleNavClick(e, 'contact-section')}>Contact</a></li>
        </ul>
        <div className="header-socials">
          <a href="https://www.youtube.com/@natflex-natalia" aria-label="YouTube" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={22} color="#222" />
          </a>
          <a href="https://www.linkedin.com/in/nataliashiny/" aria-label="LinkedIn" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={22} color="#222" />
          </a>
          <a href="https://www.instagram.com/nataliashinybay/" aria-label="Instagram" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={22} color="#222" />
          </a>
        </div>
      </div>
      {drawerOpen && <div className="header-backdrop" onClick={closeDrawer} />}
    </header>
  )
}
