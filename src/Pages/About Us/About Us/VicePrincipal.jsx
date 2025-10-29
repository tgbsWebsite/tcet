import React from 'react';

import './ChairmanMessage.css';
import UniversityFooter from '../../components/Footer';
import Navbar from '../../components/navbar';


function MessageCard({ data }) {
    return (
        <div className="msg-card">
            <div className="msg-header">
                <h1>Vice Principal's & Director IQAC Message</h1>
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

export default function VicePrincipal() {
    const infoData = {
        name: 'PROF. R R SEDAMKAR',
        title: 'Vice Principal',
        message: `Welcome to Thakur College of Engineering and Technology (TCET)!

We, at TCET, believe in nurturing a holistic education that goes beyond the classroom. We are committed to creating a safe, inclusive, and stimulating environment where every student feels valued and empowered to pursue their passions. Our diverse programs and extracurricular activities are designed to inspire curiosity, build character, and develop critical life skills. It is with great pleasure unwavering commitment to delivering world-class education and fostering an environment where students can thrive and excel.

In today's rapidly evolving society, the role of educational institutions is more critical than ever. Our mission is to nurture lifelong learners equipped with not only technical expertise but also the creativity, adaptability, and emotional intelligence necessary to navigate the complexities of the modern world. We advocate for a holistic approach to education, where cutting-edge technology and ethical reasoning are intertwined. By promoting a culture of collaboration, problem-solving, and innovation, we aim to produce graduates who are industry-ready and socially responsible citizens. Our comprehensive learning agenda is designed to intellectually challenge and reward students, preparing them to make meaningful contributions to society.

Our institute has consistently set benchmarks in technical education, equipping students with the skills and knowledge needed for a successful global career. With a dedicated faculty renowned for their expertise and commitment, we provide a nurturing environment that inspires students to achieve their fullest potential. The hallmark of our education system is fostering self-reliance and independent thinking, empowering students to become confident and proactive individuals. As we move forward, our focus on continuous development and quality teaching remains steadfast.

We invite you to join us on this exciting journey of discovery and growth. I am confident that your time with us will be both memorable and transformative.
Wishing you all a bright and prosperous future.

PROF. R R SEDAMKAR,
Ph.D.(Engineering)
M.E.(Computer Engineering)
B.E. (Computer Engineering)`,
        imageUrl: '/images/chairman.webp',
    }

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
