import React from "react";
import "./UniversityFooter.css";

export default function UniversityFooter() {
  return (
    <footer className="uf-footer">
      <div className="uf-container">
        <div className="uf-grid">
          <div className="uf-col">
            <h3 className="uf-col-title">About Us</h3>
            <p className="uf-col-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labor.
            </p>
          </div>

          <div className="uf-col">
            <h3 className="uf-col-title">Mandatory Disclosure</h3>
            <p className="uf-col-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labor.
            </p>
          </div>

          <div className="uf-col">
            <h3 className="uf-col-title">Quick Links</h3>
            <p className="uf-col-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labor.
            </p>
          </div>

          <div className="uf-col">
            <h3 className="uf-col-title">Terms &amp; Conditions</h3>
            <p className="uf-col-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labor.
            </p>
          </div>
        </div>

        <div className="uf-bottom">
          <div className="uf-address">
            <h4 className="uf-address-title">
              Thakur College Of Engineering And Technology
            </h4>
            <p className="uf-address-text">
              A-Block, Thakur Educational Campus,
              <br />
              Shyamnarayan Thakur Marg, Thakur Village, Kandivali(E), Mumbai -
              400101.
            </p>
            <p className="uf-address-text">
              Phone: 022 - 28461891 / 022 - 67308000, 67308106 / 07 | Fax: 022 -
              28461890
            </p>
            <p className="uf-address-text">
              E-Mail:{" "}
              <a className="uf-link" href="mailto:tcet@thakureducation.or">
                tcet@thakureducation.or
              </a>
            </p>
            <p className="uf-address-text">
              Websites:{" "}
              <a className="uf-link" href="http://www.tcetmumbai.in">
                www.tcetmumbai.in
              </a>
              ,{" "}
              <a className="uf-link" href="http://www.thakureducation.org">
                www.thakureducation.org
              </a>
            </p>
          </div>

          <div className="uf-social">
            <a className="uf-social-icon" href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                />
              </svg>
            </a>
            <a className="uf-social-icon" href="#" aria-label="Twitter/X">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
            </a>
            <a className="uf-social-icon" href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.846 2.846c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-2.846 2.846c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-2.846-2.846c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 012.846-2.846c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM8.453 12.03a4.02 4.02 0 004.02 4.02 4.02 4.02 0 004.02-4.02 4.02 4.02 0 00-4.02-4.02 4.02 4.02 0 00-4.02 4.02zm9.563-5.914a1.206 1.206 0 100-2.412 1.206 1.206 0 000 2.412z"
                />
              </svg>
            </a>
            <a className="uf-social-icon" href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.82V8.001l6.063 4.001z"
                />
              </svg>
            </a>
            <a className="uf-social-icon" href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-12 3H5v12h2V6zm3 0h2v12H8V6zm5-2h-3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 12H9V6h3v10z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="uf-copy">
        Copyright © 2025 | TCET University (proposed) | All rights reserved |
        Design, Developed & Maintain by TEG Marketing Group
      </div>
    </footer>
  );
}
