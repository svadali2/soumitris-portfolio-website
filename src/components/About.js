import React from 'react';
import '../styles/About.css';
import headshot from '../../photos/headshot.jpg';

function About() {
  return (
    <div className="body">
    <h1 className="big"> Hello </h1>
    <p className="words">
    <img src={headshot} alt="soumitri" width="30%" align="right" height="30%" />
    Hello, I'm Soumitri - a photographer based in Singapore who focuses on
                          photographing humans, food and products.
                          </p>
    <p className="words">After studying Computer Engineering in the United States for several
                          years, I moved back home in 2018 and recently completed my diploma in
                          Photography and Digital Imaging at the Chatsworth Medi@rt Academy.</p>
    <p className="words">Through an interest for film making, I bought my first DSLR in 2017. By chance,
                          while taking street photographs, it dawned on me that I really loved taking photos.
                          Photography gave me the base to explore the vast field of the visual arts. To
                          incorporate compositional techniques, color theory and lighting into a single
                          frame made me think about photography differently. It was the right blend of creative
                          freedom and technical challenge for me to pursue.</p>
    <p className="words">On the side, I enjoy programming, running, going to art museums and reading fiction. </p>
    </div>
  );
}

export default About;
