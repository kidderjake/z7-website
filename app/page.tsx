"use client";

import { useState } from 'react';
import './cards.css';
import './bento.css';
import './website-card.css';
import './simplified.css';

function ProductIcon({ automation = false, className = '' }: { automation?: boolean; className?: string }) {
  return <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {automation ? <><path d="m27 5-17 22h12l-1 16 17-23H26Z"/><path d="M6 12h5M37 37h5"/></> : <><rect x="5" y="8" width="38" height="31" rx="3"/><path d="M5 17h38M11 12h1m5 0h1m-1 12-5 5 5 5m14-10 5 5-5 5m-9 2 4-14"/></>}
  </svg>;
}

export default function Home() {
  const [websiteOpen, setWebsiteOpen] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);
  return <div className="cards-page bento-page" id="top">
    <header className="cards-header"><a href="/" aria-label="Z7 home"><img src="/brand/z7-inline-icon-navy.png" width="54" height="54" alt="Z7"/></a><span className="cards-wordmark">ZONESEVEN</span><a className="enquire-cta" href="/enquire">Enquire</a></header>
    <main className="cards-stage" aria-label="Z7 product offerings">
      <div className="bento-intro"><h1>Time for liftoff<span>.</span></h1><p>Two ways to move your business forward.</p></div>
      <section className="offering offering-audit" aria-labelledby="audit-title">
        <div className="card-slot"><article className="ticket">
          <div className="ticket-upper"><h2 id="audit-title"><span>FREE</span>AI AUTOMATION<br/>AUDIT</h2><ProductIcon automation className="ticket-plane"/></div>
          <div className="ticket-lower"><p>Find where AI can save your business time.</p>
            <button className="continue-button" aria-expanded={auditOpen} aria-controls="audit-details" onClick={() => setAuditOpen(!auditOpen)}>{auditOpen ? 'LESS DETAIL' : 'EXPLORE FREE AUDIT'}<span className="expand-symbol" aria-hidden="true">{auditOpen ? '−' : '+'}</span></button>
          </div>
        </article></div>
        <div id="audit-details" className="offering-details" hidden={!auditOpen}>
          <h2>Less busywork.<br/>More time for business.</h2>
          <p>A free look at how your small business works and where AI automation could help.</p>
          <ul><li>Review repetitive tasks and everyday tools</li><li>Identify practical automation opportunities</li><li>Get clear recommendations on where to start</li></ul>
          <p className="details-note">Free audit. No obligation.</p>
        </div>
      </section>
      <section className="offering offering-website" aria-labelledby="website-title">
        <div className="card-slot"><article className="website-card">
          <div className="website-copy">
            <div className="website-label"><ProductIcon/><span>WEBSITE</span></div>
            <h2 id="website-title">Your next chapter,<br/>online.</h2>
            <p>A considered digital presence built around your brand and your business.</p>
            <div className="website-action"><button className="start-button" aria-expanded={websiteOpen} aria-controls="website-details" onClick={() => setWebsiteOpen(!websiteOpen)}>{websiteOpen ? 'LESS DETAIL' : 'EXPLORE WEBSITE'}<span className="expand-symbol" aria-hidden="true">{websiteOpen ? '−' : '+'}</span></button></div>
          </div>
          <div className="website-preview" aria-hidden="true"><div className="preview-bar"><i/><i/><i/><span>YOURBUSINESS.COM</span></div><div className="preview-page"><div className="preview-nav"><b>Z7</b><span/><span/><span/></div><strong>Made for<br/>what’s next.</strong><div className="preview-button"/><div className="preview-panels"><i/><i/></div></div></div>
        </article></div>
        <div id="website-details" className="offering-details" hidden={!websiteOpen}>
          <h2>A website built around your business.</h2>
          <p>A clear, considered home for your brand that helps people understand what you do and take the next step.</p>
          <ul><li>Design that reflects your brand</li><li>A responsive experience on mobile and desktop</li><li>Clear navigation and paths to enquiry</li></ul>
          <p className="details-note">We start with your goals, then shape the pages and features you need.</p>
        </div>
      </section>
      <section className="bento-tile approach-tile" aria-labelledby="approach-title">
        <span>THE ZONESEVEN APPROACH</span>
        <h2 id="approach-title">Think. Build. Evolve.</h2>
        <p>Strategy, design, and technology working together.</p>
      </section>
    </main>
    <footer className="cards-footer"><span>© {new Date().getFullYear()} ZoneSeven</span><a href="#top">Back to top <span aria-hidden="true">↑</span></a></footer>
  </div>;
}
