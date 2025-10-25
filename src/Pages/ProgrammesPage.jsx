import React from 'react';
import UniversityFooter from '../components/Footer';

import './ProgrammesPage.css';
import Navbar from '../components/navbar';

const ProgrammesPage = () => {
  const programmesData = [
    {
      id: 1,
      title: "UNDERGRADUATE PROGRAMMES",
      description: "Explore our diverse range of undergraduate programs designed to build a strong foundation for your career. Our programs combine theoretical knowledge with practical skills to prepare you for the challenges of tomorrow.",
      imageSrc: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      imagePosition: "left",
      buttonText: "Explore →"
    },
    {
      id: 2,
      title: "POST GRADUATE PROGRAMMES",
      description: "Advance your expertise with our specialized postgraduate programs. Designed for professionals and recent graduates, these programs offer advanced knowledge and research opportunities in cutting-edge fields.",
      imageSrc: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
      imagePosition: "right",
      buttonText: "Explore →"
    },
    {
      id: 3,
      title: "DOCTORAL PROGRAMMES",
      description: "Pursue excellence in research with our doctoral programs. Work alongside renowned faculty members and contribute to groundbreaking research in your field of interest. Shape the future of academia and industry.",
      imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      imagePosition: "left",
      buttonText: "Explore →"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="programmes-page-wrapper">
        {/* Hero Section */}
        <div className="programmes-hero-section">
          <h1 className="programmes-hero-title">
            Explore Life Changing Programmes
          </h1>
        </div>

        {/* Main Content */}
        <main className="programmes-main-container">
          {/* Programme Cards */}
          <div className="programmes-cards-container">
            {programmesData.map((programme) => (
              <div 
                key={programme.id} 
                className={`programme-card ${programme.imagePosition === 'right' ? 'programme-card-reverse' : ''}`}
              >
                {/* Image Section */}
                <div className="programme-image-section">
                  <img
                    src={programme.imageSrc}
                    alt={programme.title}
                    className="programme-image"
                  />
                </div>

                {/* Content Section */}
                <div className="programme-content-section">
                  <h2 className="programme-title">{programme.title}</h2>
                  <p className="programme-description">{programme.description}</p>
                  <button className="programme-explore-btn">
                    {programme.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    <UniversityFooter />
    </>
  );
};

export default ProgrammesPage;
