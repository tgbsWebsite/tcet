import React from 'react';

import './ChairmanMessage.css';
import UniversityFooter from '../../components/Footer';
import Navbar from '../../components/navbar';


function MessageCard({ data }) {
    return (
        <div className="msg-card">
            <div className="msg-header">
                <h1>Dean's (Academics) Message</h1>
            </div>
            <div className="msg-body">
                <img src={data.imageUrl} alt={data.name} className="msg-image" />
                <div className="msg-content">
                    <div className="msg-title">
                        <h2>{data.name}</h2>
                        <span className="msg-role">{data.title}</span>
                    </div>
                    <div className="msg-text">
                        <p>{data.message}</p>
                        <div className="msg-author">
                            <strong>{data.name}</strong> <br />
                            {/* <span className="msg-date">Last Updated: 01/16/2025</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Dean() {
    const infoData = {
  name: 'DR. Sheetal Rathi',
  title: 'Dean - Academic',
  message: `As the Dean of Academic, I'm delighted to welcome you to our esteemed academic community. At TCET, we're committed to providing a world-class education that equips you with the technical skills, knowledge, and mind-set needed to excel in the ever-evolving field of engineering and technology. With distinguished faculty members who are experts in their respective fields, cutting-edge laboratories, and industry-aligned curriculum, TCET offers an unparalleled learning experience. Whether you're passionate about designing innovative solutions, conducting advanced research, or honing your technical expertise, TCET provides the perfect platform for you to achieve your academic and professional goals.

However, TCET is not just about theoretical learning. We believe in hands-on, practical education that prepares you for the real-world challenges you'll encounter in your career. Through industry internships, collaborative projects, and experiential learning opportunities, you'll have the chance to apply your knowledge in real-world settings and gain valuable industry experience. Moreover, TCET fosters a culture of innovation and entrepreneurship, encouraging students to explore their creativity and develop innovative solutions to complex problems. With access to incubation centres, entrepreneurship programs, and mentorship opportunities, TCET empowers you to turn your ideas into reality and become the leaders of tomorrow's tech-driven world.

In addition to academic excellence, TCET offers a vibrant campus life filled with extracurricular activities, technical clubs, and cultural events. This provides you with the opportunity to enhance your leadership skills, build strong networks, and create lifelong memories outside the classroom.

So, whether you're interested in pursuing a career in engineering, technology, or research, TCET is committed to providing you with the skills, resources, and support you need to succeed. Join us on this exciting journey of discovery, innovation, and personal growth. We look forward to welcoming you to TCET and witnessing your remarkable achievements.

DR. Sheetal Rathi
Ph.D. (Computer Engineering)
M.E. (Computer Engineering)
B.E. (Computer Engineering)`,
  imageUrl: '/images/chairman.webp',
};


    return (
        <>
            <Navbar />

            <div className="page-container">
                <aside className="sidebar">
                    <h3>About TCET</h3>
                    <ul>
                        <li><a href="/about/#">About Us</a></li>
                        <li><a href="/about/chairman">Chairman's Message</a></li>
                        <li><a href="/about/ceo">CEO's Message</a></li>
                        <li><a href="/about/principal">Principal's Message</a></li>
                        <li><a href="/about/vice-principal">V.P & Director IQAC Message</a></li>
                        <li><a href="/about/dean-message">Dean's (SSW) Message</a></li>
                        <li><a href="/about/dean">Dean's (R&D) Message</a></li>
                        <li><a href="/about/dean-academic">Dean's (Academic) Message</a></li>
                        {/* ...other sidebar links */}
                    </ul>
                </aside>
                <main className="main-content">
                    <MessageCard data={infoData} />
                </main>
            </div>
            <UniversityFooter />
        </>
    );
};
