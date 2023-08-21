// pages/about.js
import React from 'react';
import styles from './Styles.module.css';

import Image from 'next/image';

const About = () => {
  const aboutData = {
    title: 'About Us',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula malesuada ex vel vestibulum.',
    teamMembers: [
      {
        id: 1,
        name: 'John Doe',
        role: 'Founder',
        imageSrc: '/images/banf.jpeg', // Replace with the actual image path
        loremIpsumText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula malesuada ex vel vestibulum.',
      },
      {
        id: 2,
        name: 'Jane Smith',
        role: 'Designer',
        imageSrc: '/images/banf.jpeg', // Replace with the actual image path
        loremIpsumText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula malesuada ex vel vestibulum.',
      },
      {
        id: 3,
        name: 'Bob Johnson',
        role: 'Developer',
        imageSrc: '/images/banf.jpeg', // Replace with the actual image path
        loremIpsumText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula malesuada ex vel vestibulum.',
      },
    ],
  };

  return (
    <div className={styles['about-container']}>
      <h1 className={styles['about-title']}>{aboutData.title}</h1>
      <p className={styles['about-description']}>{aboutData.description}</p>
      <h2 className={styles['team-title']}>Our Team</h2>
      <div className={styles['team-list']}>
        {aboutData.teamMembers.map((member) => (
          <div key={member.id} className={styles['team-member']}>
            <div className={styles['team-member-card']}>
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={300} // Set the width to your desired size
                height={200} // Set the height to your desired size
                className={styles['team-member-image']}
              />
              <div className={styles['team-member-text']}>
                <p>
                  {member.name} - {member.role}
                  <br />
                  {member.loremIpsumText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default About;






