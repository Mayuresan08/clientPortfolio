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
        <div className="header-logo">Natalia</div>
        <ul className="nav-links" onClick={closeDrawer}>
          <li><a href="#hero" onClick={e => handleNavClick(e, 'hero-section')}>Home</a></li>
          <li><a href="#portfolio" onClick={e => handleNavClick(e, 'featured-projects-section')}>Portfolio</a></li>
          <li><a href="#blog" onClick={e => handleNavClick(e, 'recent-blog-section')}>Blog</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="#contact" onClick={e => handleNavClick(e, 'contact-section')}>Contact</a></li>
        </ul>
        <div className="header-socials">
          <a href="#" aria-label="Instagram" className="social-icon">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" stroke="#222" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="#222" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="#222"/></svg>
          </a>
          <a href="#" aria-label="Facebook" className="social-icon">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="22" height="22" fill="none"/><path d="M17 2.5h-2.5A4.5 4.5 0 0 0 10 7v2H7v3h3v7h3v-7h2.5l.5-3H13V7a1.5 1.5 0 0 1 1.5-1.5H17v-3z" fill="#222"/></svg>
          </a>
          <a href="#" aria-label="Twitter" className="social-icon">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="22" height="22" fill="none"/><path d="M22 5.92a8.19 8.19 0 0 1-2.36.65A4.13 4.13 0 0 0 21.4 4.1a8.27 8.27 0 0 1-2.61 1A4.13 4.13 0 0 0 12 8.13c0 .32.04.64.1.94A11.7 11.7 0 0 1 3 4.89a4.13 4.13 0 0 0 1.28 5.5A4.07 4.07 0 0 1 2.8 9.3v.05a4.13 4.13 0 0 0 3.31 4.05c-.2.05-.41.08-.62.08-.15 0-.3-.01-.45-.04a4.13 4.13 0 0 0 3.85 2.86A8.3 8.3 0 0 1 2 19.54a11.72 11.72 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 5.92z" fill="#222"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="social-icon">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="22" height="22" fill="none"/><path d="M6.94 6.5a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88zM4.5 8.25h4.88v11.25H4.5V8.25zm7.13 0h4.68v1.54h.07c.65-1.23 2.24-2.53 4.6-2.53 4.92 0 5.83 3.24 5.83 7.45v8.54h-4.88v-7.57c0-1.8-.03-4.12-2.51-4.12-2.51 0-2.89 1.96-2.89 3.99v7.7h-4.88V8.25z" fill="#222"/></svg>
          </a>
        </div>
      </div>
      {drawerOpen && <div className="header-backdrop" onClick={closeDrawer} />}
    </header>
  )
}
