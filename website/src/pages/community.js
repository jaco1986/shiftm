import React from 'react';

import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './community.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const AnchoredH2 = Heading('h2');
const AnchoredH3 = Heading('h3');

function Community() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {metadata: {team}} = siteConfig.customFields;

  return (
    <Layout title="Community" description="Join the Shift'M community. Connect with other users and help make Shift'M better.">
      <header className="hero hero--clean">
        <div className="container container--fluid">
          <h1>Shift'M Community</h1>
          <div className="hero--subtitle">Join the Shift'M community. Connect with other users and help make Shift'M better.</div>
        </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                <a href="https://chat.vector.dev" target="_blank" className="panel panel--button">
                  <div className="panel--icon">
                    <i className="feather icon-message-circle"></i>
                  </div>
                  <div className="panel--title">FAQ</div>
                  <div className="panel--description">Ask questions and get help</div>
                </a>
              </div>
              <div className="col">
                <a href="https://twitter.com/ShiftM_" target="_blank" className="panel panel--button">
                  <div className="panel--icon">
                    <i className="feather icon-twitter" title="Twitter"></i>
                  </div>
                  <div className="panel--title">@ShiftM_</div>
                  <div className="panel--description">Follow us in real-time</div>
                </a>
              </div>
              <div className="col">
                <a href="https://github.com/timberio/vector" target="_blank" className="panel panel--button">
                  <div className="panel--icon">
                    <i className="feather icon-github"></i>
                  </div>
                  <div className="panel--title">Facebook</div>
                  <div className="panel--description">Receive all updates</div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <AnchoredH2 id="team">Meet The Team</AnchoredH2>
            <div className="sub-title">A simple composable format lets you build flexible pipelines</div>

            <div className={styles.coreTeam}>
              {team.map((member, idx) => (
                <Link key={idx} to={member.github} className="avatar avatar--vertical">
                  <img
                    className="avatar__photo avatar__photo--xl"
                    src={member.avatar}
                  />
                  <div className="avatar__intro">
                    <h4 className="avatar__name">{member.name}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Community;
