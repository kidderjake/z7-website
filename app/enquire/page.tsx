"use client";

import { useState } from 'react';
import '../cards.css';
import './enquire.css';

export default function EnquirePage() {
  const [status, setStatus] = useState('');
  function saveEnquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `ZoneSeven enquiry\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nBusiness: ${data.get('business') || 'Not provided'}\nInterested in: ${data.get('offering')}\n\n${data.get('message')}`;
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'zoneseven-enquiry.txt';
    link.click();
    URL.revokeObjectURL(url);
    setStatus('Your enquiry has been saved as a file. It has not been sent.');
  }
  return <div className="cards-page enquiry-page" id="top">
    <header className="cards-header"><a href="/" aria-label="Z7 home"><img src="/brand/z7-inline-icon-navy.png" width="54" height="54" alt="Z7"/></a><span className="cards-wordmark">ZONESEVEN</span><a className="enquiry-back" href="/">Back <span aria-hidden="true">↗</span></a></header>
    <main className="enquiry-main">
      <div className="enquiry-intro"><p className="enquiry-eyebrow">LET’S TALK</p><h1>What do you<br/>have in mind?</h1><p>A new website or less busywork.<br/>Tell us a little about your business.</p></div>
      <form className="enquiry-form" onSubmit={saveEnquiry} onChange={() => setStatus('')}>
        <fieldset><legend>I’m interested in</legend><div className="enquiry-options"><label><input type="radio" name="offering" value="Website" required defaultChecked/><span>Website</span></label><label><input type="radio" name="offering" value="Free AI Automation Audit"/><span>Free AI Automation Audit</span></label></div></fieldset>
        <div className="enquiry-fields"><label>Your name<input name="name" autoComplete="name" required maxLength={120}/></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254}/></label></div>
        <label>Business name <span className="optional">(optional)</span><input name="business" autoComplete="organization" maxLength={180}/></label>
        <label>What would you like help with?<textarea name="message" rows={4} required maxLength={5000} placeholder="Tell us about your website or a task you’d love to automate."/></label>
        <button className="enquiry-submit" type="submit">Save enquiry draft <span aria-hidden="true">↗</span></button>
        <p className="enquiry-note">Enquiry delivery is not connected yet. You can save your draft as a file.</p><p className="enquiry-status" role="status">{status}</p>
      </form>
    </main>
    <footer className="cards-footer"><span>© {new Date().getFullYear()} ZoneSeven</span><a href="/">Back to offerings <span aria-hidden="true">↗</span></a></footer>
  </div>;
}
