import React from 'react';

import './ChairmanMessage.css';
import UniversityFooter from '../../components/Footer';
import Navbar from '../../components/navbar';


function MessageCard({ data }) {
    return (
        <div className="msg-card">
            <div className="msg-header">
                <h1>Dean's (Research & Development) Message</h1>
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
  name: 'Dr. Vinitkumar Jayaprakash Dongre',
  title: 'Dean - Research & Development',
  message: `“First of All, I welcome you to the Thakur College of Engineering and Technology (TCET)!”

I am thrilled to share the innovative spirit and academic excellence that define our institution. Our Research & Development (R&D) department is dedicated to fostering a culture of creativity, collaboration, and cutting-edge research that addresses the pressing challenges of our time.

We recognize that great innovations often result from collaborative efforts. Our department actively seeks partnerships with industry leaders, government agencies, and academic institutions worldwide. These collaborations provide our students and faculty with invaluable resources, diverse perspectives, and real-world experiences that enrich their research endeavors. Our students are the cornerstone of our R&D activities. We are dedicated to providing them the tools, guidance, and opportunities they need to become the next generation of innovators and thought leaders. Through hands-on projects, internships, and research assistantships, students are empowered to transform their ideas into impactful solutions.

As we look to the future, we remain committed to excellence in research and development. We aim to expand our contributions to society through groundbreaking discoveries and innovations that improve lives and drive economic growth. We invite you to join us on this exciting journey and to be part of our vibrant research community. We look forward to collaborating with you and achieving new heights together.

Dr. Vinitkumar Jayaprakash Dongre
Ph.D. (Electronics & Telecommunication Engineering)
M.Tech. (Electronics & Telecomm. Engg.)
B.E. (Industrial Electronics Engg.)`,
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
