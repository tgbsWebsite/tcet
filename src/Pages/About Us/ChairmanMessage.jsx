import React from 'react';

import './ChairmanMessage.css';
import UniversityFooter from '../../components/Footer';
import Navbar from '../../components/navbar';


function MessageCard({ data }) {
  return (
    <div className="msg-card">
      <div className="msg-header">
        <h1>Chairman's Message</h1>
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

export default function ChairmanMessage() {
  const infoData = {
    name: 'Shri. V K Singh',
    title: 'Chairman',
    message:
      'Scientific and technological breakthroughs have improved people\'s lives by providing them with luxuries in all areas. Their unstoppable advancements promote exponential growth in almost all sectors including healthcare and infrastructure meeting the human needs and wants. As a result, young people have more opportunities to advance their careers in the field of science and technology where they are groomed and they can capitalize their prospects taking their career ahead.\n\
The autonomous (TCET) is established with that objective where Generation Y will establish the world order with their innovative mindsets. In line with our mission statement, the institute provides the best academic environment, high-quality training, and cutting-edge facilities that meet worldwide standards. Our sustained academic performance, student engagement and prizes at the state and national levels, high placement rates, industry connections, and national and international recognitions and accolades are just a few of the accomplishments that help to boost the institute\'s reputation. We provide platforms for co-curricular and extracurricular activities that contribute to students\' general growth as well as academic performance. Student-led clubs, social, cultural, and sporting events, among other things, are held to instil social, moral, ethical, and universal concepts that will assist students in becoming responsible global citizens. Numerous accomplished students from all over the world, as well as delighted parents, are real proof of our achievement in technical education.\n\
\n\
You are cordially invited to TCET for an exciting journey to success. Let me guarantee you that the TCET campus environment will make the early years of your professional career meaningful to cherish.\n\
\n\
Congratulations and warm welcome to all the engineering aspirants to TCET!!',
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
