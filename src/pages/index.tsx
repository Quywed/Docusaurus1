import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const carImageURL =
    'https://thumbs.dreamstime.com/b/spare-parts-machinery-sketch-gears-wheels-background-hand-drawn-white-horizontal-banner-vector-pattern-design-drawing-176631112.jpg'; // Replace with an appropriate car workshop image

  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${carImageURL})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '310px', // Change header height
      }}
    >
      <div className="container">
        <div className={styles.bannerContent}>
          <h1
            className="hero__title"
            style={{ color: 'black' }} // Change the color
          >
            {siteConfig.title}
          </h1>
          <p
            className="hero__subtitle"
            style={{ color: 'black' }} // Change the color
          >
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/pages/service"
            >
              Os nossos servicos🔧.
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
