import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Experience from '../components/Experience';
import Skills from '../components/Skills';

import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="section">
        <div className="hero is-large is-center">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 id="hero-welcome">Hi, I&apos;m</h1>
              <h1 id="hero-title">Tom Vo</h1>
              <h2 id="hero-subtitle">
                I&apos;m a Software Engineer and I like to build web-apps.
              </h2>
            </div>
            <div className="container has-text-centered">
              <div className="columns is-mobile is-multiline is-centered">
                <div className="column is-narrow">
                  <p className="bd-notification is-primary">
                    <a
                      href="https://www.linkedin.com/in/tomvo16/"
                      id="linkedin-icon"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>
                  </p>
                </div>
                <div className="column is-narrow">
                  <p className="bd-notification is-primary">
                    <a
                      href="https://github.com/tvo25"
                      id="github-icon"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="experience">
        <div className="container">
          <h1 className="section-title has-text-centered">
            — Where I&apos;ve been —
          </h1>
          <Experience></Experience>
        </div>
      </section>
      <section className="section" id="skills">
        <div className="container has-text-centered">
          <h1 className="section-title">— Things I&apos;ve Learned —</h1>
          <Skills></Skills>
        </div>
      </section>
      <section className="section" id="portfolio">
        <div className="container has-text-centered">
          <h1 className="section-title">— Some of my work —</h1>
          {/* <portfolio></portfolio> */}
        </div>
      </section>
      <section className="section" id="about">
        <div className="container">
          <h1 className="section-title has-text-centered">
            — A little about me —
          </h1>
          {/* <about></about> */}
        </div>
      </section>
    </div>
  );
}

export default Home;
