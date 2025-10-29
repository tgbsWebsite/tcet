import React from 'react';

import './ChairmanMessage.css';
import UniversityFooter from '../../components/Footer';
import Navbar from '../../components/navbar';


function MessageCard({ data }) {
  return (
    <div className="msg-card">
      <div className="msg-header">
        <h1>Principal's Message</h1>
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

export default function Principal() {
  const infoData = {
  name: 'DR. B.K.MISHRA',
  title: 'Principal',
  message: `As Albert Einstein rightly said that scientists investigate which already is; Engineers create which has never been. Therefore, it is a noble profession. Engineers are dynamic thinkers who connect science, technology, and society. They contribute to the country's technical and industrial advancements. I am extremely delighted to mention that the distinguished Thakur College of Engineering and Technology (TCET) was founded in 2001-02. Since its inception, it has set the standard for value-based holistic education by concentrating on new technological trends. I am grateful to our Honourable Chairman, Mr. V.K. Singh, whose energetic leadership has been a guiding light over the years. He is a rigid adherent of discipline, devotion, and responsibility. He is the driving force behind all of us, meeting all of our requirements as we work to get the institution to its current state.

I proudly welcome all undergraduate and postgraduate students to Thakur College of Engineering and Technology (TCET). TCET offers well-qualified, experienced, passionate, and highly committed professors who provide personalised attention to each student using innovative, current, and scientific methodologies and advanced technology. Our College's mission is to maintain the highest educational standards and quality while prioritising academic achievement. It was made feasible by sticking to the highest standards of teaching and learning techniques, as well as research. Our quality extends beyond the classroom; we are also quite active in organising conferences, workshops, seminars, speeches, guest lectures, and other extracurricular events. These exercises encourage our students to think beyond the box, which adds significant value to their professional performance.

According to recent observations and surveys, the majority of engineering graduates lack the necessary life skills to be employed or establish their own businesses. Various methods of teaching and learning, evaluation and assessment, skill development, and employability of globally practised approaches have been effectively adopted for students' overall growth. To address this gap, we have been changing the curriculum to meet the needs of the sectors while maintaining our autonomy. Students are also encouraged to take online certification courses, which are expected to be integrated as credit in the future. Furthermore, with autonomous status, students can choose extra topics that will contribute towards their extra credits and make them eligible for an honours' degree.

“Holistic education," which is a strikingly rich fusion of academic, co-curricular, and extracurricular learning and activities, is what TCET practices. As a consequence, the institute was recently granted autonomous status and is currently listed among the top 200 institutes in the nation by national authorities. TCET extends its warm greeting to you once more as you enter in this vibrant and stimulating new field of science and technology. We also wish all prospective students the best possible luck for a fruitful career and a bright future!


DR. B.K.MISHRA
Ph.D.(Electronics & Telecommunication Engineering)
M.E.(Electronics & Communication Engineering)
B.E.(Electronics Engineering)`,
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
