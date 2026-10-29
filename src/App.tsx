import { useState, type FormEvent } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Coffee, Menu, X } from "lucide-react";

const menuItems = [
  { name: "Honey oat flat white", detail: "Double espresso · oat milk · wildflower honey", price: "₹240", tag: "HOUSE FAVOURITE" },
  { name: "Brown butter croissant", detail: "Laminated daily · cultured butter · flaky layers", price: "₹190", tag: "BAKED IN-HOUSE" },
  { name: "Ricotta toast", detail: "Whipped ricotta · seasonal fruit · sourdough", price: "₹360", tag: "ALL-DAY BRUNCH" },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", topic: "A general enquiry", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "demo" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

    if (!endpoint) {
      setStatus("demo");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      setForm({ name: "", email: "", topic: "A general enquiry", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement">GOOD COFFEE. GOOD COMPANY. EVERY DAY. <span>↗</span></div>
      <header className="header">
        <a className="wordmark" href="#home" aria-label="Maison Roast home">
          <span className="wordmark-icon"><Coffee size={21} strokeWidth={1.5} /></span>
          <span>maison<span className="wordmark-light">roast</span><small>COFFEE · KITCHEN · COMMUNITY</small></span>
        </a>
        <nav className={mobileMenuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#menu" onClick={closeMenu}>The menu</a>
          <a href="#visit" onClick={closeMenu}>Find us</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Say hello <ArrowUpRight size={15} /></a>
        </nav>
        <button className="mobile-toggle" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> YOUR NEW EVERYDAY RITUAL</p>
            <h1>Good things<br />take <em>slow.</em></h1>
            <p className="hero-description">Thoughtful coffee, seasonal plates, and a little room to breathe. Pull up a chair — you're right where you need to be.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#menu">Explore the menu <ArrowRight size={16} /></a>
              <a className="text-link" href="#story">A little about us <ArrowDownRight size={16} /></a>
            </div>
            <div className="hero-footnote"><span className="status-dot" /> BREWING DAILY FROM 8 AM</div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1500&q=85" alt="Sunlit specialty coffee shop with a warm, inviting interior" />
            <div className="image-stamp"><span>MADE WITH</span><strong>intention.</strong><span>SHARED WITH LOVE</span></div>
            <div className="vertical-note">A SLOWER KIND OF MORNING — EST. 2024</div>
          </div>
          <div className="hero-index">01 <span /> 03</div>
        </section>

        <section className="ticker" aria-label="Our philosophy">
          <span>GOOD COFFEE</span><i>✳</i><span>SEASONAL FOOD</span><i>✳</i><span>SLOW MORNINGS</span><i>✳</i><span>GOOD COMPANY</span><i>✳</i><span>GOOD COFFEE</span>
        </section>

        <section className="story section-pad" id="story">
          <div className="section-label"><span>01 / THE MAISON WAY</span><span>SMALL MOMENTS, MADE BETTER</span></div>
          <div className="story-grid">
            <div className="story-heading"><p className="eyebrow">A PLACE TO LAND</p><h2>Not just a coffee.<br /><em>A feeling.</em></h2></div>
            <div className="story-copy"><p>We believe the best parts of a day are often the simplest. The first sip. The familiar face behind the counter. The conversation that lasts a little longer than planned.</p><p>Maison Roast is our love letter to those moments — a neighbourhood café built around good ingredients, considered craft, and making everyone feel at home.</p><a className="underlined-link" href="#visit">Come as you are <ArrowUpRight size={15} /></a></div>
          </div>
          <div className="story-images">
            <img className="story-img-large" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1100&q=85" alt="Freshly brewed coffee on a café table" loading="lazy" />
            <img className="story-img-small" src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=850&q=85" alt="Warm café interior with natural textures" loading="lazy" />
            <div className="handwritten">Made for<br />the in-between.</div>
          </div>
        </section>

        <section className="menu-section section-pad" id="menu">
          <div className="section-label"><span>02 / SOMETHING GOOD</span><span>FRESHLY MADE, ALWAYS</span></div>
          <div className="menu-heading"><div><p className="eyebrow">A FEW HOUSE FAVOURITES</p><h2>Made to be <em>s savoured.</em></h2></div><p>Good ingredients don't need much fuss.<br />Just a little care, and a really good plate.</p></div>
          <div className="menu-layout">
            <div className="menu-photo"><img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1100&q=85" alt="Creamy latte with delicate latte art" loading="lazy" /><span className="photo-caption">THE DAILY POUR — NO. 01</span></div>
            <div className="menu-list">
              {menuItems.map((item, index) => <article className="menu-item" key={item.name}>
                <div className="menu-item-top"><span className="menu-number">0{index + 1}</span><span className="menu-tag">{item.tag}</span></div>
                <div className="menu-item-title"><h3>{item.name}</h3><span>{item.price}</span></div>
                <p>{item.detail}</p>
              </article>)}
              <a className="button button-outline" href="#contact">Ask us about today's specials <ArrowRight size={16} /></a>
              <p className="menu-disclaimer">Sample menu for this demo. Prices and items are illustrative.</p>
            </div>
          </div>
        </section>

        <section className="quote-band">
          <span className="quote-mark">“</span>
          <blockquote>Make time for the things<br />that <em>make your day.</em></blockquote>
          <span className="quote-attribution">A LITTLE MAISON PHILOSOPHY</span>
        </section>

        <section className="visit-section section-pad" id="visit">
          <div className="section-label"><span>03 / YOUR TABLE'S WAITING</span><span>COME ON IN</span></div>
          <div className="visit-grid">
            <div className="visit-copy"><p className="eyebrow">FIND YOUR WAY HERE</p><h2>We'll put<br />the kettle <em>on.</em></h2><p className="visit-description">Drop by for your morning ritual, a long lunch, or absolutely no reason at all. There's always room for one more.</p><div className="visit-detail"><span>FIND US</span><p>12 Market Lane<br />Bangalore, India</p></div><div className="visit-detail"><span>OPENING HOURS</span><p>Monday – Sunday<br />8:00 AM – 8:00 PM</p></div><a className="underlined-link" href="https://maps.google.com/?q=12+Market+Lane+Bangalore+India" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={15} /></a></div>
            <div className="visit-image"><img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1300&q=85" alt="Inviting café seating and coffee bar" loading="lazy" /><div className="open-card"><span className="status-dot" /> OPEN EVERY DAY <strong>8 AM — 8 PM</strong></div></div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="section-label"><span>04 / LET'S TALK</span><span>WE'RE ALL EARS</span></div>
          <div className="contact-grid">
            <div className="contact-intro"><p className="eyebrow">QUESTIONS, PLANS, OR JUST A HELLO</p><h2>Drop us<br />a <em>line.</em></h2><p>Planning a little get-together? Curious about our menu? Send us a note and we'll get back to you over a good cup of coffee.</p><a href="mailto:hello@maisonroast.com" className="contact-email">hello@maisonroast.com <ArrowUpRight size={15} /></a><a href="tel:+911234567890" className="contact-detail-link">Call us: +91 1234567890</a><a className="contact-detail-link" href="https://wa.me/911234567890" target="_blank" rel="noreferrer">WhatsApp us: +91 1234567890 <ArrowUpRight size={15} /></a></div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row"><label>Your name<input required minLength={2} autoComplete="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="What should we call you?" /></label><label>Email address<input required type="email" autoComplete="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label></div>
              <label>What's on your mind?<select value={form.topic} onChange={e => setForm({ ...form, topic: e.target.value })}><option>A general enquiry</option><option>Private event or group booking</option><option>Menu and dietary questions</option><option>Collaboration</option><option>Something else</option></select></label>
              <label>Your message<textarea required minLength={10} rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us a little more..." /></label>
              <button className="button button-dark submit-button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send your note"} <ArrowRight size={16} /></button>
              {status === "success" && <p className="form-status success" role="status">Thanks for reaching out — your message has been sent.</p>}
              {status === "demo" && <p className="form-status" role="status">Your form is validated and ready. To deliver messages, add a Formspree endpoint using the setup steps in README.md.</p>}
              {status === "error" && <p className="form-status error" role="alert">Sorry, your message could not be sent. Please try again or email us directly.</p>}
              <p className="form-note">Your details are only used to respond to your enquiry.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-icon"><Coffee size={21} strokeWidth={1.5} /></span><span>maison<span className="wordmark-light">roast</span><small>COFFEE · KITCHEN · COMMUNITY</small></span></a>
        <span className="footer-note">SLOW DOWN. SIP SOMETHING GOOD.</span>
        <div className="footer-right"><span>© 2026 MAISON ROAST</span><a href="#home">BACK TO TOP ↑</a></div>
        <footer className="footer">
  <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-icon"><Coffee size={21} strokeWidth={1.5} /></span><span>maison<span className="wordmark-light">roast</span><small>COFFEE · KITCHEN · COMMUNITY</small></span></a>
  <span className="footer-note">SLOW DOWN. SIP SOMETHING GOOD.</span>
  <div className="footer-right">
    <span>© 2026 MAISON ROAST</span>
    <a href="#home">BACK TO TOP ↑</a>
  </div>

  <p className="internship-credit">
    Designed &amp; Developed as part of the{" "}
    <strong>ApnoAi Web Development Internship</strong>.
  </p>
</footer>
      </footer>
    </div>
  );
}

export default App;
