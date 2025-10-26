import React from "react";
import UniversityFooter from "../components/Footer";
import Navbar from "../components/navbar";
import "./aboutpAGE.css";

const AboutPage = () => {
  const infrastructureImages = [
    {
      id: 1,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLR-ZzVgWk50opYF_qy22sFVTZDpdIYjk3v2pDt62agOo8v9N93iIzpBzoDp_Y_8_Wmia6u0uVZdNUNFkz6SzLjqKSUnhT0Pzomt9zO46keVdV1U2zEdOT5JXajAY8augYS9mEGJTdXfrbr99fIYjAmNaNjZIL2CamKRUu-psvkUeH3KLyn02cg2pOmvGxF2GfABJJPCCA8XGFFj9D_IwIttHxErNtS-ru4Whh3oZVcO5Pjep37qTBt4uYIHziA_unuFGCG_10-8g",
      alt: "Infrastructure image 1",
      gridClass: "gallery-item-small",
    },
    {
      id: 2,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA0rVvUEBY5fUh_7sIkDdbP84o0ud_Bq5nQFLTjgMsNWs2WxkdnflgJA0r4W61M3K02Dw96V2qwzS8ovtuhPWbhXcqCCse4lJcAOwNDMuMf0YsdnD5NUl-P6nzXdovMDCKKM6IEoUG3OHZpEE3Ek2NE7IlrVNV7zTIUbZlDsVQ8qUoaQxxR7Uw_-yHvcThjwRC-ouAJrJtKBfQ6yRvgsRmmdSJ931CTGwN6EeiIpmPOCr2FtTdY1ItjR8QBFzWDvm0JpYLEEOSHKQ",
      alt: "Infrastructure image 2",
      gridClass: "gallery-item-small",
    },
    {
      id: 3,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuArBPXn3WMnhaNMuaqAzUeYwgMlIOH7p1074VPNbGO91A0X6U-3tBpRLu_qNl_P2HVjdzB3NuEboTnRDv5CeY-Y42wsYClJBbyDdDeHbCbNwVDpNbZjCP0LGoHueM4P9ifz5tKfi_sFQwqXN6pHKtcda7He9FtkNtbCOFRx8Rnf0idd987WD8kIszTB2HQRABC71BxgaBXs42oYhpaFbHBBrEc4HZ8pBJ2GSDQJX-pSPbPkley5KDI58Il8r3XP6yYKRPlZ-mPWmnA",
      alt: "Infrastructure image 3",
      gridClass: "gallery-item-large",
    },
    {
      id: 4,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUnj5trR5S2esR9ZvpAKN6f9ulszPklPPvRwxRP_pHVRSUVUe2bRnEIa6FEfxOkbbt3WgIF-jbG7iAaEOKmLTnpqfOx8MPeAp5szdLl5-J_xSv7yPGODeStS-21g7L0ueZn6Y22oY5Cw47SgGmfzMTHSCcpvAg6wQn96LG9hubW9ROHRQWe2m1huZHy8I7wZxsnY6wt8SKsC7s4mV_FXYF7YHRmucsWXUh5YXDFr2pD9lWvy6gQwu2AP79KP_X_NWyKzFlCl-Y8jI",
      alt: "Infrastructure image 4",
      gridClass: "gallery-item-wide",
    },
    {
      id: 5,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcyY1f2_5g7nVO9-WRTA99E-1qPvLfayDUrNZyJfr6I7OPFNj_AFezgCc2Kp4MLbmOBDM2tkPx_kuGfAlUNe84kCmKov64PgbGYGL2enQsLekjdlJj_h-FQKWo0ciEsNBEsN5nnHl6iltxtqH21Dx-tNB2eJ280ojq-G5xzWtLSeaCHa5EtV-_Dl6Fne4RBpEDPdbcgtBGCVEDXfYc88MtmqF5_q5GkbkEuSqrRJwg3uPW4evlArTurda9cI4ib3875pcriuJ6gsE",
      alt: "Infrastructure image 5",
      gridClass: "gallery-item-medium",
    },
    {
      id: 6,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjyaPVI6NYFUA4EyjtByM3bk40gD7W7DWzupFOxzLpzSkhIbaj2GK0aIomjAXBGIy0_Gy3tC-fDdhp7gEJG0NYi6U_En8opa6PeXkVFa0OBo1l11TkgJtiQC3dpbXS40bVEpsJh_Pvw-0xCWR1iXIcv-JEYxcaqbhjOSNDwEdo_NShD-4Sq0YzNDkXdxjg5d8QuxwXIPEdzqUjAXLBDkmfWCf5NeBA0zwyAuAY6d0viBxETiK2Gb6SCIsl004KuPR7YgabWc6al1I",
      alt: "Infrastructure image 6",
      gridClass: "gallery-item-medium",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="about-page-wrapper">
        {/* Hero Section */}
        <div className="about-hero-section">
          <h1 className="about-hero-title">TCET Infra Image</h1>
        </div>

        {/* Main Content */}
        <main className="about-main-container">
          {/* Title Section */}
          <div className="about-title-section">
            <h2 className="about-main-title">About TCET-University</h2>
          </div>

          {/* Description Section */}
          <div className="about-description-section">
            <p>
              Thakur College of Engineering & Technology (TCET) is an autonomous
              and linguistic minority Institute. It was established in AY
              2001-02 with a clear objective of providing quality technical
              education in tune with international standards and contemporary
              global requirements. TCET offers 21 U.G., 11 PG., and 5 Ph.D.
              (Tech.) Courses. TCET is an ISO 9001:2015, ISO 14001:2015 & ISO
              50001:2018 certified and certification has helped Institute to
              develop a student centric process driven system required for
              quality education in the 21st century.
            </p>
            <p>
              As a result, Institute is accredited by NAAC with an "A" grade and
              all eligible programmes are accredited by NBA for three years.
              Some of the programmes are accredited multiple times. Moreover,
              all programmes are permanently affiliated with the University of
              Mumbai. TCET is the recipient of reputed IMC - Ramkrishna Bajaj
              National Quality Commendation Certification 2012 (Education)
              followed by IMC - Ramkrishna Bajaj National Quality Award 2015
              (Education). In July 2016 TCET has been selected for Asia Pacific
              Quality Award (APQA) for the best in the class award in the
              education category from Global Pacific Quality Award (GPQA). TCET
              has been awarded in the category of "Excellent Performing &
              Innovative Engineering Institute in Maharashtra" at the National
              Maharashtra Education Summit & Awards 2016, jointly organized by
              the University of Mumbai & CMAI Association of India. TCET is a
              member of the National Entrepreneurship Network (NEN).
              Confederation of Indian Industry (CII) and Maharashtra Economic
              Development Corporation (MEDC) for active industry-institute
              interaction where TCET has been felicitated by CII-Education
              Excellence Forum for enhancing Industry Connect, Employability and
              Faculty Competency. For more details one can visit college Website{" "}
              <a
                href="https://www.tcetmumbai.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.tcetmumbai.in
              </a>
            </p>
          </div>

          {/* Infrastructure Gallery */}
          <div className="about-gallery-grid">
            {infrastructureImages.map((image) => (
              <div
                key={image.id}
                className={`about-gallery-item ${image.gridClass}`}
              >
                <img
                  alt={image.alt}
                  className="about-gallery-image"
                  src={image.src}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
      <UniversityFooter />
    </>
  );
};

export default AboutPage;
