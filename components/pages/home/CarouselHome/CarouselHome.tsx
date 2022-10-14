import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import styles from './CarouselHome.module.scss';

const CarouselHome = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={styles.carousel}
      interval={null}
    >
      <Carousel.Item>
        <Image
          src="/static/images/family-gaming.jpg"
          alt="Photo of Mission Mike playing videogames with his three children. Sitting at a computer desk with a green screen behind them."
          width={1200}
          height={900}
        />
        <Carousel.Caption>
          <p>
            Playing video games with my kids and recording our gameplay together is my fav!! Learn
            about our channels Mikey &amp; Daddy and Sleepy Slawth Gaming.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/static/images/office-dogs.jpg"
          alt="Photo of Mission Mike and his two office dogs, Maximus and Magnus lying on the floor in front of the desk."
          width={1200}
          height={900}
        />
        <Carousel.Caption>
          <p>
            I spend the workday coding with my trusty office doggos, Maximus (left) and Magnus.
            Sometimes their snoring can be overheard during Zoom meetings.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/static/images/family-breakfast.jpg"
          alt="Mike eating breakfast with his wife Yohana and their children."
          width={1200}
          height={900}
        />
        <Carousel.Caption>
          <p>
            My family is my ❤️... Everything I do, I do for them. Their wellbeing is my mission.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export { CarouselHome };
