import "./aboutProgrammes.tu.css";

export default function AboutProgrammesTU() {
  const stats = [
    { number: "5+", label: "Schools", color: "about-color-orange" },
    { number: "37+", label: "Courses", color: "about-color-blue" },
    { number: "2700+", label: "Yearly Intake", color: "about-color-green" },
    { number: "5200+", label: "Students on Campus", color: "about-color-purple" },
    { number: "300+", label: "Faculty", color: "about-color-red" },
    { number: "40LPA+", label: "CTC", color: "about-color-yellow" },
  ];

  return (
    <div className="about-wrapper">
      <div className="about-container">
        {/* About Section */}
        <div className="about-grid">
          {/* Text Section */}
          <div className="about-text-section">
            <h1 className="about-main-title">
              About TCET <br/> Deemed to be University
            </h1>
            {/* <h2 className="about-subtitle">Sub Header</h2> */}
            <p className="about-description">
              Thakur College of Engineering & Technology (TCET) is an autonomous and linguistic minority Institute. It was established in AY 2001-02 with a clear objective of providing quality technical education in tune with international standards and contemporary global requirements. TCET offers 21 U.G., 11 PG., and 5 Ph.D. (Tech.) Courses. TCET is an ISO 9001:2015, ISO 14001:2015 & ISO 50001:2018 certified and certification has helped Institute to develop a student centric process driven system required for quality education in the 21st century.
            </p>
          </div>

          {/* Image Section */}
          <div className="about-image-section">
            <img
              src="/WhatsApp Image 2025-10-25 at 3.46.12 PM.jpeg"
              alt="University Campus"
              className="about-image"
            />
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="vm-container">
          <div className="vm-grid">
            <div className="vm-section">
              <h2 className="vm-heading">Our Vision</h2>
              <p className="vm-text">
                Thakur College of Engineering and Technology will excel in Technical, Professional and Research Education to become an internationally renowned multidisciplinary premier institute of engineering, technology, computer application, management studies and allied professional education.
              </p>
            </div>

            <div className="vm-section">
              <h2 className="vm-heading">Our Mission</h2>
              <p className="vm-text">
                To provide state-of-the-art infrastructure and right academic ambience for UG, PG and Ph.D. programmes.
                To nurture technical competence and research aptitude amongst aspiring graduates by imparting agile, holistic and multidisciplinary education.
                To enhance career opportunities for students by collaborating with reputed industry, academic and research institutes.
                To make students ethical and responsible citizens, both locally and globally competent.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="about-divider">
          <div className="about-divider-line"></div>
        </div>

        {/* Stats Section */}
        <section className="about-stats-section">
          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className={`about-stat-card ${stat.color}`}>
                <p className="about-stat-number">{stat.number}</p>
                <p className="about-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
