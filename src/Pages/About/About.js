import style from './about.module.scss';
import React from 'react';
import profile_image from '../../_assets/profile_image.jpg';
import { Card } from 'primereact/card';

const About = () => {
  return (
    <div className={style.about}>
      <img
        src={profile_image}
        alt="Bhaskar Das"
        className={style.profileImage}
      />
      <Card className={style.aboutCard}>
        <p>
          <b>Bhaskar Das</b> is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
          <br />
          <br /> It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </Card>
    </div>
  );
};

export default About;
