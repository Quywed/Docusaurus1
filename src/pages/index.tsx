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
    'https://gomechanic.in/addons/878e15c1.png'; // Replace with an appropriate car workshop image

  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${carImageURL})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '310px', // Mudar tamanho do header
      }}
    >
      <div className="container">
        <div className={styles.bannerContent}>
          <h1  className="hero__title"
            style={{ color: 'saddlebrown' }} // Mudar a cor
            >{siteConfig.title}
          </h1>
          <p
            className="hero__subtitle"
            style={{ color: 'saddlebrown' }} // Mudar a cor
          >
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
