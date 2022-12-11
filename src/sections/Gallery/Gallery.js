import React from 'react';
import styles from './Gallery.module.css';
import { v4 as uuidv4 } from 'uuid';

const Gallery = () => {
  const images2022 = [
    'img1.jpeg',
    'img2.jpeg',
    'img3.jpeg',
    'img4.jpeg',
    'img5.jpeg',
    'img6.jpeg',
    'img7.jpeg',
    'img8.jpeg',
    'img9.jpeg',
    'img10.jpeg',
    'img11.jpeg',
    'img12.jpeg',
  ];
  const images2021 = [
    'img13.jpeg',
    'img14.jpeg',
    'img15.jpeg',
    'img16.jpeg',
    'img17.jpeg',
    'img18.jpeg',
    'img19.jpeg',
    'img20.jpeg',
    'img21.jpeg',
    'img22.jpeg',
    'img23.jpeg',
    'img24.jpeg',
  ];
  return (
    <>
      <div className={styles.heading}>2022 Edition</div>
      <div className={styles.container}>
        {images2022.map((image) => (
          <div className={styles.galleryItem} key={uuidv4()}>
            <img
              src={process.env.PUBLIC_URL + `img/${image}`}
              alt="galleryImage"
            />
          </div>
        ))}
        {/* {imageIds.map((id, index) => (
          <div className={styles.galleryItem} key={uuidv4()}>
            <img
              src={process.env.PUBLIC_URL + `img/img${index + 1}.jpeg`}
              alt="galleryImage"
            />
            {console.log(`img/img${index + 1}.jpeg`)}
          </div>
        ))} */}
      </div>
      <div className={styles.heading}>2021 Edition</div>
      <div className={styles.container}>
        {images2021.map((image) => (
          <div className={styles.galleryItem} key={uuidv4()}>
            <img
              src={process.env.PUBLIC_URL + `img/${image}`}
              alt="galleryImage"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
