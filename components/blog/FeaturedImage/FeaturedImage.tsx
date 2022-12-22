import { Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from 'types/post';
import React from 'react';
import styles from './FeaturedImage.module.scss';

const FeaturedImage = ({ post = {}, priority = false }: { post: Post; priority?: boolean }) => {
  const { frontMatter, href } = post;

  return (
    <Col className={styles.featuredImageContainer}>
      <Link href={href}>
        <Image
          src={`/static/images/${frontMatter.featuredImage}`}
          fill
          sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
33vw"
          alt=""
          style={{ objectFit: 'cover' }}
          priority={priority}
        ></Image>
      </Link>
    </Col>
  );
};

export { FeaturedImage };
