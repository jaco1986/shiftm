import React, { useState, useEffect } from 'react';

import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import SVG from 'react-inlinesvg';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

import classnames from 'classnames';
import {fetchNewHighlight} from '@site/src/exports/newHighlight';
import {fetchNewPost} from '@site/src/exports/newPost';
import {fetchNewRelease} from '@site/src/exports/newRelease';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import repoUrl from '@site/src/exports/repoUrl';

import _ from 'lodash';
import styles from './index.module.css';

import './index.css';

const AnchoredH2 = Heading('h2');

const features = [
  {
    title: 'Profile',
    icon: 'user',
    description: (
      <>
      Create your <Link to="/docs/profile/your_profile/">Account</Link> and set your <Link to="/docs/profile/picture">profile picture</Link>. Upload your <Link to="/docs/profile/verification_documents/">verification documents</Link>,
      learn about our <Link to="/docs/about/trust_and_verificaton/">trust and verification</Link> process, view your <Link to="/docs/profile/reviews/">reviews</Link> or read your messages from your <Link to="/docs/profile/messages/">inbox</Link>.
    </>
    ),
  },
  {
    title: 'Shifts',
    icon: 'briefcase',
    description: (
      <>
      <Link to="/docs/shifts/listing/create">Add</Link> or <Link to="/docs/shifts/listing/edit">Edit</Link> a new <Link to="/docs/shifts/listings">listing</Link> and how to <Link to="/docs/shifts/listing/publish">publish</Link> it. Learn how to set your <Link to="/docs/shifts/rates">rates</Link>,  <Link to="/docs/shifts/calendar/dates">dates and times</Link> you want to using from your <Link to="/docs/shifts/calendar">calendar</Link>.
      View <Link to="/docs/shifts/listing/previous">previous</Link> or <Link to="/docs/shifts/listing/upcoming">upcoming</Link> Shift information or download and view your <Link to="/docs/shifts/invoice">invoices</Link>
      </>
    ),
  },
  {
    title: 'Settings',
    icon: 'settings',
    description: (
      <>
      Learn how to change your <Link to="/docs/setup/language/">language</Link> preferences or your payment <Link to="/docs/setup/currency/">currency</Link>.
      Need help with changing your <Link to="/docs/setup/password/">password</Link>? View your <Link to="/docs/setup/dashboard/">dashboard</Link> and find your <Link to="/docs/setup/favorites/">favorite</Link> locums.
      </>
    ),
  },
  {
    title: 'Payments',
    icon: 'dollar-sign',
    description: (
      <>
      Set your <Link to="/docs/about/guarantees/">bank account</Link> information in order to receive <Link to="/docs/about/guarantees/">payouts</Link> . View or <Link to="/docs/about/guarantees/">export</Link>  your <Link to="/docs/about/guarantees/">completed</Link>  and <Link to="/docs/about/guarantees/">future</Link>  transactions or download an <Link to="/docs/about/guarantees/">invoice</Link>.
      We calculate your <Link to="/docs/about/guarantees/">gross earnings</Link> so you don’t have to.
      </>
    ),
  },
  {
    title: 'Safety and Legal',
icon: 'book-open',
description: (
  <>
  Read our  <Link to="/docs/about/terms_and_cond/">Terms & Conditions</Link> and our statement about <Link to="/docs/about/privacy/">Privacy</Link> and our <Link to="/docs/about/safety/">Safety</Link> measures.
  Learn more about why <Link to="/docs/profile/verification_documents/">verification documents</Link> is required and how to <Link to="/docs/about/guarantees/">report</Link> a user and/or abuse.
  </>
    ),
  },
  {
    title: 'Help & Support',
        icon: 'help-circle',
        description: (
          <>
          Need <Link to="/docs/about/guarantees/">help</Link>? Have a look at our <Link to="/docs/about/guarantees/">FAQ</Link> or follow one of our <Link to="/guides/getting-started/">Guides</Link>? Would you like to get in touch with <Link to="/docs/about/support/">support</Link>? <a href={"mailto:support@shiftm.com"}>Email</a>  us now!
          </>
    ),
  },
];

function Features({features}) {
  let rows = [];

  let i,j,temparray,chunk = 3;
  for (i=0,j=features.length; i<j; i+=chunk) {
    let featuresChunk = features.slice(i,i+chunk);

    rows.push(
      <div key={`features${i}`} className="row">
        {featuresChunk.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    );
  }

  return (
    <section className={styles.features}>
      <div className="container">
        <AnchoredH2 id="features">How can we help you?</AnchoredH2>
        {rows}
      </div>
    </section>
  );
}

function Feature({icon, title, description}) {
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <div className={styles.featureIcon}>
        <i className={classnames('feather', `icon-${icon}`)}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {metadata: {latest_release}} = siteConfig.customFields;



  return (
    <Layout title={`${siteConfig.title} - ${siteConfig.tagline}`} description={siteConfig.tagline}>
      <main>
        {features && features.length && <Features features={features} />}
      </main>
    </Layout>
  );
}

export default Home;
