import React from 'react';

import './ChairmanMessage.css';
import UniversityFooter from '../../components/Footer';
import Navbar from '../../components/navbar';


function MessageCard({ data }) {
    return (
        <div className="msg-card">
            <div className="msg-header">
                <h1>Dean's (Student & Staff Welfare) Message</h1>
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

export default function DeanMessage() {
    const infoData = {
  name: 'DR. LOCHAN JOLLY',
  title: 'Message',
  message: `At TCET, we believe in nurturing not just engineers, but innovators, problem solvers, and leaders. Our commitment to excellence is reflected in dedicated faculty, state-of-the-art infrastructure, and industry collaborations. Whether you aspire to create groundbreaking technology, conduct cutting-edge research, or launch your own startup, TCET provides the ideal platform to realize your dreams.

TCET is not just about academics; it's a vibrant community where students engage in extracurricular activities, clubs, and events. We encourage you to explore your interests beyond the classroom. Our dedicated faculty members bring their expertise to the classroom, ensuring that students receive a strong foundation in engineering and technology. We encourage active learning, research, and practical application.

Join us on this exhilarating journey of learning, exploration, and growth. Discover your passion, embrace challenges, and make a lasting impact. We look forward to welcoming you to our campus and let TCET shape your future.

DR. LOCHAN JOLLY
Ph.D.(Electronics & Telecommunication Engineering)
M.Tech. (Microelectronics Engineering)
B.E.(Electronics & Telecommunication Engineering)`,
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
                           <li><a href="/about/dean-academics">Dean's (Academic) Message</a></li>
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
