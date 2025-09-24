import React from "react";
import "./NewsletterSubscribe.css";

export default function NewsletterSubscribe() {
  return (
    <section className="ns-section">
      <div className="ns-wrap">
        <header>
          <h2 className="ns-title">Subscribe to our newsletter</h2>
          <p className="ns-subtitle">
            Get expert advice for your educational journey delivered to your inbox each month.
            It’s short, and worthwhile — we promise!
          </p>
        </header>

        <form className="ns-form" onSubmit={(e) => e.preventDefault()}>
          <div className="ns-row">
            <label className="ns-visually-hidden" htmlFor="ns-email">Email address</label>
            <input
              id="ns-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              className="ns-input"
              aria-label="Email address"
            />
            <button type="submit" className="ns-button">SUBSCRIBE NOW</button>
          </div>
        </form>
      </div>
    </section>
  );
}
