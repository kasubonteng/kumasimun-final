import React from 'react';
import styles from './About.module.css';
import PageTitle from '../../components/PageTitle';

const About = () => {
  return (
    <div id="about" className={styles.main}>
      <div className={styles.container}>
        <PageTitle subheading="" heading="About Us" />
        <div className={styles.paragraph}>
          <p className="py-4">
            The Kumasi International Model United Nations conference is an
            annual conference held in Kumasi, Ghana. KIMUN is a diplomatic
            conference for young leaders across the world, simulating the
            activities of the United Nations. The KIMUN Conference was founded
            and is hosted by a group of experienced and energetic MUNers (some
            of whom are MUN coaches now) with years of model UN experiences from
            Africa, Asia, Europe and the world at large.
          </p>
          <br />
          <p className="py-4">
            The annual students’ conference aims to prepare young people for
            global assignments by equipping them with leadership and diplomatic
            skills in research, writing, public speaking, lobbying and
            negotiations. It also raises the awareness on the role the United
            Nations plays in the world affairs and to encourage the next
            generation of leaders to get involved in global issues. Several
            measures have been taken to ensure that the simulation accurately
            reflects the way the UN works.
          </p>
          <br />
          <p className="py-4">
            KIMUN is poised at galvanizing a critical mass of young people into
            taking tangible action to develop implementable solutions to cogent
            problems around the world through diplomacy and international
            cooperation. Delegates at KIMUN serve as representatives of various
            world governments on General Assembly committees, affording them the
            opportunity to study complex world issues, understand the positions
            of countries, and learn to successfully negotiate without
            compromising national interests. By assuming the roles of world
            leaders, KIMUN intends to empower young leaders to model
            international cooperation for development while celebrating
            diversity. KIMUN provides a rare opportunity for young global
            leaders to explore the inner workings of the United Nations, and to
            practice diplomacy by assuming the roles of World leaders.
          </p>
          <br />
          <p className="py-4">
            Over the course of few days, Delegates are able to navigate some of
            these issues through rigorous debates, resolution drafting, and
            creating action plans that make their resolutions materialize. It is
            indeed a fantastic experience that allows Delegates to better
            understand the mechanisms of international bodies, the intricacies
            of global politics and further permits them to understand the
            complexities of Diplomacy. Delegates experience is not only built
            around committee sessions, but it is also constructed upon the
            opportunities in which you and other Delegates get to interact with
            one another. There are a series of events lined up to complement our
            delegate’s experience.
          </p>
          <br />
          <p className="py-4">
            These events include; General Assembly simulations, diplomatic and
            cultural night and special interactive sessions. KIMUN takes delight
            in parading very competent officials. The conference shall therefore
            be directed by very experienced young people. It is our desire to
            see innovative ideas and human developers emerge from the KIMUN
            Conference who will change their world in the nearest future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
