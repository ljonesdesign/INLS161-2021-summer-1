import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Panopto',
    Svg: require('../../static/img/panopto.svg').default,
    description: (
      <>
        You will need to sign into your <a href="https://uncch.hosted.panopto.com/">UNC Panopto</a> account in order to view class videos and recordings.
      </>
    ),
  },
  {
    title: 'Zoom',
    Svg: require('../../static/img/zoom.svg').default,
    description: (
      <>
        This is an online synchronous class. You will need to be <a href="https://unc.zoom.us/">logged into Zoom</a> in order to join the class sessions. Links to the class sessions will be in Sakai.
      </>
    ),
  },
  {
    title: 'Sakai',
    Svg: require('../../static/img/sakai.svg').default,
    description: (
      <>
        Log into  <a href="https://sakai.unc.edu/welcome/">Sakai</a> to submit assignments and access important class information and resources.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
